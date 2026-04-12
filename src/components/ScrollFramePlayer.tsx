"use client"

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"

/** Scroll-based scrub; source clip ~30 fps. */
export const ABOUT_SCROLL_FRAMES = 142
export const ABOUT_FRAME_PREFIX = "/images/about-frames/ezgif-frame-"

export function aboutFrameUrl(frameIndex1Based: number): string {
  const n = Math.min(ABOUT_SCROLL_FRAMES, Math.max(1, Math.round(frameIndex1Based)))
  return `${ABOUT_FRAME_PREFIX}${String(n).padStart(3, "0")}.jpg`
}

const ABOUT_SECTION_ID = "about"

/** >1 zooms cover draw (crops edges) so frames fill a tall column without letterboxing. */
const ABOUT_COVER_ZOOM = 1.14

function frameIndexFromScroll(scrollEl: HTMLElement, frameCount: number): number {
  const rect = scrollEl.getBoundingClientRect()
  const vh = window.innerHeight
  const h = Math.max(rect.height, 1)
  const denom = Math.max(1, h + vh)
  const p = (vh - rect.top) / denom
  const t = Math.min(1, Math.max(0, p))
  return Math.round(1 + t * (frameCount - 1))
}

function focalYForWidth(cssWidth: number): number {
  if (cssWidth >= 1024) return 0.5
  if (cssWidth >= 640) return 0.38
  return 0.36
}

function drawCoverWithFocal(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  cw: number,
  ch: number,
  focalX: number,
  focalY: number,
  zoom: number
): void {
  const iw = img.naturalWidth
  const ih = img.naturalHeight
  if (!iw || !ih) return
  const scale = Math.max(cw / iw, ch / ih) * zoom
  const dw = iw * scale
  const dh = ih * scale
  const x = focalX * cw - focalX * dw
  const y = focalY * ch - focalY * dh
  ctx.drawImage(img, x, y, dw, dh)
}

const frameInnerClass =
  "-rotate-1 absolute inset-0 overflow-hidden rounded-2xl shadow-xl shadow-black/40 ring-1 ring-white/5 transition-[box-shadow] duration-300 ease-out hover:shadow-2xl hover:ring-orange-400/30 sm:rounded-3xl lg:-rotate-[0.5deg]"

const reducedMotionImgClass =
  "absolute inset-0 h-full w-full origin-center scale-[1.14] rounded-2xl object-cover object-[center_36%] sm:rounded-3xl sm:object-[center_38%] lg:object-center"

type ScrollFramePlayerProps = {
  alt: string
}

/**
 * Scroll-scrubbed frames drawn on canvas from cached decoded JPEGs. Updating &lt;img src&gt; each
 * frame re-triggers decode and causes visible flicker; canvas blit does not.
 */
export default function ScrollFramePlayer({ alt }: ScrollFramePlayerProps) {
  const frameWrapRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const cacheRef = useRef<Map<number, HTMLImageElement>>(new Map())
  const pendingRef = useRef<Map<number, Promise<HTMLImageElement | null>>>(new Map())
  const rafLoopRef = useRef<number | null>(null)
  const lastTickIdxRef = useRef(-1)
  const paintGenRef = useRef(0)

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === "undefined") return false
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches
  })

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mq.matches)
    const onChange = () => setPrefersReducedMotion(mq.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  const loadFrame = useCallback((index: number): Promise<HTMLImageElement | null> => {
    if (index < 1 || index > ABOUT_SCROLL_FRAMES) return Promise.resolve(null)
    const cached = cacheRef.current.get(index)
    if (cached?.complete && cached.naturalWidth) return Promise.resolve(cached)
    const existing = pendingRef.current.get(index)
    if (existing) return existing
    const p = new Promise<HTMLImageElement | null>((resolve) => {
      const img = new Image()
      img.decoding = "async"
      img.onload = () => {
        cacheRef.current.set(index, img)
        pendingRef.current.delete(index)
        resolve(img)
      }
      img.onerror = () => {
        pendingRef.current.delete(index)
        resolve(null)
      }
      img.src = aboutFrameUrl(index)
    })
    pendingRef.current.set(index, p)
    return p
  }, [])

  const preloadAllFrames = useCallback(() => {
    let i = 1
    const step = () => {
      if (i > ABOUT_SCROLL_FRAMES) return
      const idx = i
      i += 1
      void loadFrame(idx).finally(() => {
        if (idx < ABOUT_SCROLL_FRAMES) {
          if (typeof window.requestIdleCallback === "function") {
            window.requestIdleCallback(() => step(), { timeout: 4000 })
          } else {
            window.setTimeout(step, 0)
          }
        }
      })
    }
    step()
  }, [loadFrame])

  useEffect(() => {
    if (prefersReducedMotion) return
    preloadAllFrames()
  }, [prefersReducedMotion, preloadAllFrames])

  useLayoutEffect(() => {
    if (prefersReducedMotion) return

    const el = document.getElementById(ABOUT_SECTION_ID)
    if (!el) return

    const paint = (frameIndex: number) => {
      const canvas = canvasRef.current
      if (!canvas) return
      const ctx = canvas.getContext("2d", { alpha: false })
      if (!ctx) return
      const img = cacheRef.current.get(frameIndex)
      if (!img?.naturalWidth) return

      const dpr = Math.min(2, window.devicePixelRatio || 1)
      const rect = canvas.getBoundingClientRect()
      const w = rect.width
      const h = rect.height
      if (w < 2 || h < 2) return

      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.fillStyle = "#0a0a0a"
      ctx.fillRect(0, 0, w, h)
      drawCoverWithFocal(ctx, img, w, h, 0.5, focalYForWidth(w), ABOUT_COVER_ZOOM)
    }

    const requestPaint = (idx: number) => {
      const gen = ++paintGenRef.current
      void loadFrame(idx).then(() => {
        if (gen !== paintGenRef.current) return
        paint(idx)
      })
    }

    lastTickIdxRef.current = -1

    const tick = () => {
      const idx = frameIndexFromScroll(el, ABOUT_SCROLL_FRAMES)
      if (idx === lastTickIdxRef.current) return
      lastTickIdxRef.current = idx
      requestPaint(idx)
      for (let d = -2; d <= 2; d++) void loadFrame(idx + d)
    }

    const stopLoop = () => {
      if (rafLoopRef.current != null) {
        cancelAnimationFrame(rafLoopRef.current)
        rafLoopRef.current = null
      }
    }

    const runLoop = () => {
      tick()
      rafLoopRef.current = requestAnimationFrame(runLoop)
    }

    const onScrollOrResize = () => {
      tick()
    }

    const scrollOpts: AddEventListenerOptions = { passive: true, capture: true }
    window.addEventListener("scroll", onScrollOrResize, scrollOpts)
    document.addEventListener("scroll", onScrollOrResize, scrollOpts)
    document.documentElement.addEventListener("scroll", onScrollOrResize, scrollOpts)
    window.addEventListener("resize", onScrollOrResize, scrollOpts)
    window.addEventListener("wheel", onScrollOrResize, { passive: true })
    window.visualViewport?.addEventListener("scroll", onScrollOrResize, scrollOpts)
    window.visualViewport?.addEventListener("resize", onScrollOrResize)

    let roFrame: ResizeObserver | null = null
    const observeTarget = frameWrapRef.current ?? canvasRef.current
    if (observeTarget && typeof ResizeObserver !== "undefined") {
      roFrame = new ResizeObserver(() => {
        const idx = lastTickIdxRef.current
        if (idx >= 1) requestPaint(idx)
      })
      roFrame.observe(observeTarget)
    }

    let roBounds: ResizeObserver | null = null
    if (typeof ResizeObserver !== "undefined") {
      roBounds = new ResizeObserver(onScrollOrResize)
      roBounds.observe(el)
    }

    void loadFrame(1).then(() => {
      lastTickIdxRef.current = -1
      tick()
    })
    runLoop()

    return () => {
      stopLoop()
      roFrame?.disconnect()
      roBounds?.disconnect()
      window.removeEventListener("scroll", onScrollOrResize, scrollOpts)
      document.removeEventListener("scroll", onScrollOrResize, scrollOpts)
      document.documentElement.removeEventListener("scroll", onScrollOrResize, scrollOpts)
      window.removeEventListener("resize", onScrollOrResize)
      window.removeEventListener("wheel", onScrollOrResize)
      window.visualViewport?.removeEventListener("scroll", onScrollOrResize, scrollOpts)
      window.visualViewport?.removeEventListener("resize", onScrollOrResize)
    }
  }, [prefersReducedMotion, loadFrame])

  /** Mobile: fixed aspect; lg: grow with text column (parent supplies height). */
  const frameBoxClass =
    "relative mx-auto w-full max-w-md min-h-[min(260px,52svh)] flex-1 bg-[#0a0a0a] aspect-[4/3] lg:mx-0 lg:aspect-auto lg:max-w-none lg:min-h-0 lg:h-full lg:flex-1"

  if (prefersReducedMotion) {
    return (
      <div className="relative flex h-full min-h-[min(260px,52svh)] w-full min-w-0 flex-1 flex-col lg:min-h-0">
        <div className={frameBoxClass}>
          <div className={frameInnerClass}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={aboutFrameUrl(1)} alt={alt} className={reducedMotionImgClass} loading="lazy" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative flex h-full min-h-[min(260px,52svh)] w-full min-w-0 flex-1 flex-col lg:min-h-0">
      <div ref={frameWrapRef} className={frameBoxClass}>
        <div className={frameInnerClass}>
          <canvas
            ref={canvasRef}
            role="img"
            aria-label={alt}
            className="absolute inset-0 block h-full w-full rounded-2xl sm:rounded-3xl"
          />
        </div>
      </div>
    </div>
  )
}

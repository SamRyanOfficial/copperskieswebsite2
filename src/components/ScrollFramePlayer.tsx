"use client"

import { useCallback, useEffect, useRef, useState, type RefObject } from "react"

/** Exported for About section tuning (scroll distance vs frame range). Source clip was ~30 fps; scrubbing is scroll-based, not clock-based. */
export const ABOUT_SCROLL_FRAMES = 142
export const ABOUT_FRAME_PREFIX = "/images/about-frames/ezgif-frame-"

export function aboutFrameUrl(frameIndex1Based: number): string {
  const n = Math.min(ABOUT_SCROLL_FRAMES, Math.max(1, Math.round(frameIndex1Based)))
  return `${ABOUT_FRAME_PREFIX}${String(n).padStart(3, "0")}.jpg`
}

/** Matches previous `object-[center_36%]` / `sm:object-[center_38%]` / `lg:object-center`. */
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
  focalY: number
): void {
  const iw = img.naturalWidth
  const ih = img.naturalHeight
  if (!iw || !ih) return
  const scale = Math.max(cw / iw, ch / ih)
  const dw = iw * scale
  const dh = ih * scale
  const x = focalX * cw - focalX * dw
  const y = focalY * ch - focalY * dh
  ctx.drawImage(img, x, y, dw, dh)
}

/** Matches Music section YouTube embeds: subtle ring, orange on hover. */
const frameInnerClass =
  "-rotate-1 absolute inset-0 overflow-hidden rounded-2xl shadow-xl shadow-black/40 ring-1 ring-white/5 transition-[box-shadow] duration-300 ease-out hover:shadow-2xl hover:ring-orange-400/30 sm:rounded-3xl lg:-rotate-[0.5deg]"

type ScrollFramePlayerProps = {
  /**
   * Element whose scroll position in the viewport drives frame index (typically the wrapping section).
   * Section height stays content-sized — no artificial min-height track.
   */
  scrollBoundsRef: RefObject<HTMLElement | null>
  alt: string
}

export default function ScrollFramePlayer({ scrollBoundsRef, alt }: ScrollFramePlayerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const cacheRef = useRef<Map<number, HTMLImageElement>>(new Map())
  const pendingRef = useRef<Map<number, Promise<HTMLImageElement | null>>>(new Map())
  const rafRef = useRef<number | null>(null)
  const idleIdRef = useRef<number | null>(null)
  const lastFrameRef = useRef(1)

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

  const paint = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    const dpr = Math.min(2, typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1)
    const rect = canvas.getBoundingClientRect()
    const w = rect.width
    const h = rect.height
    if (w < 2 || h < 2) return
    canvas.width = Math.round(w * dpr)
    canvas.height = Math.round(h * dpr)
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.fillStyle = "#0a0a0a"
    ctx.fillRect(0, 0, w, h)

    const img = cacheRef.current.get(frameIndex)
    if (!img?.naturalWidth) return
    const focalY = focalYForWidth(w)
    drawCoverWithFocal(ctx, img, w, h, 0.5, focalY)
  }, [])

  const schedulePaint = useCallback(
    (frameIndex: number) => {
      lastFrameRef.current = frameIndex
      void loadFrame(frameIndex).then(() => {
        if (lastFrameRef.current !== frameIndex) return
        paint(frameIndex)
      })
    },
    [loadFrame, paint]
  )

  useEffect(() => {
    if (prefersReducedMotion) return

    let roCanvas: ResizeObserver | null = null
    let roBounds: ResizeObserver | null = null
    const canvas = canvasRef.current
    if (canvas && typeof ResizeObserver !== "undefined") {
      roCanvas = new ResizeObserver(() => paint(lastFrameRef.current))
      roCanvas.observe(canvas)
    }

    const tick = () => {
      rafRef.current = null
      const bounds = scrollBoundsRef.current
      if (!bounds) return
      const rect = bounds.getBoundingClientRect()
      const viewH = window.innerHeight
      // p = 0 when section top hits bottom of viewport; p = 1 when section has scrolled past.
      const denom = Math.max(1, rect.height + viewH)
      const pRaw = (viewH - rect.top) / denom
      const p = Math.min(1, Math.max(0, pRaw))
      const frameFloat = 1 + p * (ABOUT_SCROLL_FRAMES - 1)
      const frameIndex = Math.round(frameFloat)
      schedulePaint(frameIndex)

      const cur = frameIndex
      for (let d = -2; d <= 2; d++) void loadFrame(cur + d)
    }

    const onScrollOrResize = () => {
      if (rafRef.current != null) return
      rafRef.current = window.requestAnimationFrame(tick)
    }

    window.addEventListener("scroll", onScrollOrResize, { passive: true })
    window.addEventListener("resize", onScrollOrResize, { passive: true })

    const boundsEl = scrollBoundsRef.current
    if (boundsEl && typeof ResizeObserver !== "undefined") {
      roBounds = new ResizeObserver(onScrollOrResize)
      roBounds.observe(boundsEl)
    }

    tick()

    const scheduleIdlePreload = () => {
      let i = 1
      const step = () => {
        if (i > ABOUT_SCROLL_FRAMES) return
        const idx = i
        i += 1
        void loadFrame(idx).finally(() => {
          if (idx < ABOUT_SCROLL_FRAMES) {
            if (typeof window.requestIdleCallback === "function") {
              idleIdRef.current = window.requestIdleCallback(step, { timeout: 2000 })
            } else {
              idleIdRef.current = window.setTimeout(step, 16) as unknown as number
            }
          }
        })
      }
      if (typeof window.requestIdleCallback === "function") {
        idleIdRef.current = window.requestIdleCallback(step, { timeout: 2000 })
      } else {
        idleIdRef.current = window.setTimeout(step, 0) as unknown as number
      }
    }
    scheduleIdlePreload()

    return () => {
      roCanvas?.disconnect()
      roBounds?.disconnect()
      window.removeEventListener("scroll", onScrollOrResize)
      window.removeEventListener("resize", onScrollOrResize)
      if (rafRef.current != null) window.cancelAnimationFrame(rafRef.current)
      if (idleIdRef.current != null) {
        if (typeof window.cancelIdleCallback === "function") {
          window.cancelIdleCallback(idleIdRef.current)
        } else {
          window.clearTimeout(idleIdRef.current)
        }
      }
    }
  }, [loadFrame, paint, prefersReducedMotion, schedulePaint, scrollBoundsRef])

  if (prefersReducedMotion) {
    return (
      <div className="relative mx-auto aspect-[4/3] w-full max-w-md min-h-[220px] lg:mx-0 lg:max-w-none lg:aspect-auto lg:min-h-[min(72vh,640px)] lg:w-full">
        <div className={frameInnerClass}>
          {/* eslint-disable-next-line @next/next/no-img-element -- JPG sequence in public/; avoids enumerating 142 URLs in next/image */}
          <img
            src={aboutFrameUrl(1)}
            alt={alt}
            className="absolute inset-0 h-full w-full object-cover object-[center_36%] sm:object-[center_38%] lg:object-center"
            loading="lazy"
          />
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full">
      <div className="relative mx-auto aspect-[4/3] w-full max-w-md min-h-[220px] lg:mx-0 lg:max-w-none lg:aspect-auto lg:min-h-[min(72vh,640px)] lg:w-full">
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

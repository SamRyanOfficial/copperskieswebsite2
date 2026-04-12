"use client"

import { useEffect, useRef, useState } from "react"

/** Served from public/ — filename has spaces, so encode the segment. */
export const ABOUT_VIDEO_SRC =
  "/About-us-video/" + encodeURIComponent("Copper Skies Country Night.mp4")

const frameInnerClass =
  "-rotate-1 absolute inset-0 overflow-hidden rounded-2xl shadow-xl shadow-black/40 ring-1 ring-white/5 transition-[box-shadow] duration-300 ease-out hover:shadow-2xl hover:ring-orange-400/30 sm:rounded-3xl lg:-rotate-[0.5deg]"

const frameBoxClass =
  "relative mx-auto w-full max-w-md min-h-[min(260px,52svh)] flex-1 bg-[#0a0a0a] aspect-[4/3] lg:mx-0 lg:aspect-auto lg:max-w-none lg:min-h-0 lg:h-full lg:flex-1"

const videoClassName =
  "absolute inset-0 block h-full w-full rounded-2xl object-cover object-center sm:rounded-3xl"

type AboutVideoProps = {
  /** Accessible description of the clip (e.g. live performance). */
  "aria-label": string
}

/**
 * Looped, muted About media (9×16 source fills the frame with object-cover).
 * Autoplay is disabled when the user prefers reduced motion.
 */
export default function AboutVideo({ "aria-label": ariaLabel }: AboutVideoProps) {
  const ref = useRef<HTMLVideoElement>(null)
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window === "undefined") return false
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches
  })

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(mq.matches)
    const onChange = () => setReducedMotion(mq.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (reducedMotion) {
      el.pause()
      try {
        el.currentTime = 0
      } catch {
        /* ignore */
      }
      return
    }
    void el.play().catch(() => {
      /* autoplay blocked — leave paused */
    })
  }, [reducedMotion])

  return (
    <div className="relative flex h-full min-h-[min(260px,52svh)] w-full min-w-0 flex-1 flex-col lg:min-h-0">
      <div className={frameBoxClass}>
        <div className={frameInnerClass}>
          <video
            ref={ref}
            className={videoClassName}
            src={ABOUT_VIDEO_SRC}
            muted
            playsInline
            loop
            preload="metadata"
            autoPlay={!reducedMotion}
            aria-label={ariaLabel}
          />
        </div>
      </div>
    </div>
  )
}

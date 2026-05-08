"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play, Calendar } from "lucide-react"

const HERO_IMAGE_DESKTOP = "/images/copper-skies-duo.jpg"
/** Portrait — phones & tablets; wide shot from `lg` up */
const HERO_IMAGE_MOBILE = "/images/copper-skies-hero-mobile.png"

/** Primary CTA — swap to `"Check Your Date"` for A/B tests; default matches live copy. */
const HERO_PRIMARY_CTA_TEXT: "Check Availability" | "Check Your Date" = "Check Availability"

const primaryBtn =
  "min-h-[3rem] w-full max-w-[17rem] cursor-pointer rounded-xl border-0 bg-gradient-to-r from-orange-600 to-orange-500 px-6 py-3 text-[0.9375rem] font-semibold leading-none text-white shadow-lg shadow-orange-600/25 ring-1 ring-white/10 transition-[transform,box-shadow,background-color] duration-200 ease-out hover:scale-[1.02] hover:from-orange-500 hover:to-orange-500 hover:shadow-xl hover:shadow-orange-500/30 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black motion-reduce:hover:scale-100 motion-reduce:active:scale-100 sm:min-h-[3.25rem] sm:text-base lg:min-h-[3.5rem] lg:w-[14.5rem] lg:max-w-none lg:rounded-2xl lg:px-7 lg:py-3.5 lg:text-[1.0625rem] lg:flex-shrink-0"

const secondaryBtn =
  "min-h-[3rem] w-full max-w-[17rem] cursor-pointer rounded-xl border border-white/22 bg-white/[0.06] px-6 py-3 text-[0.9375rem] font-medium leading-none text-white/92 shadow-none backdrop-blur-sm transition-[transform,background-color,border-color] duration-200 ease-out hover:scale-[1.02] hover:border-white/32 hover:bg-white/12 hover:text-white active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black motion-reduce:hover:scale-100 motion-reduce:active:scale-100 sm:min-h-[3.25rem] sm:text-base lg:min-h-[3.5rem] lg:w-[14.5rem] lg:max-w-none lg:rounded-2xl lg:px-7 lg:py-3.5 lg:text-[1.0625rem] lg:flex-shrink-0"

/** Copper accent phrases — standalone gradient text (not nested inside bg-clip parents) */
const heroLedeAccent =
  "bg-gradient-to-r from-orange-300 via-orange-200 to-amber-100 bg-clip-text font-semibold text-transparent drop-shadow-[0_0_14px_rgba(251,146,60,0.28)]"

export default function Hero() {
  return (
    <section className="relative flex min-h-[88svh] flex-col overflow-hidden sm:min-h-[76svh] lg:min-h-screen">
      {/* Background: portrait on mobile, wide shot from lg */}
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE_MOBILE}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_42%] sm:object-[center_34%] lg:hidden"
          aria-hidden
        />
        <Image
          src={HERO_IMAGE_DESKTOP}
          alt=""
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-center lg:block"
          aria-hidden
        />
        {/* Readability: deeper cinematic scrim (busy backgrounds / windows) */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/[0.28] via-black/[0.5] to-black/[0.86]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/[0.64] via-black/[0.28] to-black/[0.12] lg:from-black/[0.54] lg:via-black/[0.22] lg:to-black/[0.08]"
          aria-hidden
        />
        <div className="absolute inset-0 bg-black/[0.12] lg:bg-black/[0.08]" aria-hidden />
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-center px-5 pb-[max(2.25rem,calc(1.25rem+env(safe-area-inset-bottom,0px)))] pt-[max(5.25rem,calc(3.25rem+env(safe-area-inset-top,0px)))] sm:px-6 sm:pb-14 sm:pt-[clamp(5rem,14vw,7rem)] lg:mx-auto lg:w-full lg:max-w-6xl lg:px-10 lg:pb-24 lg:pt-28">
        <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-safe:duration-700 motion-safe:ease-out mx-auto flex w-full max-w-[36rem] flex-col items-center text-center lg:max-w-[42rem]">
          <h1 className="text-balance text-[clamp(1.875rem,5.25vw,3.25rem)] font-bold leading-[1.14] tracking-[-0.028em] text-white drop-shadow-[0_4px_42px_rgba(0,0,0,0.5)] sm:leading-[1.1] lg:text-[clamp(2.75rem,4.2vw,3.35rem)]">
            Tauranga Wedding & Corporate Duo
          </h1>
          <p className="mt-8 max-w-[26rem] text-pretty text-[clamp(1rem,2.45vw,1.125rem)] font-medium leading-[1.62] tracking-[0.015em] text-[#ece9e4]/95 drop-shadow-[0_2px_14px_rgba(0,0,0,0.48)] sm:mt-10 sm:max-w-xl sm:text-[1.0625rem] sm:leading-[1.68] lg:mt-11 lg:max-w-[30rem] lg:text-lg lg:leading-relaxed">
            <span className={heroLedeAccent}>High-energy live music</span> for weddings, events, and{" "}
            <span className={heroLedeAccent}>packed dance floors</span> across{" "}
            <span className={heroLedeAccent}>the Bay of Plenty</span>.
          </p>

          <div className="mt-12 flex w-full flex-col items-center gap-4 sm:mt-[3.25rem] lg:mt-16 lg:flex-row lg:justify-center lg:gap-5">
            <Button className={primaryBtn} asChild>
              <Link href="#contact" className="flex cursor-pointer items-center justify-center gap-2.5">
                <Calendar className="h-[1.0625rem] w-[1.0625rem] shrink-0 sm:h-[1.125rem] sm:w-[1.125rem]" />
                {HERO_PRIMARY_CTA_TEXT}
              </Link>
            </Button>
            <Button variant="ghost" className={secondaryBtn} asChild>
              <Link href="#music" className="flex cursor-pointer items-center justify-center gap-2.5">
                <Play className="h-[1.0625rem] w-[1.0625rem] shrink-0 opacity-90 sm:h-[1.125rem] sm:w-[1.125rem]" />
                Watch Live Video
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 lg:block motion-reduce:opacity-70 animate-scroll-hint"
        aria-hidden
      >
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/80 shadow-lg">
          <div className="mt-2 h-3 w-1 rounded-full bg-white" />
        </div>
      </div>
    </section>
  )
}

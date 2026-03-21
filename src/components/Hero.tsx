"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play, Calendar, MapPin } from "lucide-react"

const HERO_IMAGE_DESKTOP = "/images/copper-skies-duo.jpg"
/** Portrait — phones & tablets; wide shot from `lg` up */
const HERO_IMAGE_MOBILE = "/images/copper-skies-hero-mobile.png"

export default function Hero() {
  return (
    <section className="relative flex min-h-screen min-h-[100dvh] flex-col justify-center overflow-hidden sm:min-h-[85vh] lg:min-h-screen">
      {/* Background: portrait on mobile, existing wide shot from md up */}
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE_MOBILE}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_22%] lg:hidden"
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
        {/* Readability: deep cinematic gradient — dark at bottom ~75–80% */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/45 to-black/[0.78]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/[0.58] via-black/20 to-transparent lg:from-black/50 lg:via-transparent lg:to-transparent"
          aria-hidden
        />
      </div>

      <div className="absolute bottom-[30%] left-1/2 z-10 flex w-full max-w-4xl -translate-x-1/2 flex-col items-center px-5 pb-6 pt-2 text-center sm:px-6 lg:relative lg:bottom-auto lg:left-auto lg:mx-auto lg:translate-x-0 lg:py-10">
        <h1 className="sr-only">Copper Skies - Wedding & Corporate Event Musicians Mount Maunganui</h1>

        {/* Brand mark — dominant */}
        <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-700 motion-safe:ease-out">
          <div className="relative">
            <Image
              src="/images/copper-skies-logo.png"
              alt="Copper Skies"
              width={600}
              height={180}
              className="mx-auto h-auto w-[min(calc(100vw-2.5rem),420px)] sm:w-[368px] lg:w-[400px] xl:w-[750px]"
              style={{
                filter:
                  "drop-shadow(0 0 1px rgba(0,0,0,0.95)) drop-shadow(0 1px 3px rgba(0,0,0,0.92)) drop-shadow(0 2px 6px rgba(0,0,0,0.78))",
                WebkitFilter:
                  "drop-shadow(0 0 1px rgba(0,0,0,0.95)) drop-shadow(0 1px 3px rgba(0,0,0,0.92)) drop-shadow(0 2px 6px rgba(0,0,0,0.78))",
              }}
            />
          </div>
        </div>

        {/* Subtitle — softer hierarchy */}
        <p
          className="motion-safe:animate-in motion-safe:fade-in motion-safe:duration-700 mt-4 max-w-lg text-balance text-lg font-semibold leading-relaxed tracking-tight text-white/80 motion-safe:delay-100 lg:mt-10 lg:max-w-2xl lg:text-2xl lg:leading-snug"
        >
          <span className="font-bold text-orange-400">Acoustic duo</span>
          <span className="text-white/75">, but with the </span>
          <span className="font-bold text-white">energy of a full band</span>
          <span className="text-white/75">.</span>
        </p>

        {/* CTAs */}
        <div
          className="motion-safe:animate-in motion-safe:fade-in motion-safe:duration-700 mt-6 flex w-full max-w-md flex-col items-center gap-3 motion-safe:delay-200 lg:max-w-none lg:mt-14 lg:flex-row lg:gap-4 lg:justify-center"
        >
          <Button
            className="min-h-[3.25rem] w-full max-w-[20rem] cursor-pointer rounded-2xl border-0 bg-gradient-to-r from-orange-600 to-orange-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-orange-600/30 ring-1 ring-white/10 transition-[transform,box-shadow,background-color] duration-200 ease-out hover:scale-[1.02] hover:from-orange-500 hover:to-orange-500 hover:shadow-xl hover:shadow-orange-500/35 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black motion-reduce:hover:scale-100 motion-reduce:active:scale-100 lg:w-[200px] lg:max-w-none lg:flex-shrink-0 lg:py-4"
            asChild
          >
            <Link href="#contact" className="flex cursor-pointer items-center justify-center gap-2">
              <Calendar className="h-4 w-4 shrink-0 sm:h-[1.125rem] sm:w-[1.125rem]" />
              Check Availability
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="min-h-[3rem] w-full max-w-[20rem] cursor-pointer rounded-2xl border border-white/25 bg-white/5 px-6 py-3 text-base font-medium text-white/90 shadow-none backdrop-blur-sm transition-[transform,background-color,border-color,opacity] duration-200 ease-out hover:scale-[1.02] hover:border-white/35 hover:bg-white/10 hover:text-white active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black motion-reduce:hover:scale-100 motion-reduce:active:scale-100 lg:w-[200px] lg:max-w-none lg:flex-shrink-0 lg:py-3.5"
            asChild
          >
            <Link href="#music" className="flex cursor-pointer items-center justify-center gap-2">
              <Play className="h-4 w-4 shrink-0 opacity-90 sm:h-[1.125rem] sm:w-[1.125rem]" />
              Watch us live
            </Link>
          </Button>
        </div>

        {/* Location — single line; slightly smaller type on narrow widths */}
        <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:duration-700 mt-6 w-full motion-safe:delay-300 lg:mt-14">
          <p className="flex items-center justify-center gap-1.5 text-center text-[10px] leading-tight tracking-tight text-white/85 sm:gap-2.5 sm:text-[13px] sm:leading-normal sm:tracking-normal">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-orange-400/95 sm:h-4 sm:w-4" aria-hidden />
            <span className="whitespace-nowrap">
              Live wedding & event music across Tauranga and the Bay of Plenty
            </span>
          </p>
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

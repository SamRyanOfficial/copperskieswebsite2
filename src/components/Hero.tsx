"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play, Calendar, MapPin } from "lucide-react"

const HERO_IMAGE_DESKTOP = "/images/copper-skies-duo.jpg"
/** Portrait — phones & tablets; wide shot from `lg` up */
const HERO_IMAGE_MOBILE = "/images/copper-skies-hero-mobile.png"

export default function Hero() {
  // min-height uses svh (stable) not dvh — dynamic vh was resizing the hero when mobile browser chrome hid/showed on scroll
  return (
    <section className="relative flex min-h-[85svh] flex-col justify-center overflow-hidden sm:min-h-[72.25svh] lg:min-h-screen">
      {/* Background: portrait on mobile, existing wide shot from md up */}
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

      <div className="absolute left-1/2 top-[44%] z-10 flex w-full max-w-4xl -translate-x-1/2 flex-col items-center px-5 pt-1 text-center sm:px-6 md:top-[42%] max-lg:pb-[max(2rem,calc(0.75rem+env(safe-area-inset-bottom,0px)))] lg:relative lg:top-auto lg:left-auto lg:mx-auto lg:translate-x-0 lg:py-10">
        {/* Brand mark — dominant */}
        <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-700 motion-safe:ease-out">
          <div className="relative">
            <Image
              src="/images/copper-skies-logo.png"
              alt="Copper Skies"
              width={600}
              height={180}
              className="mx-auto h-auto w-[min(calc(100vw-2.5rem),306px)] sm:w-[376px] lg:w-[400px] xl:w-[750px]"
              style={{
                filter:
                  "drop-shadow(0 0 1px rgba(0,0,0,0.95)) drop-shadow(0 1px 3px rgba(0,0,0,0.92)) drop-shadow(0 2px 6px rgba(0,0,0,0.78))",
                WebkitFilter:
                  "drop-shadow(0 0 1px rgba(0,0,0,0.95)) drop-shadow(0 1px 3px rgba(0,0,0,0.92)) drop-shadow(0 2px 6px rgba(0,0,0,0.78))",
              }}
            />
          </div>
        </div>

        {/* Headline + subtext — punchy hierarchy: promise first, credibility second */}
        <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-700 motion-safe:delay-75 motion-safe:ease-out mt-5 w-full min-w-0 max-w-[min(100%,36rem)] sm:mt-8 sm:max-w-2xl lg:mt-10 lg:max-w-4xl">
          <h1 className="text-balance text-[clamp(1.23rem,4.59vw,2.85rem)] font-extrabold leading-[1.07] tracking-[-0.025em] text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)]">
            Music that gets people{" "}
            <span className="text-orange-400">dancing</span>
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-[clamp(0.934rem,3.05vw,1.294rem)] font-semibold leading-snug tracking-tight text-white/85 sm:mt-4 lg:max-w-2xl">
            <span className="text-white">Bay of Plenty&rsquo;s most in-demand </span>
            <span className="font-bold text-orange-400">wedding duo</span>
          </p>
        </div>

        {/* CTAs */}
        <div
          className="motion-safe:animate-in motion-safe:fade-in motion-safe:duration-700 mt-7 flex w-full max-w-md flex-col items-center gap-[0.6375rem] motion-safe:delay-200 sm:mt-8 lg:max-w-none lg:mt-12 lg:flex-row lg:gap-4 lg:justify-center"
        >
          <Button
            className="min-h-[2.07rem] w-full max-w-[12.75rem] cursor-pointer rounded-xl border-0 bg-gradient-to-r from-orange-600 to-orange-500 px-[0.956rem] py-[0.531rem] text-[0.6375rem] font-semibold leading-tight text-white shadow-lg shadow-orange-600/30 ring-1 ring-white/10 transition-[transform,box-shadow,background-color] duration-200 ease-out hover:scale-[1.02] hover:from-orange-500 hover:to-orange-500 hover:shadow-xl hover:shadow-orange-500/35 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black motion-reduce:hover:scale-100 motion-reduce:active:scale-100 lg:min-h-[3.25rem] lg:w-[200px] lg:max-w-none lg:rounded-2xl lg:px-6 lg:py-4 lg:text-base lg:leading-normal lg:flex-shrink-0"
            asChild
          >
            <Link href="#contact" className="flex cursor-pointer items-center justify-center gap-1.5 lg:gap-2">
              <Calendar className="h-[0.6375rem] w-[0.6375rem] shrink-0 lg:h-4 lg:w-4" />
              Check Availability
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="min-h-[1.9125rem] w-full max-w-[12.75rem] cursor-pointer rounded-xl border border-white/25 bg-white/5 px-[0.956rem] py-[0.531rem] text-[0.6375rem] font-medium leading-tight text-white/90 shadow-none backdrop-blur-sm transition-[transform,background-color,border-color,opacity] duration-200 ease-out hover:scale-[1.02] hover:border-white/35 hover:bg-white/10 hover:text-white active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black motion-reduce:hover:scale-100 motion-reduce:active:scale-100 lg:min-h-[3rem] lg:w-[200px] lg:max-w-none lg:rounded-2xl lg:px-6 lg:py-3.5 lg:text-base lg:leading-normal lg:flex-shrink-0"
            asChild
          >
            <Link href="#music" className="flex cursor-pointer items-center justify-center gap-1.5 lg:gap-2">
              <Play className="h-[0.6375rem] w-[0.6375rem] shrink-0 opacity-90 lg:h-4 lg:w-4" />
              Watch Live Video
            </Link>
          </Button>
        </div>

        {/* Location — wraps on narrow widths */}
        <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:duration-700 mt-8 w-full motion-safe:delay-300 sm:mt-9 lg:mt-14">
          <p className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-center text-[10px] leading-tight tracking-tight text-white/85 sm:gap-x-2.5 sm:text-[13px] sm:leading-normal sm:tracking-normal">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-orange-400/95 sm:h-4 sm:w-4" aria-hidden />
            <span className="min-w-0 max-w-[min(100%,22rem)] sm:max-w-none">
              Weddings, corporate events, and private parties across the Bay of Plenty
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

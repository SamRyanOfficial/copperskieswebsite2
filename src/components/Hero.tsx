"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play, Calendar, MapPin } from "lucide-react"

const HERO_IMAGE_DESKTOP = "/images/copper-skies-duo.jpg"
/** Portrait — phones & tablets; wide shot from `lg` up */
const HERO_IMAGE_MOBILE = "/images/copper-skies-hero-mobile.png"

/** Primary CTA — swap to `"Check Your Date"` for A/B tests; default matches live copy. */
const HERO_PRIMARY_CTA_TEXT: "Check Availability" | "Check Your Date" = "Check Availability"

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
        {/* Brand (1) — smaller + lower opacity so H1 leads */}
        <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-700 motion-safe:ease-out opacity-80">
          <div className="relative">
            <Image
              src="/images/copper-skies-logo.png"
              alt="Copper Skies"
              width={600}
              height={180}
              className="mx-auto h-auto w-[min(calc(100vw-2.5rem),248px)] sm:w-[312px] lg:w-[330px] xl:w-[min(565px,90vw)] 2xl:w-[min(600px,min(80vw,48rem))]"
              style={{
                filter:
                  "drop-shadow(0 0 1px rgba(0,0,0,0.85)) drop-shadow(0 1px 2px rgba(0,0,0,0.7)) drop-shadow(0 2px 4px rgba(0,0,0,0.6))",
                WebkitFilter:
                  "drop-shadow(0 0 1px rgba(0,0,0,0.85)) drop-shadow(0 1px 2px rgba(0,0,0,0.7)) drop-shadow(0 2px 4px rgba(0,0,0,0.6))",
              }}
            />
          </div>
        </div>

        {/* (2) H1 (3) proof + (4) emotional (grouped) — flow: headline → sub-cluster → detail → CTA */}
        <div
          className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-700 motion-safe:delay-75 motion-safe:ease-out mt-8 w-full min-w-0 sm:mt-11 lg:mt-14"
        >
          <div className="mx-auto w-full max-w-[min(100%,32rem)] sm:max-w-2xl lg:max-w-[40rem]">
            <h1 className="flex flex-col items-center gap-0.5 text-center text-[clamp(1.425rem,5.13vw,3.09rem)] font-extrabold tracking-[-0.03em] text-white drop-shadow-[0_2px_32px_rgba(0,0,0,0.55)] sm:gap-1">
              <span className="block min-w-0 text-balance leading-[0.99]">Tauranga Wedding Band</span>
              <span className="block min-w-0 leading-[0.99]">Live Music Duo</span>
            </h1>
            <div className="mx-auto mt-8 max-w-[min(100%,28rem)] space-y-1.5 sm:mt-9 sm:max-w-md sm:space-y-2 md:mt-9 lg:max-w-lg">
              <p className="text-balance text-[clamp(0.9rem,2.7vw,1.15rem)] font-medium leading-snug tracking-tight text-white/90">
                Tauranga & Bay of Plenty&rsquo;s most in-demand wedding band for high-energy live music
              </p>
              <p className="text-balance text-[clamp(0.8rem,2.45vw,1.02rem)] font-medium leading-snug tracking-tight text-white/55">
                Music that gets people <span className="text-orange-400/85">dancing</span>
              </p>
            </div>
          </div>
        </div>

        {/* (5) CTAs — final step, extra air above */}
        <div
          className="motion-safe:animate-in motion-safe:fade-in motion-safe:duration-700 mt-11 flex w-full max-w-md flex-col items-center gap-[0.575rem] motion-safe:delay-200 sm:mt-14 lg:max-w-none lg:mt-16 lg:flex-row lg:gap-[1.15rem] lg:justify-center"
        >
          <Button
            className="min-h-[2.875rem] w-full max-w-[14.6625rem] cursor-pointer rounded-xl border-0 bg-gradient-to-r from-orange-600 to-orange-500 px-[1.15rem] py-[0.575rem] text-[0.8625rem] font-semibold leading-tight text-white shadow-lg shadow-orange-600/30 ring-1 ring-white/10 transition-[transform,box-shadow,background-color] duration-200 ease-out hover:scale-[1.02] hover:from-orange-500 hover:to-orange-500 hover:shadow-xl hover:shadow-orange-500/35 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black motion-reduce:hover:scale-100 motion-reduce:active:scale-100 sm:min-h-[3.1625rem] sm:text-[1.00625rem] lg:min-h-[3.7375rem] lg:w-[230px] lg:max-w-none lg:rounded-2xl lg:px-[1.725rem] lg:py-[1.15rem] lg:text-[1.15rem] lg:leading-normal lg:flex-shrink-0"
            asChild
          >
            <Link href="#contact" className="flex cursor-pointer items-center justify-center gap-[0.575rem] lg:gap-[0.575rem]">
              <Calendar className="h-[1.00625rem] w-[1.00625rem] shrink-0 sm:h-[1.15rem] sm:w-[1.15rem] lg:h-[1.15rem] lg:w-[1.15rem]" />
              {HERO_PRIMARY_CTA_TEXT}
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="min-h-[2.875rem] w-full max-w-[14.6625rem] cursor-pointer rounded-xl border border-white/25 bg-white/5 px-[1.15rem] py-[0.575rem] text-[0.8625rem] font-medium leading-tight text-white/90 shadow-none backdrop-blur-sm transition-[transform,background-color,border-color,opacity] duration-200 ease-out hover:scale-[1.02] hover:border-white/35 hover:bg-white/10 hover:text-white active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black motion-reduce:hover:scale-100 motion-reduce:active:scale-100 sm:min-h-[3.1625rem] sm:text-[1.00625rem] lg:min-h-[3.7375rem] lg:w-[230px] lg:max-w-none lg:rounded-2xl lg:px-[1.725rem] lg:py-[1.15rem] lg:text-[1.15rem] lg:leading-normal lg:flex-shrink-0"
            asChild
          >
            <Link href="#music" className="flex cursor-pointer items-center justify-center gap-[0.575rem] lg:gap-[0.575rem]">
              <Play className="h-[1.00625rem] w-[1.00625rem] shrink-0 opacity-90 sm:h-[1.15rem] sm:w-[1.15rem] lg:h-[1.15rem] lg:w-[1.15rem]" />
              Watch Live Video
            </Link>
          </Button>
        </div>

        {/* (6) Services / area — under CTAs, least emphasis (md+; compact hero on small phones) */}
        <div className="hidden motion-safe:animate-in motion-safe:fade-in motion-safe:duration-700 md:mt-6 md:block md:w-full motion-safe:delay-100 lg:mt-7">
          <p className="mx-auto flex w-full min-w-0 max-w-full flex-nowrap items-center justify-center gap-x-1.5 text-center text-[clamp(6.3px,0.42rem+0.4725vw,9.975px)] font-normal leading-none tracking-tight text-white/80 sm:gap-x-2">
            <MapPin
              className="h-2.5 w-2.5 shrink-0 text-orange-400/80 sm:h-3 sm:w-3"
              aria-hidden
            />
            <span className="shrink-0 whitespace-nowrap">
              Weddings, corporate events, and private parties across Tauranga and the Bay of Plenty
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

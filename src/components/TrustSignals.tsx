"use client"

import { Star } from "lucide-react"
import { BookingScarcityNotice } from "@/components/BookingScarcityNotice"

const trustItems = [
  { short: "250+ Events", full: "250+ Weddings & Events" },
  { short: "5★ Reviews", full: "5-Star Reviews" },
  { short: "NZ-wide", full: "Performing Across New Zealand" },
]

export default function TrustSignals() {
  return (
    <section className="relative border-y border-gray-800 bg-gray-900/80 py-2 sm:py-5">
      <div className="absolute left-5 right-5 top-0 h-px bg-gradient-to-r from-transparent via-gray-600/40 to-transparent sm:left-8 sm:right-8" aria-hidden />
      <div className="section-shell">
        {/* Mobile: same width as hero CTA column (max-w-md), stats spread evenly */}
        <div className="mx-auto flex w-full max-w-md justify-between gap-1 sm:hidden">
          {trustItems.map((item) => (
            <div
              key={item.full}
              className="flex min-w-0 flex-1 flex-col items-center justify-center gap-0.5 text-center text-[10px] font-medium leading-tight text-gray-100"
            >
              <Star className="h-3 w-3 shrink-0 fill-orange-400/90 text-orange-400/90" />
              <span className="px-0.5">{item.short}</span>
            </div>
          ))}
        </div>
        {/* sm+: full labels */}
        <div className="hidden flex-col items-center justify-center gap-3.5 sm:flex sm:flex-row sm:gap-8 md:gap-12 lg:gap-16">
          {trustItems.map((item) => (
            <div
              key={item.full}
              className="flex items-center gap-2 text-[15px] font-medium leading-snug text-gray-100 sm:text-base"
            >
              <Star className="h-4 w-4 shrink-0 fill-orange-400/90 text-orange-400/90 sm:h-[1.125rem] sm:w-[1.125rem]" />
              <span>{item.full}</span>
            </div>
          ))}
        </div>
        <BookingScarcityNotice variant="trust" />
      </div>
    </section>
  )
}

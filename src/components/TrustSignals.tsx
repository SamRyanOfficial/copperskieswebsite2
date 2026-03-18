"use client"

import { Star } from "lucide-react"

const trustItems = [
  "250+ Weddings & Events",
  "5-Star Reviews",
  "Performing Across New Zealand",
]

export default function TrustSignals() {
  return (
    <section className="relative py-4 sm:py-5 bg-gray-900/80 border-y border-gray-800">
      {/* Subtle divider above */}
      <div className="absolute top-0 left-4 right-4 sm:left-8 sm:right-8 h-px bg-gradient-to-r from-transparent via-gray-600/40 to-transparent" aria-hidden />
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 md:gap-12 lg:gap-16">
          {trustItems.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-1.5 text-gray-200 text-sm sm:text-base leading-tight"
            >
              <Star className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-orange-400/80 flex-shrink-0 fill-orange-400/80" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

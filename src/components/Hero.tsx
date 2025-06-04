"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play, Calendar, MapPin, Music } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-[40vh] h-auto py-8 md:min-h-screen md:py-0 flex items-end sm:items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/images/copper-skies-duo.jpg" alt="Copper Skies" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/90" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pb-4 sm:pb-0">
        <div className="space-y-2 sm:space-y-3 md:space-y-4 mb-4 sm:mb-6 md:mb-8">
          <div>
            <Image
              src="/images/copper-skies-logo.png"
              alt="Copper Skies"
              width={600}
              height={180}
              className="mx-auto h-auto w-[280px] sm:w-[320px] md:w-[400px] lg:w-[750px] animate-in fade-in duration-1000 [filter:drop-shadow(-1px_-1px_0px_#000)_drop-shadow(1px_1px_0px_#000)_drop-shadow(1px_-1px_0px_#000)_drop-shadow(-1px_1px_0px_#000)]"
            />
          </div>
          <p className="text-xs sm:text-base md:text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed px-2 animate-in fade-in duration-1000 delay-300">
            <span className="font-semibold text-orange-400">Acoustic duo</span>, but with the{" "}
            <span className="font-semibold text-white">energy of a full band</span>.
          </p>
        </div>

        <div className="flex flex-row items-center justify-center space-x-3 sm:space-x-4 mb-4 sm:mb-6 md:mb-8 animate-in fade-in duration-1000 delay-500">
          <Button
            className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-3 sm:px-8 py-1.5 sm:py-3 text-xs sm:text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 w-32 sm:w-auto"
            asChild
          >
            <Link href="#music">
              <Play className="mr-1.5 h-3 w-3 sm:h-5 sm:w-5" />
              Listen Now
            </Link>
          </Button>
          <Button
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-black bg-transparent px-3 sm:px-8 py-1.5 sm:py-3 text-xs sm:text-base hover:scale-105 transition-all duration-200 shadow-lg w-32 sm:w-auto"
            asChild
          >
            <Link href="#contact">
              <Calendar className="mr-1.5 h-3 w-3 sm:h-5 sm:w-5" />
              Contact us
            </Link>
          </Button>
        </div>

        <div className="flex flex-row items-center justify-center space-x-3 sm:space-x-6 text-[8px] sm:text-sm text-gray-300 px-2 sm:px-4 animate-in fade-in duration-1000 delay-700">
          <div className="flex items-center bg-black/30 px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-full backdrop-blur-sm whitespace-nowrap">
            <MapPin className="mr-1 sm:mr-2 h-2.5 w-2.5 sm:h-4 sm:w-4 text-orange-400" />
            Mount Maunganui, New Zealand
          </div>
          <div className="hidden sm:flex items-center bg-black/30 px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-full backdrop-blur-sm whitespace-nowrap">
            <Music className="mr-1 sm:mr-2 h-2.5 w-2.5 sm:h-4 sm:w-4 text-orange-400" />
            Acoustic Covers
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center shadow-lg">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
} 
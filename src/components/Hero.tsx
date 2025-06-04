"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play, Calendar, MapPin, Music } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative h-auto py-8 md:min-h-screen md:py-0 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/images/copper-skies-duo.jpg" alt="Copper Skies" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
      </div>

      <div className="relative z-10 text-center space-y-3 sm:space-y-4 md:space-y-8 px-4 max-w-4xl mx-auto">
        <div className="space-y-2 sm:space-y-3 md:space-y-4">
          <Image
            src="/images/copper-skies-logo.png"
            alt="Copper Skies"
            width={600}
            height={180}
            className="mx-auto h-16 sm:h-20 md:h-28 lg:h-40 w-auto animate-in fade-in duration-1000"
          />
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed px-2 animate-in fade-in duration-1000 delay-300">
            <span className="font-semibold text-orange-400">Acoustic duo</span>, but with the{" "}
            <span className="font-semibold text-white">energy of a full band</span>.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 animate-in fade-in duration-1000 delay-500">
          <Button
            className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 w-44 sm:w-auto"
            asChild
          >
            <Link href="#music">
              <Play className="mr-2 h-3 w-3 sm:h-5 sm:w-5" />
              Listen Now
            </Link>
          </Button>
          <Button
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-black bg-transparent px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base hover:scale-105 transition-all duration-200 shadow-lg w-44 sm:w-auto"
            asChild
          >
            <Link href="#contact">
              <Calendar className="mr-2 h-3 w-3 sm:h-5 sm:w-5" />
              Contact us
            </Link>
          </Button>
        </div>

        <div className="flex flex-row items-center justify-center space-x-3 sm:space-x-6 text-[10px] sm:text-sm text-gray-300 px-2 sm:px-4 animate-in fade-in duration-1000 delay-700">
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
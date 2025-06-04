"use client"

import { Button } from "@/components/ui/button"
import { Volume2 } from "lucide-react"

export default function Music() {
  return (
    <section id="music" className="py-12 sm:py-16 lg:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-8 sm:mb-12">
          <h2 className="text-[2.2rem] sm:text-[2.75rem] md:text-[3.3rem] font-bold text-white">
            Watch Us{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Perform
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-2">
            Watch us perform and see why we&rsquo;re{" "}
            <span className="font-semibold text-orange-400">Bay of Plenty&rsquo;s most sought-after duo</span>
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 mb-8 sm:mb-12">
          <div className="space-y-4 group">
            <div className="aspect-video rounded-lg overflow-hidden bg-gray-900 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/8DL1CYQhO2Y"
                title="Copper Skies Performance"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          <div className="space-y-4 group">
            <div className="aspect-video rounded-lg overflow-hidden bg-gray-900 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/ZCc3ZLYL7TY"
                title="Copper Skies Performance"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button
            className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-6 py-3 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            asChild
          >
            <a href="https://www.youtube.com/@copperskiesmusic" target="_blank" rel="noopener noreferrer">
              <Volume2 className="mr-2 h-4 w-4" />
              View More Videos
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
} 
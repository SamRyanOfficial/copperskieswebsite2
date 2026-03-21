"use client"

import { Button } from "@/components/ui/button"
import { Volume2 } from "lucide-react"

export default function Music() {
  return (
    <section id="music" className="section-y bg-black">
      <div className="section-shell">
        <div className="mb-8 space-y-4 text-center sm:mb-14 sm:space-y-5">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Watch Us{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Perform
            </span>
          </h2>
          <p className="mx-auto max-w-5xl px-2 text-center text-base leading-relaxed text-gray-300 sm:text-lg">
            Watch us perform and see why we&rsquo;re{" "}
            <span className="font-semibold text-orange-400">Bay of Plenty&rsquo;s most sought-after duo</span>
          </p>
        </div>

        <div className="mb-8 grid gap-5 sm:mb-12 sm:gap-8 md:grid-cols-2">
          <div className="space-y-4 group">
            <div className="aspect-video rounded-lg overflow-hidden bg-gray-900 shadow-xl hover:shadow-2xl transition-[box-shadow] duration-300 ease-out ring-1 ring-white/5 group-hover:ring-orange-400/30">
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
            <div className="aspect-video rounded-lg overflow-hidden bg-gray-900 shadow-xl hover:shadow-2xl transition-[box-shadow] duration-300 ease-out ring-1 ring-white/5 group-hover:ring-orange-400/30">
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
            className="min-h-11 cursor-pointer rounded-lg bg-gradient-to-r from-orange-600 to-orange-500 px-6 py-3 text-[15px] font-semibold text-white shadow-lg transition-[background-color,box-shadow] duration-200 ease-out hover:from-orange-700 hover:to-orange-600 sm:text-base"
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
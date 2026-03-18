"use client"

import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                Who are{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  Copper Skies
                </span>
                ?
              </h2>
            </div>
            <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 p-4 rounded-lg border-l-4 border-orange-500">
              <p className="text-base sm:text-lg md:text-xl font-medium text-orange-400 text-center lg:text-left">
                Copper Skies is a high-energy acoustic duo based in Mount Maunganui, Tauranga, performing weddings and events across the Bay of Plenty and throughout New Zealand.
              </p>
            </div>
            <blockquote className="border-l-2 border-gray-600 pl-4 text-base sm:text-lg text-gray-400 italic text-center lg:text-left">
              &ldquo;Planning an event can be stressful - but the music doesn&rsquo;t have to be. We read the room, bring the fun, and keep the energy exactly where it needs to be.&rdquo;
            </blockquote>
            <div className="space-y-5 text-base sm:text-lg text-gray-300 text-center lg:text-left">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">Trusted across the Bay of Plenty</h3>
              <p>
                With over{" "}
                <span className="font-bold text-white">250 weddings and events</span>{" "}
                behind them, Sam and James have become one of the{" "}
                <span className="font-bold text-white">most trusted live music acts</span> in the region.
              </p>
              <p>
                Don&rsquo;t let the duo format fool you -{" "}
                <span className="font-bold text-white">
                  Copper Skies delivers the energy of a full band
                </span>
                , with a huge multi-genre setlist and professional sound and lighting to keep the dance floor packed all night.
              </p>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="aspect-square rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300">
              <Image
                src="/images/copper-skies-performing.jpg"
                alt="Copper Skies performing"
                width={500}
                height={500}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
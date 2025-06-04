"use client"

import Image from "next/image"
import { Award, Users, Music } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                Why{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  Copper Skies
                </span>
                ?
              </h2>
            </div>
            <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 p-4 rounded-lg border-l-4 border-orange-500">
              <p className="text-base sm:text-lg md:text-xl font-medium text-orange-400 text-center lg:text-left">
                &ldquo;Reading the room. Switching gears when it counts. Bringing your guests into the action. That&rsquo;s
                what we do - and that&rsquo;s why they&rsquo;ll remember your event long after the music stops.&rdquo;
              </p>
            </div>
            <div className="space-y-4 text-base sm:text-lg text-gray-300">
              <p>
                Sam and James are one of the most{" "}
                <span className="font-semibold text-orange-400">in-demand acts</span> in the Bay of Plenty. So much
                so, they left their day jobs to perform full-time. With over{" "}
                <span className="font-semibold text-white">200 weddings, corporate events and private parties</span>{" "}
                under their belt, they&rsquo;ve become the go-to covers duo in Tauranga.
              </p>
              <p>
                Don&rsquo;t let the duo format fool you -{" "}
                <span className="font-semibold text-orange-400">
                  Copper Skies delivers the energy of a full band
                </span>
                . With 16+ years of combined professional experience, they know how to read a crowd, fill a dance
                floor, and keep the party going.
              </p>
              <p>
                Their <span className="font-semibold text-white">massive setlist</span> spans Rock, Country, Blues,
                Folk, and Pop from every era, and they come fully equipped with pro sound, lighting, and even a
                generator when needed.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-8">
              <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
                <Award className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400 mx-auto mb-2" />
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-blue-400">5+</div>
                <div className="text-[11px] sm:text-sm text-gray-400">Years Pro</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400 mx-auto mb-2" />
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-blue-400">200+</div>
                <div className="text-[11px] sm:text-sm text-gray-400">Events</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
                <Music className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400 mx-auto mb-2" />
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-blue-400">350+</div>
                <div className="text-[11px] sm:text-sm text-gray-400">Songs</div>
              </div>
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
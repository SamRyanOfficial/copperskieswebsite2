"use client"

import Image from "next/image"

const galleryImages = [
  {
    src: "/images/gallery-1-new.jpg",
    alt: "Energetic performance with dancing crowd",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Intimate venue performance with atmospheric lighting",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Outdoor wedding performance with string lights",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Indoor tent performance in green shirts",
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "Casual promotional photo with instruments",
  },
  {
    src: "/images/gallery-6.jpg",
    alt: "Artistic silhouette at sunset",
    objectPosition: "center bottom",
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-12 sm:py-16 lg:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Gallery
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300">Moments from our performances</p>
        </div>

        <div className="grid gap-3 sm:gap-4 grid-cols-2 md:grid-cols-3">
          {galleryImages.map((image, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-lg overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={400}
                height={400}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                style={{ objectPosition: image.objectPosition || "center" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 
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
    src: "/images/gallery-5.png",
    alt: "Professional portrait of a two-man band posing with an acoustic guitar in front of a rustic stone wall",
    // Portrait in a square tile: bias toward top so heads aren’t clipped (object-cover).
    objectPosition: "center 22%",
  },
  {
    src: "/images/gallery-6.png",
    alt: "Sam and James performing together in an ivy-lined sunroom with guitar and cajon",
    // Portrait with headroom; slight vertical bias keeps both musicians in the square crop.
    objectPosition: "center 42%",
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="section-y bg-black">
      <div className="section-shell">
        <div className="mb-8 space-y-3 text-center sm:mb-14 sm:space-y-5">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Gallery
            </span>
          </h2>
          <p className="text-base text-gray-300 sm:text-lg">Moments from our performances</p>
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
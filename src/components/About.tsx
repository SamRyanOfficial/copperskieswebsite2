"use client"

import AboutVideo from "@/components/AboutVideo"

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-y border-t border-white/[0.06] bg-gradient-to-b from-gray-950 to-gray-900"
    >
      <div className="section-shell">
        <div className="min-w-0">
          <div className="grid items-stretch gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:gap-14 xl:gap-16">
          <div className="order-2 flex min-h-0 min-w-0 flex-col gap-9 sm:gap-11 lg:order-1">
            <header className="text-center lg:text-left">
              <h2
                id="about-heading"
                className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl md:leading-[1.08]"
              >
                Who are{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                  Copper Skies
                </span>
                ?
              </h2>
            </header>

            <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-gray-200 sm:text-xl lg:mx-0 lg:text-left">
              Copper Skies is a high-energy acoustic duo made up of Sam and James, based in Mount
              Maunganui, Tauranga, delivering live wedding music, corporate entertainment, and private
              event music across the Bay of Plenty and throughout New Zealand.
            </p>

            <blockquote className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
              <p className="text-[1.35rem] font-bold italic leading-snug text-white sm:text-2xl md:text-[1.75rem] md:leading-tight">
                <span className="mr-1 text-orange-400">&ldquo;</span>
                We read the room, adjust on the fly, bring the fun, and keep the energy exactly where
                it needs to be.
                <span className="ml-0.5 text-orange-400">&rdquo;</span>
                <span className="ml-1.5 font-semibold not-italic text-orange-300/95"> - Sam Ryan</span>
              </p>
            </blockquote>

            <div className="mx-auto max-w-2xl space-y-5 text-center lg:mx-0 lg:text-left">
              <p className="text-lg font-bold text-orange-300 sm:text-xl">
                Trusted across the Bay of Plenty
              </p>
              <div className="space-y-4 text-base leading-relaxed text-gray-200 sm:text-lg">
                <p>
                  With over{" "}
                  <span className="font-semibold text-white">250 weddings and events</span> behind
                  them, Sam and James are known as one of the region&rsquo;s most trusted live music
                  acts.
                </p>
                <p>
                  From relaxed afternoon sets to packed dance floors,{" "}
                  <span className="font-semibold text-white">Copper Skies</span> brings the energy of
                  a full band with just two musicians, backed by a huge multi-genre setlist and
                  professional sound.
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 flex min-h-0 w-full min-w-0 flex-col lg:sticky lg:top-24 lg:order-2 lg:h-full lg:self-stretch">
            <div className="relative flex h-full min-h-[min(260px,52svh)] w-full max-w-md flex-1 flex-col lg:mx-0 lg:min-h-0 lg:max-w-none">
              <AboutVideo aria-label="Copper Skies live — Country Night performance clip" />
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

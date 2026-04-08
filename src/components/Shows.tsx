"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const shows: {
  date: string
  venue: string
  location: string
  time: string
  year: string
  isFree: boolean
  ticketLink?: string
  /** Instagram (or other) link for the show title */
  venueLink?: string
}[] = [
  {
    date: "Apr 17",
    venue: "Copper Skies Live",
    venueLink: "https://www.instagram.com/p/C0DH4xWvi3H/",
    location: "Latitude37",
    time: "9:30 PM - 12:30 AM",
    year: "2026",
    isFree: true,
  },
  {
    date: "Apr 18",
    venue: "Country Night",
    venueLink: "https://www.instagram.com/p/C8X2J53S3RD/",
    location: "The Good Home",
    time: "8:30 PM - 11:30 PM",
    year: "2026",
    isFree: true,
  },
  {
    date: "May 3",
    venue: "Big Jam",
    venueLink: "https://www.instagram.com/bigjamnight/",
    location: "Astrolabe",
    time: "4:00 PM - 8:00 PM",
    year: "2026",
    isFree: true,
  },
  {
    date: "May 16",
    venue: "Country Night",
    venueLink: "https://www.instagram.com/p/C8X2J53S3RD/",
    location: "The Good Home",
    time: "8:30 PM - 11:30 PM",
    year: "2026",
    isFree: true,
  },
]

export default function Shows() {
  return (
    <section id="shows" className="section-y bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="section-shell">
        <div className="mx-auto max-w-6xl">
        <div className="mb-8 space-y-4 text-center sm:mb-14 sm:space-y-5">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Upcoming{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Public Shows
            </span>
          </h2>
          <p className="px-1 text-base leading-relaxed text-gray-300 sm:text-lg">
            Catch us live at these venues -{" "}
            <span className="font-semibold text-orange-400">all shows are free entry!</span>
          </p>
        </div>

        <div className="grid gap-3 sm:gap-5">
          {shows.map((show, i) => (
            <Card
              key={i}
              className="border-gray-600 bg-gradient-to-r from-gray-800 to-gray-700 shadow-lg transition-[box-shadow] duration-200 ease-out hover:shadow-xl"
            >
              <CardContent className="p-3 sm:p-5">
                <div className="flex w-full min-w-0 flex-row items-center gap-2 sm:gap-6">
                  {/* Date block */}
                  <div className="flex w-[3.5rem] shrink-0 flex-col items-center justify-center rounded-lg bg-black/30 py-2 text-center sm:w-24 sm:py-3">
                    <div className="text-sm font-bold leading-none text-orange-400 sm:text-2xl">{show.date}</div>
                    <div className="mt-0.5 text-[10px] text-gray-400 sm:mt-1 sm:text-sm">{show.year}</div>
                  </div>

                  {/* Venue + meta */}
                  <div className="min-w-0 flex-1 border-l border-gray-600/70 pl-2 sm:pl-5">
                    <div className="truncate text-sm font-semibold text-white sm:text-xl">
                      {show.venueLink ? (
                        <a
                          href={show.venueLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cursor-pointer text-white transition-colors hover:text-orange-400 hover:underline hover:decoration-orange-400/80 hover:underline-offset-2"
                        >
                          {show.venue}
                        </a>
                      ) : (
                        show.venue
                      )}
                    </div>
                    <div className="mt-0.5 truncate text-xs text-gray-300 sm:mt-1 sm:text-base">
                      <span className="text-gray-400">{show.location}</span>
                      <span className="mx-1 text-gray-600" aria-hidden>
                        ·
                      </span>
                      {show.time}
                    </div>
                  </div>

                  {/* Status */}
                  <div className="shrink-0">
                    {show.isFree ? (
                      <div className="rounded-lg border border-green-500/40 bg-gradient-to-br from-green-500/20 to-green-600/25 px-2.5 py-2 text-center sm:min-w-[6.5rem] sm:px-4 sm:py-2.5">
                        <div className="text-sm font-bold uppercase leading-none tracking-wide text-green-400 sm:text-lg">
                          Free
                        </div>
                        <div className="mt-1 text-xs font-medium leading-none text-gray-300 sm:mt-1.5 sm:text-base">
                          entry
                        </div>
                      </div>
                    ) : (
                      show.ticketLink && (
                        <Button
                          asChild
                          className="min-h-9 cursor-pointer bg-gradient-to-r from-orange-600 to-orange-500 px-3 text-sm text-white shadow-md transition-[background-color,box-shadow] duration-200 ease-out hover:from-orange-700 hover:to-orange-600 sm:min-h-11"
                        >
                          <a href={show.ticketLink} target="_blank" rel="noopener noreferrer">
                            Tickets
                          </a>
                        </Button>
                      )
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
} 
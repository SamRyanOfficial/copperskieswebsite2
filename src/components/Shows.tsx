"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const shows: {
  date: string;
  venue: string;
  location: string;
  time: string;
  year: string;
  isFree: boolean;
  ticketLink?: string;
}[] = [
  {
    date: "Jun 21",
    venue: "The Good Home",
    location: "Papamoa",
    time: "8:00 PM",
    year: "2025",
    isFree: true,
  },
  {
    date: "Jul 6",
    venue: "Astrolabe",
    location: "Mount Maunganui",
    time: "4:00 PM",
    year: "2025",
    isFree: true,
  },
  {
    date: "Jul 11",
    venue: "Latitude 37",
    location: "Mount Maunganui",
    time: "9:30 PM",
    year: "2025",
    isFree: true,
  },
  {
    date: "Aug 3",
    venue: "Astrolabe",
    location: "Mount Maunganui",
    time: "4:00 PM",
    year: "2025",
    isFree: true,
  },
]

export default function Shows() {
  return (
    <section id="shows" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-8 sm:mb-12">
          <h2 className="text-[2.2rem] sm:text-[2.75rem] md:text-[3.3rem] font-bold text-white">
            Upcoming{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Public Shows
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 px-2">
            Catch us live at these venues -{" "}
            <span className="font-semibold text-orange-400">all shows are free entry!</span>
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6">
          {shows.map((show, i) => (
            <Card
              key={i}
              className="bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center justify-between w-full min-h-[80px]">
                  {/* Left: Date */}
                  <div className="flex-shrink-0 text-left">
                    <div className="text-base sm:text-2xl font-bold text-orange-400">{show.date}</div>
                    <div className="text-xs sm:text-sm text-gray-400">{show.year}</div>
                  </div>

                  {/* Center: Venue and Location */}
                  <div className="flex-1 text-center px-4">
                    <div className="text-base sm:text-xl font-semibold text-white">{show.venue}</div>
                    <div className="text-xs sm:text-base text-gray-300">
                      {show.location} • {show.time}
                    </div>
                  </div>

                  {/* Right: Free Entry or Get Tickets */}
                  <div className="flex-shrink-0">
                    {show.isFree ? (
                      <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 p-2 rounded-lg border border-green-500/30">
                        <div className="text-sm sm:text-lg font-semibold text-green-400">🎉 FREE ENTRY</div>
                        <div className="text-[10px] sm:text-sm text-gray-400">No tickets required</div>
                      </div>
                    ) : (
                      show.ticketLink && (
                        <Button
                          asChild
                          className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
                        >
                          <a href={show.ticketLink} target="_blank" rel="noopener noreferrer">
                            Get Tickets
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
    </section>
  )
} 
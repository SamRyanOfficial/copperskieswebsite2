// Matches shows in Shows.tsx for consistent structured data
const shows = [
  {
    date: "May 3",
    venue: "Big Jam",
    location: "Astrolabe",
    time: "4:00 PM – 8:00 PM",
    year: "2026",
    isFree: true,
  },
  {
    date: "May 8",
    venue: "Copper Skies Live",
    location: "Latitude37",
    time: "9:30 PM – 12:30 AM",
    year: "2026",
    isFree: true,
  },
  {
    date: "May 16",
    venue: "Country Night",
    location: "The Good Home",
    time: "8:00 PM – 11:00 PM",
    year: "2026",
    isFree: true,
  },
  {
    date: "May 24",
    venue: "The Bay of Plenty Wedding Show",
    location: "The Cargo Shed, Dive Crescent, Tauranga",
    time: "10:00 AM – 3:00 PM",
    year: "2026",
    isFree: false,
  },
] as const

function toTime24(hour: string, minute: string, period: string): string {
  let h = parseInt(hour, 10)
  const m = parseInt(minute, 10)
  if (Number.isNaN(h) || Number.isNaN(m)) return "12:00:00"
  const p = period.toUpperCase()
  if (p === "PM" && h !== 12) h += 12
  if (p === "AM" && h === 12) h = 0
  return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:00`
}

/** Parse "9:30 PM - 12:30 AM" into ISO-local start/end; endDate rolls to next calendar day when crossing midnight. */
function parseEventStartEnd(
  timeRange: string,
  dateISO: string
): { startDate: string; endDate: string } | null {
  const m = timeRange.match(
    /(\d{1,2}):(\d{2})\s*(AM|PM)\s*[-\u2013]\s*(\d{1,2}):(\d{2})\s*(AM|PM)/i
  )
  if (!m) return null
  const startT = toTime24(m[1], m[2], m[3])
  const endT = toTime24(m[4], m[5], m[6])
  const [sh, sm] = startT.split(":").map((x) => parseInt(x, 10))
  const [eh, em] = endT.split(":").map((x) => parseInt(x, 10))
  const startMins = sh * 60 + sm
  const endMins = eh * 60 + em

  let endDay = dateISO
  if (endMins <= startMins) {
    const d = new Date(`${dateISO}T12:00:00.000Z`)
    d.setUTCDate(d.getUTCDate() + 1)
    endDay = d.toISOString().split("T")[0]
  }

  return {
    startDate: `${dateISO}T${startT}`,
    endDate: `${endDay}T${endT}`,
  }
}

export default function EventSchema() {
  const validFromDate = "2024-01-01T00:00:00.000Z"

  try {
    const eventSchemaData = {
      "@context": "https://schema.org",
      "@graph": shows
        .map((show) => {
          try {
            const fullDate = new Date(`${show.date} ${show.year}`)
            if (Number.isNaN(fullDate.getTime())) return null

            const dateISO = fullDate.toISOString().split("T")[0]
            const range = parseEventStartEnd(show.time, dateISO)
            if (!range) return null

            const description = show.isFree
              ? `Live acoustic music performance by Copper Skies at ${show.venue}, ${show.location}. ${show.time}. Free entry.`
              : `Copper Skies at ${show.venue}, ${show.location}. ${show.time}. Ticketed event — see organiser for admission.`

            return {
              "@type": "MusicEvent",
              name: "Copper Skies Live Performance",
              description,
              image: "https://www.copperskies.co.nz/images/copper-skies-performing.jpg",
              eventStatus: "https://schema.org/EventScheduled",
              startDate: range.startDate,
              endDate: range.endDate,
              organizer: {
                "@type": "MusicGroup",
                "@id": "https://www.copperskies.co.nz/#organization",
                name: "Copper Skies",
                url: "https://www.copperskies.co.nz",
              },
              performer: {
                "@type": "MusicGroup",
                "@id": "https://www.copperskies.co.nz/#organization",
                name: "Copper Skies",
              },
              location: {
                "@type": "Place",
                name: show.venue,
                address: {
                  "@type": "PostalAddress",
                  addressLocality: show.location,
                  addressRegion: "Bay of Plenty",
                  addressCountry: "NZ",
                },
              },
              offers: show.isFree
                ? {
                    "@type": "Offer",
                    url: "https://www.copperskies.co.nz/#shows",
                    price: "0",
                    priceCurrency: "NZD",
                    availability: "https://schema.org/InStock",
                    validFrom: validFromDate,
                  }
                : {
                    "@type": "Offer",
                    url: "https://www.thebayofplentyweddingshow.co.nz/event/the-bay-of-plenty-wedding-show-2026/",
                    price: "20",
                    priceCurrency: "NZD",
                    availability: "https://schema.org/InStock",
                    validFrom: validFromDate,
                  },
            }
          } catch {
            return null
          }
        })
        .filter((event): event is NonNullable<typeof event> => event !== null),
    }

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchemaData) }}
      />
    )
  } catch {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [] }),
        }}
      />
    )
  }
}

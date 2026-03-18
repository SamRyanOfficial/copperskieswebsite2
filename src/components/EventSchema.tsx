// Matches shows in Shows.tsx for consistent structured data
const shows = [
  {
    date: "Mar 21",
    venue: "Copper Skies Live",
    location: "Latitude37",
    time: "9:30 PM - 12:30 AM",
    year: "2026",
    isFree: true,
  },
  {
    date: "Apr 17",
    venue: "Copper Skies Live",
    location: "Latitude37",
    time: "9:30 PM - 12:30 AM",
    year: "2026",
    isFree: true,
  },
  {
    date: "Apr 18",
    venue: "Country Night",
    location: "The Good Home",
    time: "8:30 PM - 11:30 PM",
    year: "2026",
    isFree: true,
  },
  {
    date: "May 3",
    venue: "Jam Night",
    location: "Astrolabe",
    time: "4:00 PM - 8:00 PM",
    year: "2026",
    isFree: true,
  },
]

export default function EventSchema() {
  // Use a static date to avoid hydration mismatches
  const validFromDate = "2024-01-01T00:00:00.000Z"

  try {
    const eventSchemaData = {
      "@context": "https://schema.org",
      "@graph": shows
        .map((show) => {
          try {
            // Parse date more reliably
            const dateStr = `${show.year} ${show.date}`
            const fullDate = new Date(dateStr)
            
            // Handle invalid dates
            if (isNaN(fullDate.getTime())) {
              return null
            }
        
        // Convert time from "8:00 PM" to "20:00" format
        const time24 = (() => {
          try {
            const timeParts = show.time.split(' ')
            if (timeParts.length < 2) {
              // If no AM/PM, assume 24-hour format or default
              return "12:00:00"
            }
            const [time, period] = timeParts
            const [hours, minutes] = time.split(':')
            if (!hours || !minutes) {
              return "12:00:00"
            }
            let hour24 = parseInt(hours, 10)
            if (isNaN(hour24)) hour24 = 12
            if (period === 'PM' && hour24 !== 12) hour24 += 12
            if (period === 'AM' && hour24 === 12) hour24 = 0
            return `${hour24.toString().padStart(2, '0')}:${minutes.padStart(2, '0')}:00`
          } catch (error) {
            return "12:00:00"
          }
        })()
        
        const dateISO = fullDate.toISOString().split('T')[0]
        
        return {
          "@type": "MusicEvent",
          "name": "Copper Skies Live Performance",
          "startDate": `${dateISO}T${time24}`,
          "endDate": `${dateISO}T${time24}`,
          "performer": {
            "@type": "MusicGroup",
            "@id": "https://www.copperskies.co.nz/#organization",
            "name": "Copper Skies"
          },
          "location": {
            "@type": "Place",
            "name": show.venue,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": show.location,
              "addressRegion": "Bay of Plenty",
              "addressCountry": "New Zealand"
            }
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "NZD",
            "availability": "https://schema.org/InStock",
            "validFrom": validFromDate
          }
        }
          } catch (error) {
            return null
          }
        })
        .filter((event): event is NonNullable<typeof event> => event !== null)
    }

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchemaData) }}
      />
    )
  } catch (error) {
    // Return empty script tag if there's an error
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [] }) }}
      />
    )
  }
} 
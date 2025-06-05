// Import the shows data
const shows = [
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

export default function EventSchema() {
  // Use a static date to avoid hydration mismatches
  const validFromDate = "2024-01-01T00:00:00.000Z"

  const eventSchemaData = {
    "@context": "https://schema.org",
    "@graph": shows.map((show) => {
      const dateStr = `${show.year} ${show.date}`
      const fullDate = new Date(dateStr)
      
      return {
        "@type": "MusicEvent",
        "name": "Copper Skies Live Performance",
        "startDate": `${fullDate.toISOString().split('T')[0]}T${show.time.replace(/\s/g, '')}`,
        "endDate": `${fullDate.toISOString().split('T')[0]}T${show.time.replace(/\s/g, '')}`,
        "performer": {
          "@type": "MusicGroup",
          "@id": "https://copperskies.co.nz/#organization",
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
    })
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchemaData) }}
    />
  )
} 
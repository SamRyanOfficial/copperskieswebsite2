import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import EventSchema from "@/components/EventSchema";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Copper Skies - Wedding & Corporate Event Musicians Mount Maunganui",
  description: "Premier wedding and corporate event musicians in Mount Maunganui & Bay of Plenty. Professional acoustic duo with 200+ successful events. Book your live music entertainment today.",
  keywords: "wedding music Mount Maunganui, corporate event band Bay of Plenty, live music duo Tauranga, acoustic wedding band, corporate entertainment Mount Maunganui, wedding musicians Tauranga, live band hire Bay of Plenty, wedding reception music, corporate function band, acoustic duo hire",
  openGraph: {
    title: "Copper Skies - Wedding & Corporate Event Musicians Mount Maunganui",
    description: "Premier wedding and corporate event musicians in Mount Maunganui & Bay of Plenty. Professional acoustic duo with 200+ successful events.",
    url: "https://copperskies.co.nz",
    siteName: "Copper Skies Music",
    images: [
      {
        url: "https://copperskies.co.nz/images/copper-skies-performing.jpg",
        width: 1200,
        height: 630,
        alt: "Copper Skies performing live"
      }
    ],
    locale: "en_NZ",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MusicGroup",
        "@id": "https://copperskies.co.nz/#organization",
        "name": "Copper Skies",
        "url": "https://copperskies.co.nz",
        "image": "https://copperskies.co.nz/images/copper-skies-logo.png",
        "description": "Premier wedding and corporate event musicians in Mount Maunganui, delivering unforgettable live music experiences. With over 200 successful events, we specialize in creating the perfect atmosphere for weddings and corporate functions.",
        "genre": ["Rock", "Country", "Blues", "Folk", "Pop"],
        "member": [
          {
            "@type": "Person",
            "name": "Sam",
            "roleName": "Musician"
          },
          {
            "@type": "Person",
            "name": "James",
            "roleName": "Musician"
          }
        ],
        "location": {
          "@type": "Place",
          "name": "Mount Maunganui",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mount Maunganui",
            "addressRegion": "Bay of Plenty",
            "addressCountry": "New Zealand"
          }
        },
        "makesOffer": [
          {
            "@type": "Offer",
            "name": "Wedding Music Entertainment",
            "description": "Professional live music for wedding ceremonies, cocktail hours, and receptions"
          },
          {
            "@type": "Offer",
            "name": "Corporate Event Entertainment",
            "description": "Live music entertainment for corporate functions, product launches, and business events"
          }
        ],
        "review": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "ratingCount": "200",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://copperskies.co.nz/#business",
        "name": "Copper Skies",
        "url": "https://copperskies.co.nz",
        "logo": "https://copperskies.co.nz/images/copper-skies-logo.png",
        "description": "Professional wedding and corporate event musicians serving Mount Maunganui, Tauranga, and the Bay of Plenty region",
        "areaServed": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": "-37.6333",
            "longitude": "176.1833"
          },
          "geoRadius": "100000"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "copperskiesmusic@gmail.com",
          "contactType": "customer service",
          "availableLanguage": "English"
        },
        "sameAs": [
          "https://www.instagram.com/copperskiesmusic/",
          "https://www.facebook.com/samuel.fisher.1238",
          "https://www.youtube.com/@copperskiesmusic"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://copperskies.co.nz/#website",
        "url": "https://copperskies.co.nz",
        "name": "Copper Skies - Wedding & Corporate Event Musicians",
        "description": "Professional wedding and corporate event musicians in Mount Maunganui, New Zealand",
        "publisher": {
          "@id": "https://copperskies.co.nz/#organization"
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <EventSchema />
        <meta name="geo.region" content="NZ-BOP" />
        <meta name="geo.placename" content="Mount Maunganui" />
        <meta name="geo.position" content="-37.6333;176.1833" />
        <meta name="ICBM" content="-37.6333, 176.1833" />
      </head>
      <body className={inter.className}>
        <Script 
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID || 'YOUR_PIXEL_ID_HERE'}');
              fbq('track', 'PageView');
            `
          }}
        />
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{display: 'none'}}
            src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_META_PIXEL_ID || 'YOUR_PIXEL_ID_HERE'}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}

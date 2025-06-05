import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import EventSchema from "@/components/EventSchema";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Copper Skies - Professional Acoustic Duo",
  description: "Copper Skies is a professional acoustic duo bringing your favorite songs to life with unique arrangements and stunning harmonies.",
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
        "description": "Professional acoustic duo from Mount Maunganui, New Zealand, performing covers across various genres with unique arrangements and stunning harmonies.",
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
        }
      },
      {
        "@type": "Organization",
        "@id": "https://copperskies.co.nz/#business",
        "name": "Copper Skies",
        "url": "https://copperskies.co.nz",
        "logo": "https://copperskies.co.nz/images/copper-skies-logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "copperskiesmusic@gmail.com",
          "contactType": "customer service"
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
        "name": "Copper Skies",
        "description": "Professional acoustic duo from Mount Maunganui, New Zealand",
        "publisher": {
          "@id": "https://copperskies.co.nz/#organization"
        }
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <EventSchema />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

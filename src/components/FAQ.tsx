"use client"

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What types of events do Copper Skies perform at?",
    answer: "We're full-time musicians who've played hundreds of events across New Zealand — from unforgettable weddings to relaxed beachside birthdays, buzzing corporate events, and rowdy bar gigs. Whether it's a black-tie function or a backyard party, we know how to read the room and bring exactly the right energy."
  },
  {
    question: "What kind of music do you play?",
    answer: "We cover a wide mix of rock, country, pop, blues, folk, and a touch of Irish. Think crowd favourites, modern hits, throwbacks, and unexpected gems — all with our own spin and signature harmonies. We tailor every set to your event, whether that's mellow and acoustic or high-energy and dance-floor ready."
  },
  {
    question: "How do you handle wedding ceremony music?",
    answer: "Ceremony music is something we take seriously. We'll work with you to choose the perfect songs for walking down the aisle, signing the register, and making your grand exit. We can perform these moments live, or we can use Spotify through our equipment if you want a specific version of a song played at just the right moment."
  },
  {
    question: "Can you play a full-day wedding?",
    answer: "Yes, absolutely. We often provide live music for the entire day — from the ceremony, to the afternoon canapés and cocktail hour, through to a full three-hour dance floor set at the reception. We can take care of it all and keep the vibe flowing from start to finish."
  },
  {
    question: "Where do you perform?",
    answer:
      "Based in Mount Maunganui and Papamoa, we regularly perform across Tauranga, the Bay of Plenty, and anywhere in New Zealand that calls for great live music. If the event's right, we'll hit the road — or the skies.",
  },
  {
    question: "Why book Copper Skies for corporate events?",
    answer: "We know how to keep things professional and fun. With years of experience and a huge repertoire, we adjust to suit your vibe — whether you want smooth background music during networking or a high-energy set to close the night."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-y bg-gradient-to-b from-black via-black/95 to-black">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-white sm:mb-10 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={cn(
                  "bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-sm",
                  "border border-gray-800/50 rounded-lg overflow-hidden transition-all duration-300",
                  "hover:from-gray-900/90 hover:to-black/90"
                )}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between"
                >
                  <span className="text-lg font-medium text-white">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-orange-400 transition-transform duration-300",
                      openIndex === index ? "rotate-180" : ""
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    openIndex === index ? "max-h-96" : "max-h-0"
                  )}
                >
                  <p className="px-6 pb-4 text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 
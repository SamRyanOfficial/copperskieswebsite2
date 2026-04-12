"use client"

import Header from "@/components/Header"
import Hero from "@/components/Hero"
import TrustSignals from "@/components/TrustSignals"
import { HeroReviewMarquee } from "@/components/HeroReviewMarquee"
import About from "@/components/About"
import Music from "@/components/Music"
import Shows from "@/components/Shows"
import Gallery from "@/components/Gallery"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Image from "next/image"
import FAQ from "@/components/FAQ"
import Testimonials from "@/components/Testimonials"

export default function CopperSkiesLanding() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-black text-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustSignals />
        <section
          aria-label="Review highlights"
          className="bg-black pb-8 pt-5 sm:pb-10 sm:pt-6 lg:pb-12 lg:pt-8"
        >
          <div className="section-shell">
            <div className="mx-auto max-w-5xl">
              <HeroReviewMarquee />
            </div>
          </div>
        </section>
        <About />
        <Music />
        <Contact />
        <Testimonials />
        <Gallery />
        <Shows />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
} 
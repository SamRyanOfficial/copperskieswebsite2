"use client"

import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Music from "@/components/Music"
import Shows from "@/components/Shows"
import Gallery from "@/components/Gallery"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function CopperSkiesLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Music />
        <Shows />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
} 
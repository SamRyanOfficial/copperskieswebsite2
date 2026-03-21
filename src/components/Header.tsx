"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Instagram, Facebook, Youtube, Menu, X } from "lucide-react"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6">
        <div className="flex h-16 min-w-0 items-center justify-between gap-2 sm:h-20 sm:gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <Image
              src="/images/copper-skies-logo.png"
              alt="Copper Skies"
              width={150}
              height={45}
              className="h-6 sm:h-8 w-auto transition-opacity duration-200 ease-out hover:opacity-90"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#about"
              className="text-sm font-medium text-gray-300 hover:text-orange-400 rounded-sm px-1 py-1 transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              About
            </Link>
            <Link
              href="#music"
              className="text-sm font-medium text-gray-300 hover:text-orange-400 rounded-sm px-1 py-1 transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Music
            </Link>
            <Link
              href="#shows"
              className="text-sm font-medium text-gray-300 hover:text-orange-400 rounded-sm px-1 py-1 transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Shows
            </Link>
            <Link
              href="#gallery"
              className="text-sm font-medium text-gray-300 hover:text-orange-400 rounded-sm px-1 py-1 transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Gallery
            </Link>
            <Link
              href="#reviews"
              className="text-sm font-medium text-gray-300 hover:text-orange-400 rounded-sm px-1 py-1 transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Reviews
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium text-gray-300 hover:text-orange-400 rounded-sm px-1 py-1 transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              FAQ
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-gray-300 hover:text-orange-400 rounded-sm px-1 py-1 transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Contact
            </Link>
          </nav>

          {/* Right Side Items */}
          <div className="flex min-w-0 shrink items-center gap-1 sm:gap-4">
            {/* Social: md+ only — avoids crowding & horizontal overflow on small phones */}
            <div className="hidden items-center gap-0.5 sm:gap-2 md:flex">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-orange-400 hover:bg-white/5 transition-colors duration-200 ease-out h-11 w-11 sm:h-10 sm:w-10 cursor-pointer"
                asChild
              >
                <a
                  href="https://www.instagram.com/copperskiesmusic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-orange-400 hover:bg-white/5 transition-colors duration-200 ease-out h-11 w-11 sm:h-10 sm:w-10 cursor-pointer"
                asChild
              >
                <a
                  href="https://www.facebook.com/profile.php?id=61576945542143"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-orange-400 hover:bg-white/5 transition-colors duration-200 ease-out h-11 w-11 sm:h-10 sm:w-10 cursor-pointer"
                asChild
              >
                <a
                  href="https://www.youtube.com/@copperskiesmusic"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <Youtube className="h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Desktop Book Us Button */}
            <Button
              className="hidden md:inline-flex min-h-11 cursor-pointer bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white transition-[background-color,box-shadow] duration-200 ease-out shadow-md hover:shadow-lg"
              asChild
            >
              <Link href="#contact" className="cursor-pointer">
                Book Us
              </Link>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden min-h-11 min-w-11 h-11 w-11 text-gray-400 hover:text-orange-400 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-800 bg-black/95 backdrop-blur-md">
          <nav className="flex flex-col space-y-4 px-4 py-6">
            <Link
              href="#about"
              className="text-lg font-medium text-gray-300 hover:text-orange-400 transition-colors duration-200 ease-out py-3 min-h-11 flex items-center justify-center text-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#music"
              className="text-lg font-medium text-gray-300 hover:text-orange-400 transition-colors duration-200 ease-out py-3 min-h-11 flex items-center justify-center text-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Music
            </Link>
            <Link
              href="#shows"
              className="text-lg font-medium text-gray-300 hover:text-orange-400 transition-colors duration-200 ease-out py-3 min-h-11 flex items-center justify-center text-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shows
            </Link>
            <Link
              href="#gallery"
              className="text-lg font-medium text-gray-300 hover:text-orange-400 transition-colors duration-200 ease-out py-3 min-h-11 flex items-center justify-center text-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="#reviews"
              className="text-lg font-medium text-gray-300 hover:text-orange-400 transition-colors duration-200 ease-out py-3 min-h-11 flex items-center justify-center text-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Reviews
            </Link>
            <Link
              href="#faq"
              className="text-lg font-medium text-gray-300 hover:text-orange-400 transition-colors duration-200 ease-out py-3 min-h-11 flex items-center justify-center text-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="#contact"
              className="text-lg font-medium text-gray-300 hover:text-orange-400 transition-colors duration-200 ease-out py-3 min-h-11 flex items-center justify-center text-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>

            {/* Mobile Book Us Button */}
            <Button
              className="min-h-11 cursor-pointer bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white mt-4 py-3 w-full transition-[background-color,box-shadow] duration-200 ease-out"
              asChild
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Link href="#contact" className="cursor-pointer">
                Book Us
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
} 
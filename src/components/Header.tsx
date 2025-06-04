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
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/copper-skies-logo.png"
              alt="Copper Skies"
              width={150}
              height={45}
              className="h-6 sm:h-8 w-auto hover:scale-105 transition-transform duration-200"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#about"
              className="text-sm font-medium text-gray-300 hover:text-orange-400 transition-all duration-200 hover:scale-105"
            >
              About
            </Link>
            <Link
              href="#music"
              className="text-sm font-medium text-gray-300 hover:text-orange-400 transition-all duration-200 hover:scale-105"
            >
              Music
            </Link>
            <Link
              href="#shows"
              className="text-sm font-medium text-gray-300 hover:text-orange-400 transition-all duration-200 hover:scale-105"
            >
              Shows
            </Link>
            <Link
              href="#gallery"
              className="text-sm font-medium text-gray-300 hover:text-orange-400 transition-all duration-200 hover:scale-105"
            >
              Gallery
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-gray-300 hover:text-orange-400 transition-all duration-200 hover:scale-105"
            >
              Contact
            </Link>
          </nav>

          {/* Right Side Items */}
          <div className="flex items-center space-x-4">
            {/* Social Media Icons - Now visible on both mobile and desktop */}
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-orange-400 hover:scale-110 transition-all duration-200 h-8 w-8"
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
                className="text-gray-400 hover:text-orange-400 hover:scale-110 transition-all duration-200 h-8 w-8"
                asChild
              >
                <a
                  href="https://www.facebook.com/samuel.fisher.1238"
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
                className="text-gray-400 hover:text-orange-400 hover:scale-110 transition-all duration-200 h-8 w-8"
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
              className="hidden md:inline-flex bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white"
              asChild
            >
              <Link href="#contact">Book Us</Link>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-gray-400 hover:text-orange-400"
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
              className="text-lg font-medium text-gray-300 hover:text-orange-400 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#music"
              className="text-lg font-medium text-gray-300 hover:text-orange-400 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Music
            </Link>
            <Link
              href="#shows"
              className="text-lg font-medium text-gray-300 hover:text-orange-400 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shows
            </Link>
            <Link
              href="#gallery"
              className="text-lg font-medium text-gray-300 hover:text-orange-400 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="#contact"
              className="text-lg font-medium text-gray-300 hover:text-orange-400 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>

            {/* Mobile Book Us Button */}
            <Button
              className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white mt-4 py-3"
              asChild
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Link href="#contact">Book Us</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
} 
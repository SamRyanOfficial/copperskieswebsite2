"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Instagram, Facebook, Youtube, Menu, X } from "lucide-react"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/95 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto flex h-16 sm:h-20 items-center justify-between px-4 md:px-6">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/copper-skies-logo.png"
              alt="Copper Skies"
              width={200}
              height={60}
              className="h-8 sm:h-10 w-auto cursor-pointer hover:scale-105 transition-transform duration-200"
            />
          </Link>
        </div>

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

        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Social Media Icons */}
          <div className="hidden md:flex items-center space-x-2">
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
            className="hidden md:flex bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            asChild
          >
            <Link href="#contact">Book Us</Link>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:text-orange-400 hover:scale-110 transition-all duration-200 h-10 w-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
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

            {/* Mobile Social Media Icons */}
            <div className="flex items-center justify-center space-x-6 pt-4 border-t border-gray-700">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-orange-400 h-10 w-10" asChild>
                <a
                  href="https://www.instagram.com/copperskiesmusic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-orange-400 h-10 w-10" asChild>
                <a
                  href="https://www.facebook.com/samuel.fisher.1238"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-orange-400 h-10 w-10" asChild>
                <a
                  href="https://www.youtube.com/@copperskiesmusic"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </Button>
            </div>

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
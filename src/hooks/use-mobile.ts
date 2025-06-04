"use client"

import { useEffect, useState } from "react"

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Function to check if window width is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) // 768px is typical tablet/mobile breakpoint
    }

    // Check on mount
    checkMobile()

    // Add resize listener
    window.addEventListener("resize", checkMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return isMobile
} 
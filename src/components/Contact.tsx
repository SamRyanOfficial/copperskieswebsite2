"use client"

import { useState } from "react"

declare global {
  interface Window {
    fbq: (action: string, event: string, params?: Record<string, any>) => void;
  }
}
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react"
import { trackContactFormSubmit } from "@/lib/meta-pixel"
import { BookingScarcityNotice } from "@/components/BookingScarcityNotice"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface ValidationErrors {
  [key: string]: string
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({})
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear validation error when user starts typing
    if (validationErrors[name]) {
      setValidationErrors(prev => ({ ...prev, [name]: "" }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Client-side validation
    const errors: ValidationErrors = {}
    if (!formData.name?.trim()) errors.name = "Name is required"
    if (!formData.email?.trim()) errors.email = "Email is required"
    if (!formData.subject?.trim()) errors.subject = "Event type is required"
    if (!formData.message?.trim()) errors.message = "Message is required"

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors)
      setError("Please fill in all required fields.")
      return
    }

    // Track Meta Pixel event for form submission attempt
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      try {
        window.fbq("track", "InitiateCheckout", {
          content_name: "Contact Form",
          content_category: "Lead Generation",
        })
      } catch (error) {
        console.log("Meta Pixel tracking error:", error)
      }
    }

    setIsSubmitting(true)
    setError("")
    setValidationErrors({})

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          event_type: formData.subject.trim(),
          message: formData.message.trim(),
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to save your message. Please try again.")
      }

      setIsSuccess(true)

      // Track successful contact form submission for Meta Pixel
      trackContactFormSubmit()

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError("Failed to send message. Please try again later.")
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-y bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="section-shell">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2">
          <div className="space-y-5 sm:space-y-8">
            <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Get in <span className="text-orange-400">Touch</span>
            </h2>
            <p className="text-center text-base leading-relaxed text-gray-300 sm:text-lg">
              <span className="text-orange-400">No robots here</span> - this is direct to us. Feel free to call, text or email!
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 bg-gray-800/50 p-3 rounded-lg hover:bg-gray-800/70 transition-all duration-200">
                <Phone className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-300">+64 20 409 17577</span>
              </div>
              <div className="flex items-center space-x-3 bg-gray-800/50 p-3 rounded-lg hover:bg-gray-800/70 transition-all duration-200">
                <Mail className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <a
                  href="mailto:copperskiesmusic@gmail.com"
                  className="text-sm sm:text-base text-gray-300 hover:text-orange-400 transition-colors break-all"
                >
                  copperskiesmusic@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3 bg-gray-800/50 p-3 rounded-lg hover:bg-gray-800/70 transition-all duration-200">
                <MapPin className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-gray-300">
                  Mount Maunganui, Bay of Plenty, New Zealand
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-orange-400 hover:bg-white/5 transition-colors duration-200 ease-out h-11 w-11 sm:h-10 sm:w-10 cursor-pointer"
                asChild
              >
                <a
                  href="https://www.facebook.com/samuel.fisher.1238"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
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
                  <Instagram className="h-5 w-5" />
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
                  <Youtube className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <BookingScarcityNotice variant="contact" />
            <Card className="bg-gradient-to-br from-gray-800 to-gray-700 border-gray-600 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-4 sm:p-6">
                {isSuccess ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="text-3xl mb-2">🎸</div>
                    <h3 className="text-xl font-semibold text-white">Thanks for your message!</h3>
                    <p className="text-gray-300">You will hear from us very soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} method="post" className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-300">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={`bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 h-11 focus:border-orange-400 transition-colors ${
                          validationErrors.name ? "border-red-400" : ""
                        }`}
                        required
                      />
                      {validationErrors.name && (
                        <p className="text-red-400 text-xs mt-1">{validationErrors.name}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-300">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className={`bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 h-11 focus:border-orange-400 transition-colors ${
                          validationErrors.email ? "border-red-400" : ""
                        }`}
                        required
                      />
                      {validationErrors.email && (
                        <p className="text-red-400 text-xs mt-1">{validationErrors.email}</p>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                      Event Type
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={`flex h-11 w-full rounded-md border px-3 py-2 text-base md:text-sm font-normal bg-gray-800 border-gray-600
                        hover:border-orange-500/50 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 focus:outline-none transition-colors
                        [&_option]:bg-gray-800 [&_option]:text-white
                        ${formData.subject ? "text-white" : "text-gray-400"}
                        ${validationErrors.subject ? "border-red-400" : ""}`}
                    >
                      <option value="" disabled>
                        Select event type
                      </option>
                      <option value="Wedding">Wedding</option>
                      <option value="Corporate Event">Corporate Event</option>
                      <option value="Private Party">Private Party</option>
                      <option value="Bar / Venue">Bar / Venue</option>
                      <option value="Other">Other</option>
                    </select>
                    {validationErrors.subject && (
                      <p className="text-red-400 text-xs mt-1">{validationErrors.subject}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your event or venue..."
                      rows={4}
                      className={`bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 resize-none focus:border-orange-400 transition-colors ${
                        validationErrors.message ? "border-red-400" : ""
                      }`}
                      required
                    />
                    {validationErrors.message && (
                      <p className="text-red-400 text-xs mt-1">{validationErrors.message}</p>
                    )}
                  </div>
                  {error && <p className="text-red-400 text-sm">{error}</p>}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed h-11"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                  <p className="text-sm text-gray-400 text-center">
                    We usually reply within a few hours.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
          </div>
        </div>
      </div>
    </section>
  )
} 
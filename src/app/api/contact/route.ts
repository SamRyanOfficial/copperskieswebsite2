import { NextResponse } from "next/server"
import { Resend } from "resend"
import { headers } from "next/headers"
import { z } from "zod"
import { rateLimit } from "@/lib/rate-limit"

// Input validation schema
const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  subject: z.string().min(2).max(200),
  message: z.string().min(10).max(5000),
})

const limiter = rateLimit({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 500,
})

// Log environment state
console.log("Environment check:", {
  hasResendKey: !!process.env.RESEND_API_KEY,
  keyLength: process.env.RESEND_API_KEY?.length,
  nodeEnv: process.env.NODE_ENV
})

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY)
  : null

const sanitizeHtml = (str: string) => {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

export async function POST(req: Request) {
  try {
    // Check if Resend is properly initialized
    if (!resend) {
      console.error("Resend API key is not configured", {
        hasKey: !!process.env.RESEND_API_KEY,
        keyLength: process.env.RESEND_API_KEY?.length,
        nodeEnv: process.env.NODE_ENV
      })
      return NextResponse.json(
        { 
          error: "Email service not configured. Please try again later or contact us directly at copperskiesmusic@gmail.com",
          details: "Missing API configuration"
        },
        { status: 503 }
      )
    }

    // Get IP for rate limiting
    const headersList = await headers()
    const ip = headersList.get("x-forwarded-for") ?? "127.0.0.1"

    // Apply rate limiting
    try {
      await limiter.check(5, ip) // 5 requests per minute per IP
    } catch {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      )
    }

    // Parse and validate input
    const body = await req.json()
    console.log("Received form data:", body)

    const result = contactSchema.safeParse(body)

    if (!result.success) {
      const errorMessages = result.error.errors.map(err => `${err.path}: ${err.message}`).join(", ")
      console.error("Validation error:", errorMessages)
      return NextResponse.json(
        { error: "Invalid input", details: errorMessages },
        { status: 400 }
      )
    }

    const { name, email, subject, message } = result.data

    // Sanitize input for email template
    const sanitizedName = sanitizeHtml(name)
    const sanitizedEmail = sanitizeHtml(email)
    const sanitizedSubject = sanitizeHtml(subject)
    const sanitizedMessage = sanitizeHtml(message)

    console.log("Attempting to send email with Resend...")
    const { error } = await resend.emails.send({
      from: "Copper Skies <onboarding@resend.dev>", // Using Resend's default sender temporarily
      to: ["copperskiesmusic@gmail.com"],
      replyTo: sanitizedEmail,
      subject: `New Contact Form Submission: ${sanitizedSubject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Subject:</strong> ${sanitizedSubject}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${sanitizedMessage.replace(/\n/g, "<br/>")}</p>
      `,
    })

    if (error) {
      console.error("Resend API Error:", {
        message: error.message,
        name: error.name,
        details: error
      })
      
      // Handle domain verification error specifically
      if (error.message?.toLowerCase().includes("domain is not verified")) {
        return NextResponse.json(
          { 
            error: "Email service not fully configured. Please try again later or contact us directly at copperskiesmusic@gmail.com",
            details: "Domain verification pending"
          },
          { status: 503 }
        )
      }

      return NextResponse.json(
        { 
          error: "Failed to send email. Please try again later.",
          details: error.message
        },
        { 
          status: 500,
          headers: {
            "Content-Security-Policy": "default-src 'self'",
            "X-Content-Type-Options": "nosniff",
            "X-Frame-Options": "DENY",
            "Referrer-Policy": "no-referrer"
          }
        }
      )
    }

    console.log("Email sent successfully")
    return NextResponse.json(
      { message: "Email sent successfully" },
      { 
        status: 200,
        headers: {
          "Content-Security-Policy": "default-src 'self'",
          "X-Content-Type-Options": "nosniff",
          "X-Frame-Options": "DENY",
          "Referrer-Policy": "no-referrer"
        }
      }
    )
  } catch (error) {
    console.error("Unexpected error:", error)
    return NextResponse.json(
      { 
        error: "An unexpected error occurred. Please try again later.",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { 
        status: 500,
        headers: {
          "Content-Security-Policy": "default-src 'self'",
          "X-Content-Type-Options": "nosniff",
          "X-Frame-Options": "DENY",
          "Referrer-Policy": "no-referrer"
        }
      }
    )
  }
} 
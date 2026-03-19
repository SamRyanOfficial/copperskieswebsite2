import { NextResponse } from "next/server"
import { createClient, SupabaseClient } from "@supabase/supabase-js"

function getSupabase(): SupabaseClient | null {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (supabaseUrl && (supabaseServiceKey || supabaseAnonKey)) {
    return createClient(supabaseUrl, supabaseServiceKey || supabaseAnonKey!)
  }
  return null
}

export async function POST(req: Request) {
  try {
    const supabase = getSupabase()
    if (!supabase) {
      console.error("Supabase not configured:", {
        hasUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
        hasAnonKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        hasServiceKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
      })
      return NextResponse.json(
        { error: "Contact form is not configured. Please try again later." },
        { status: 503 }
      )
    }

    const body = await req.json()
    const { name, email, event_type, message } = body

    // Validation
    if (!name?.trim()) {
      return NextResponse.json(
        { error: "Name is required", details: "name: Name is required" },
        { status: 400 }
      )
    }
    if (!email?.trim()) {
      return NextResponse.json(
        { error: "Email is required", details: "email: Email is required" },
        { status: 400 }
      )
    }
    if (!event_type?.trim()) {
      return NextResponse.json(
        { error: "Event type is required", details: "subject: Event type is required" },
        { status: 400 }
      )
    }
    if (!message?.trim()) {
      return NextResponse.json(
        { error: "Message is required", details: "message: Message is required" },
        { status: 400 }
      )
    }

    const { error: supabaseError } = await supabase.from("leads").insert({
      name: name.trim(),
      email: email.trim(),
      phone: null,
      event_type: event_type.trim(),
      event_date: null,
      message: message.trim(),
      status: "new",
    })

    if (supabaseError) {
      console.error("Supabase insert error:", supabaseError)
      // Check for RLS error - common when anon key is used without proper policy
      const isRlsError =
        supabaseError.message?.includes("row-level security") ||
        supabaseError.code === "42501"
      return NextResponse.json(
        {
          error: isRlsError
            ? "Database configuration error. Please add an RLS policy to allow inserts on the leads table."
            : supabaseError.message || "Failed to save your message. Please try again.",
        },
        { status: 500 }
      )
    }

    return NextResponse.json({ message: "Success" }, { status: 200 })
  } catch (err) {
    console.error("Leads API error:", err)
    return NextResponse.json(
      {
        error:
          err instanceof Error ? err.message : "An unexpected error occurred. Please try again.",
      },
      { status: 500 }
    )
  }
}

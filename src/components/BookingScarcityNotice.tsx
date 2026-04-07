import { CalendarClock } from "lucide-react"
import { BOOKING_SCARCITY_MESSAGE } from "@/lib/site-messages"

type Variant = "contact" | "trust"

export function BookingScarcityNotice({ variant }: { variant: Variant }) {
  if (variant === "contact") {
    return (
      <div
        className="rounded-xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-orange-600/5 px-4 py-3.5 text-sm leading-relaxed text-gray-100 shadow-sm sm:px-5 sm:text-[0.95rem]"
        role="note"
      >
        <p className="flex w-full items-start justify-center gap-2.5 sm:items-center sm:gap-3">
          <CalendarClock
            className="mt-0.5 h-4 w-4 shrink-0 text-orange-400 sm:mt-0 sm:h-5 sm:w-5"
            aria-hidden
          />
          <span className="block text-center">
            We&apos;re already close to 50% booked for Summer 2027
            <br />
            get in touch early to secure your date.
          </span>
        </p>
      </div>
    )
  }

  return (
    <p className="mx-auto mt-2 flex max-w-2xl items-start justify-center gap-2 border-t border-gray-800/90 pt-3 text-center text-[10px] leading-snug text-gray-300 sm:mt-3 sm:items-center sm:gap-2.5 sm:pt-3.5 sm:text-sm sm:leading-snug">
      <CalendarClock
        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-orange-400/90 sm:mt-0 sm:h-4 sm:w-4"
        aria-hidden
      />
      <span className="whitespace-nowrap">{BOOKING_SCARCITY_MESSAGE}</span>
    </p>
  )
}

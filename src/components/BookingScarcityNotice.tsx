import { CalendarClock } from "lucide-react"
import {
  BOOKING_SCARCITY_EYEBROW,
  BOOKING_SCARCITY_SEG_AFTER_PCT,
  BOOKING_SCARCITY_SEG_CTA,
  BOOKING_SCARCITY_SEG_PCT,
  BOOKING_SCARCITY_SEG_PREFIX,
  BOOKING_SCARCITY_SEG_TAIL,
} from "@/lib/site-messages"

type Variant = "contact" | "trust"

/** Inline emphasis — matches BOOKING_SCARCITY_MESSAGE */
function ScarcityRichText({ className }: { className?: string }) {
  return (
    <span className={className}>
      <span className="text-white">{BOOKING_SCARCITY_SEG_PREFIX}</span>
      <span className="font-extrabold text-orange-400 drop-shadow-[0_0_12px_rgba(251,146,60,0.35)]">
        {BOOKING_SCARCITY_SEG_PCT}
      </span>
      <span className="text-white">{BOOKING_SCARCITY_SEG_AFTER_PCT}</span>
      <span className="font-bold text-orange-200">{BOOKING_SCARCITY_SEG_CTA}</span>
      <span className="font-semibold text-gray-100">{BOOKING_SCARCITY_SEG_TAIL}</span>
    </span>
  )
}

/** Stacked for narrow phones: break after "booked —" */
function ScarcityStackedMobile() {
  return (
    <span className="text-balance md:hidden">
      <span className="block">
        <span className="text-white">{BOOKING_SCARCITY_SEG_PREFIX}</span>
        <span className="font-extrabold text-orange-400 drop-shadow-[0_0_12px_rgba(251,146,60,0.35)]">
          {BOOKING_SCARCITY_SEG_PCT}
        </span>
        <span className="text-white">{BOOKING_SCARCITY_SEG_AFTER_PCT.trimEnd()}</span>
      </span>
      <span className="mt-1 block">
        <span className="font-bold text-orange-200">{BOOKING_SCARCITY_SEG_CTA}</span>
        <span className="font-semibold text-gray-100">{BOOKING_SCARCITY_SEG_TAIL}</span>
      </span>
    </span>
  )
}

export function BookingScarcityNotice({ variant }: { variant: Variant }) {
  if (variant === "contact") {
    return (
      <div
        className="relative flex w-full justify-center overflow-hidden rounded-2xl border-2 border-orange-500/50 bg-gradient-to-br from-orange-500/[0.18] via-orange-950/30 to-gray-950/90 px-4 py-4 text-gray-100 shadow-[0_8px_40px_-12px_rgba(234,88,12,0.55)] ring-1 ring-orange-400/25 sm:px-6 sm:py-5"
        role="note"
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-300/70 to-transparent"
          aria-hidden
        />
        <div className="relative w-full max-w-lg">
          <p className="text-center text-[0.65rem] font-bold uppercase tracking-[0.22em] text-orange-400 sm:text-xs">
            {BOOKING_SCARCITY_EYEBROW}
          </p>
          <p className="mt-2 inline-flex w-full max-w-full flex-col items-center gap-3 text-center text-base font-bold leading-snug text-white sm:flex-row sm:items-center sm:justify-center sm:gap-4 sm:text-lg">
            <CalendarClock
              className="h-5 w-5 shrink-0 text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,0.5)] sm:h-6 sm:w-6"
              aria-hidden
            />
            <span className="max-w-full sm:text-balance">
              <span className="hidden sm:block">
                <ScarcityRichText />
              </span>
              <span className="sm:hidden">
                <ScarcityStackedMobile />
              </span>
            </span>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="mt-3 flex w-full justify-center sm:mt-4">
      <div className="relative w-full max-w-4xl overflow-hidden rounded-xl border border-orange-500/45 bg-gradient-to-b from-orange-500/[0.14] via-gray-900/40 to-gray-950/80 px-3 py-3 shadow-[0_4px_36px_-10px_rgba(234,88,12,0.5)] ring-1 ring-orange-400/20 sm:px-5 sm:py-3.5">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent"
          aria-hidden
        />
        <p className="text-center text-[0.6rem] font-bold uppercase tracking-[0.2em] text-orange-400/95 sm:text-[0.65rem]">
          {BOOKING_SCARCITY_EYEBROW}
        </p>
        <div className="mt-2 flex justify-center">
          <p className="inline-flex w-fit max-w-full flex-col items-center gap-2 text-sm font-bold leading-snug text-white drop-shadow-[0_1px_12px_rgba(0,0,0,0.65)] sm:gap-2.5 sm:text-base md:max-w-none md:flex-row md:items-center md:justify-center md:gap-2.5 md:text-lg">
            <CalendarClock
              className="h-4 w-4 shrink-0 text-orange-400 drop-shadow-[0_0_10px_rgba(251,146,60,0.45)] sm:h-5 sm:w-5"
              aria-hidden
            />
            <span className="text-center md:text-left">
              <span className="hidden md:block">
                <ScarcityRichText />
              </span>
              <span className="md:hidden">
                <ScarcityStackedMobile />
              </span>
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

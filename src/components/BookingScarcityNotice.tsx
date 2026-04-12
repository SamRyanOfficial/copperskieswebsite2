import { CalendarClock } from "lucide-react"
import {
  BOOKING_SCARCITY_AFTER_PCT,
  BOOKING_SCARCITY_BEFORE_PCT,
  BOOKING_SCARCITY_EYEBROW,
  BOOKING_SCARCITY_PART2_LEAD,
  BOOKING_SCARCITY_PART2_TAIL,
  BOOKING_SCARCITY_PCT,
  BOOKING_SCARCITY_SEASON,
} from "@/lib/site-messages"

type Variant = "contact" | "trust"

/** Shared emphasis — orange key facts + crisp CTA phrase */
function ScarcityLine1({ className }: { className?: string }) {
  return (
    <span className={className}>
      {BOOKING_SCARCITY_BEFORE_PCT}
      <span className="font-extrabold text-orange-400 drop-shadow-[0_0_12px_rgba(251,146,60,0.35)]">
        {BOOKING_SCARCITY_PCT}
      </span>
      {BOOKING_SCARCITY_AFTER_PCT}
      <span className="font-extrabold text-orange-300 drop-shadow-[0_0_14px_rgba(253,186,116,0.25)]">
        {BOOKING_SCARCITY_SEASON}
      </span>
    </span>
  )
}

function ScarcityLine2({ className }: { className?: string }) {
  return (
    <span className={className}>
      <span className="font-bold text-orange-200">{BOOKING_SCARCITY_PART2_LEAD}</span>
      <span className="font-semibold text-gray-100">{BOOKING_SCARCITY_PART2_TAIL}</span>
    </span>
  )
}

/** Single line for md+ (nowrap — avoids awkward wrap after “Summer”) */
function ScarcityOneLine({ className }: { className?: string }) {
  return (
    <span className={`whitespace-nowrap ${className ?? ""}`}>
      <ScarcityLine1 />
      <span className="font-bold text-white/90"> — </span>
      <ScarcityLine2 />
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
            <span className="max-w-full text-balance">
              <span className="block">
                <ScarcityLine1 />
              </span>
              <span className="mt-1.5 block">
                <ScarcityLine2 />
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
          {/*
            w-fit: shrink-wrap cluster so flex justify-center truly centers (see comment in git history).
          */}
          <p className="inline-flex w-fit max-w-full flex-col items-center gap-2 text-sm font-bold leading-snug text-white drop-shadow-[0_1px_12px_rgba(0,0,0,0.65)] sm:gap-2.5 sm:text-base md:max-w-none md:flex-row md:items-center md:justify-center md:gap-2.5 md:text-lg">
            <CalendarClock
              className="h-4 w-4 shrink-0 text-orange-400 drop-shadow-[0_0_10px_rgba(251,146,60,0.45)] sm:h-5 sm:w-5"
              aria-hidden
            />
            <span className="text-center md:text-left">
              <span className="md:hidden">
                <span className="block">
                  <ScarcityLine1 />
                </span>
                <br aria-hidden />
                <span className="mt-0.5 block">
                  <ScarcityLine2 />
                </span>
              </span>
              <span className="hidden md:inline">
                <ScarcityOneLine />
              </span>
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

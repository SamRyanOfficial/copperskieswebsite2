import Link from "next/link"
import {
  getReviewAttributionDisplay,
  heroReviewSnippets,
  reviewAnchorHref,
} from "@/data/hero-review-snippets"

const MARQUEE_HEADING_ID = "hero-review-marquee-heading"

function SnippetCard({ quote, reviewId }: { quote: string; reviewId: number }) {
  const attribution = getReviewAttributionDisplay(reviewId)
  const href = reviewAnchorHref(reviewId)

  return (
    <figure
      className="relative z-[1] mx-1.5 w-[min(100%,17.5rem)] shrink-0 rounded-xl border border-white/[0.08] bg-black/35 px-3.5 py-3 text-left shadow-[0_4px_28px_-10px_rgba(0,0,0,0.65)] backdrop-blur-md sm:w-[19rem] sm:px-4 sm:py-3.5"
      lang="en-NZ"
    >
      <blockquote className="text-[0.7rem] font-medium leading-snug tracking-tight text-white/[0.92] sm:text-[0.8rem] sm:leading-snug">
        <span className="text-white/35" aria-hidden>
          {"\u201C"}
        </span>
        {quote}
        <span className="text-white/35" aria-hidden>
          {"\u201D"}
        </span>
      </blockquote>
      <figcaption className="mt-2 border-t border-white/[0.06] pt-2 text-[0.6rem] font-medium sm:text-[0.65rem]">
        <Link
          href={href}
          className="cursor-pointer text-white/45 underline-offset-2 transition-colors hover:text-orange-300 hover:underline focus-visible:rounded-sm focus-visible:text-orange-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          {attribution}
        </Link>
      </figcaption>
    </figure>
  )
}

export function HeroReviewMarquee() {
  const loop = [...heroReviewSnippets, ...heroReviewSnippets]

  return (
    <div className="relative w-full min-w-0">
      <h3
        id={MARQUEE_HEADING_ID}
        className="mb-4 text-center text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-white/45 sm:mb-5 sm:text-[0.68rem] sm:tracking-[0.22em]"
      >
        What couples say
      </h3>
      <p className="sr-only">
        Highlights from real client reviews: repeat bookings, full dance floors, and guests
        raving about the band. Each quote links to the full review below.
      </p>

      {/* Static grid when user prefers reduced motion */}
      <div
        className="mx-auto hidden max-w-4xl flex-wrap justify-center gap-2 motion-reduce:flex motion-reduce:gap-3"
        role="region"
        aria-labelledby={MARQUEE_HEADING_ID}
      >
        {heroReviewSnippets.slice(0, 4).map((s) => (
          <SnippetCard key={s.id} quote={s.quote} reviewId={s.reviewId} />
        ))}
      </div>

      {/* Infinite horizontal scroll — links remain focusable (no aria-hidden on wrapper) */}
      <div className="relative overflow-hidden motion-reduce:hidden">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-black/80 to-transparent sm:w-14"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-black/80 to-transparent sm:w-14"
          aria-hidden
        />
        <div className="flex w-max animate-hero-quote-marquee motion-reduce:animate-none">
          {loop.map((s, i) => (
            <SnippetCard key={`${s.id}-${i}`} quote={s.quote} reviewId={s.reviewId} />
          ))}
        </div>
      </div>
    </div>
  )
}

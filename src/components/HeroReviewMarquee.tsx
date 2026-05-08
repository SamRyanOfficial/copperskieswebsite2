import {
  getReviewAttributionDisplay,
  heroReviewSnippets,
  reviewAnchorHref,
} from "@/data/hero-review-snippets"
import { cn } from "@/lib/utils"

const MARQUEE_HEADING_ID = "hero-review-marquee-heading"

function SnippetCard({
  quote,
  reviewId,
  className,
}: {
  quote: string
  reviewId: number
  className?: string
}) {
  const attribution = getReviewAttributionDisplay(reviewId)
  const href = reviewAnchorHref(reviewId)

  return (
    <a
      href={href}
      className={cn(
        "group relative z-[1] mx-1.5 block w-[min(100%,17.5rem)] shrink-0 rounded-xl border border-white/[0.08] bg-black/35 px-3.5 py-3 text-left shadow-[0_4px_28px_-10px_rgba(0,0,0,0.65)] backdrop-blur-md transition-[border-color,background-color,box-shadow] duration-200 ease-out",
        "hover:border-orange-400/25 hover:bg-black/45 hover:shadow-[0_8px_36px_-12px_rgba(0,0,0,0.55)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
        "sm:w-[19rem] sm:px-4 sm:py-3.5",
        className
      )}
      aria-label={`Read full review from ${attribution}`}
      lang="en-NZ"
    >
      <figure className="m-0">
        <blockquote className="text-[0.7rem] font-medium leading-snug tracking-tight text-white/[0.92] sm:text-[0.8rem] sm:leading-snug">
          <span className="text-white/35" aria-hidden>
            {"\u201C"}
          </span>
          {quote}
          <span className="text-white/35" aria-hidden>
            {"\u201D"}
          </span>
        </blockquote>
        <figcaption className="mt-2 border-t border-white/[0.06] pt-2 text-[0.6rem] font-medium text-white/55 transition-colors group-hover:text-orange-200/90 sm:text-[0.65rem]">
          {attribution}
        </figcaption>
      </figure>
    </a>
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
        Highlights from real client reviews: repeat bookings, full dance floors, and guests raving
        about the band. Each card links to the full review below.
      </p>

      {/* Static grid when user prefers reduced motion */}
      <div
        className="mx-auto hidden max-w-4xl flex-wrap justify-center gap-2 motion-reduce:flex motion-reduce:gap-3"
        role="region"
        aria-labelledby={MARQUEE_HEADING_ID}
      >
        {heroReviewSnippets.map((s) => (
          <SnippetCard key={s.id} quote={s.quote} reviewId={s.reviewId} />
        ))}
      </div>

      {/* Mobile / small tablet: swipeable row — full cards, no clipped marquee */}
      <div
        className="-mx-5 motion-reduce:hidden md:hidden"
        role="region"
        aria-labelledby={MARQUEE_HEADING_ID}
      >
        <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain px-5 pb-2 pt-0.5 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {heroReviewSnippets.map((s) => (
            <SnippetCard
              key={s.id}
              quote={s.quote}
              reviewId={s.reviewId}
              className="snap-start mx-0 w-[min(17.5rem,calc(100vw-5rem))] scroll-ms-5 scroll-me-5 sm:w-[min(19rem,calc(100vw-5rem))]"
            />
          ))}
        </div>
      </div>

      {/* md+: infinite marquee */}
      <div className="relative hidden overflow-hidden motion-reduce:hidden md:block">
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

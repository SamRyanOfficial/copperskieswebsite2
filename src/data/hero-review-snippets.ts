import { reviews } from "@/data/reviews"

/**
 * Short excerpts for the hero marquee — pulled from full reviews in `reviews.ts`
 * (wording lightly trimmed for length while keeping meaning).
 */
export interface HeroReviewSnippet {
  id: string
  /** Review id in reviews.ts — used for attribution + deep link */
  reviewId: number
  quote: string
}

export const heroReviewSnippets: HeroReviewSnippet[] = [
  {
    id: "rebook",
    reviewId: 22,
    quote: "We re-booked them again before they'd even left the venue.",
  },
  {
    id: "dancefloor-night",
    reviewId: 23,
    quote: "Most of our guests didn't leave the dance floor the whole night!",
  },
  {
    id: "friends",
    reviewId: 20,
    quote: "By the end of the night they felt like friends we'd invited to our wedding.",
  },
  {
    id: "guests-rave",
    reviewId: 32,
    quote: "Every guest we've spoken to since has raved about how amazing they were.",
  },
  {
    id: "energy",
    reviewId: 30,
    quote: "Sing-alongs everyone knows, a packed dance floor, and unforgettable energy.",
  },
  {
    id: "best-band",
    reviewId: 11,
    quote: "Hands down, best wedding band ever — the dance floor was non-stop for hours.",
  },
]

/** Deep link to the full review card on the homepage testimonials section */
export function reviewAnchorHref(reviewId: number): string {
  return `#review-${reviewId}`
}

/**
 * Display name for attribution: author when present, otherwise "event · venue".
 */
export function getReviewAttributionDisplay(reviewId: number): string {
  const r = reviews.find((x) => x.id === reviewId)
  if (!r) return "Client review"
  const author = r.author?.trim()
  if (author) return author
  const bits = [r.event?.trim(), r.venue?.trim()].filter(Boolean)
  return bits.length ? bits.join(" · ") : "Client review"
}

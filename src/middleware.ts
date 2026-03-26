import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const APEX_HOST = "copperskies.co.nz"

/**
 * Canonical host: https://www.copperskies.co.nz
 *
 * Vercel always upgrades http://apex → https://apex before this runs, so that
 * pair is still two hops for plain HTTP. To get a single redirect from
 * http://copperskies.co.nz to https://www, configure a one-step rule at your
 * DNS/CDN (e.g. Cloudflare Redirect Rules) pointing straight at https://www.
 */
export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0]?.toLowerCase()
  if (host !== APEX_HOST) {
    return NextResponse.next()
  }

  const url = request.nextUrl.clone()
  url.hostname = "www.copperskies.co.nz"
  url.protocol = "https:"
  return NextResponse.redirect(url, 308)
}


import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PRODUCTION_HOST = "kukunotes.com";

/** Host header without port. IPv6 values stay in brackets' contents. */
function hostnameFromHostHeader(hostHeader: string) {
  const trimmed = hostHeader.trim();
  if (trimmed.startsWith("[")) {
    const end = trimmed.indexOf("]");
    return (end === -1 ? trimmed : trimmed.slice(1, end)).toLowerCase();
  }
  return (trimmed.split(":")[0] ?? "").toLowerCase();
}

/**
 * Preview and other non-production hosts must not be indexed.
 * Only the apex host kukunotes.com is left to the page robots metadata.
 */
export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  const host = hostnameFromHostHeader(request.headers.get("host") ?? "");
  if (host !== PRODUCTION_HOST) {
    response.headers.set("X-Robots-Tag", "noindex");
  }
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};

/**
 * Canonical host, HTTPS and security headers for every response the Worker
 * renders.
 *
 * public/_headers only applies to static files that Cloudflare serves before
 * the Worker runs. Pages and API responses come from the Worker, so they get
 * their headers here. Redirects only happen on the production hostnames, so
 * localhost, wrangler dev and preview URLs keep working.
 */

export const PRODUCTION_HOST = "upperlevelmusic.com";
const PRODUCTION_HOSTS = new Set([PRODUCTION_HOST, `www.${PRODUCTION_HOST}`]);

export function isProduction(url: URL): boolean {
  return PRODUCTION_HOSTS.has(url.hostname);
}

/** http → https and www → apex, as one 301, on production hosts only. */
export function canonicalRedirect(request: Request): Response | null {
  const url = new URL(request.url);
  if (!isProduction(url)) return null;
  if (url.protocol === "https:" && url.hostname === PRODUCTION_HOST) return null;
  url.protocol = "https:";
  url.hostname = PRODUCTION_HOST;
  url.port = "";
  return new Response(null, { status: 301, headers: { location: url.toString() } });
}

const BASE_HEADERS: Record<string, string> = {
  "x-content-type-options": "nosniff",
  "referrer-policy": "strict-origin-when-cross-origin",
  "x-frame-options": "SAMEORIGIN",
  "permissions-policy": "geolocation=(), camera=(), microphone=(), payment=(), interest-cohort=()",
  "cross-origin-opener-policy": "same-origin",
};

/**
 * Copy the response with security headers added. Responses from fetch() and
 * redirects have immutable headers, hence the copy. Previews and local hosts
 * are marked noindex so a preview URL never competes with the real site.
 */
export function withSecurityHeaders(response: Response, request: Request): Response {
  const url = new URL(request.url);
  const out = new Response(response.body, response);
  for (const [name, value] of Object.entries(BASE_HEADERS)) {
    if (!out.headers.has(name)) out.headers.set(name, value);
  }
  if (isProduction(url)) {
    out.headers.set("strict-transport-security", "max-age=31536000; includeSubDomains");
  } else {
    out.headers.set("x-robots-tag", "noindex, nofollow");
  }
  return out;
}

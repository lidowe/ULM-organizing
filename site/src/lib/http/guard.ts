import { bindings } from "./env";

/**
 * Cheap checks in front of the public form endpoints, run before any body
 * is parsed. They stop cross-site posts, non-JSON bodies, oversized bodies
 * and bursts from one address. Each failure is a plain JSON error with a
 * status the browser script treats as "use the email fallback".
 */

const MAX_BODY_BYTES = 32 * 1024;

function reject(status: number, error: string): Response {
  return new Response(JSON.stringify({ ok: false, error }), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });
}

/** Same-origin only. Browsers always send Origin on a POST from fetch(). */
function sameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (origin) {
    try {
      return new URL(origin).host === new URL(request.url).host;
    } catch {
      return false;
    }
  }
  const site = request.headers.get("sec-fetch-site");
  return !site || site === "same-origin" || site === "none";
}

export async function guardFormRequest(request: Request): Promise<Response | null> {
  if (request.method !== "POST") return null;

  if (!sameOrigin(request)) return reject(403, "Cross-site requests are not accepted.");

  const type = request.headers.get("content-type") ?? "";
  if (!type.toLowerCase().startsWith("application/json")) {
    return reject(415, "Send the form as JSON.");
  }

  const length = Number(request.headers.get("content-length") ?? "0");
  if (length > MAX_BODY_BYTES) return reject(413, "That message is too long to send here.");

  const { FORM_LIMITER } = await bindings();
  if (FORM_LIMITER) {
    const ip = request.headers.get("cf-connecting-ip") ?? "unknown";
    const { success } = await FORM_LIMITER.limit({ key: `${ip}:${new URL(request.url).pathname}` });
    if (!success)
      return reject(429, "Too many messages in a short time. Please try again in a minute.");
  }

  return null;
}

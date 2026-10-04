/**
 * Worker bindings and secrets, read the same way everywhere.
 *
 * Nitro's Cloudflare wrapper calls the app with the request only, so the
 * `env` argument that a plain Worker receives never reaches src/server.ts or
 * the API routes. Bindings come from the `cloudflare:workers` module instead.
 * Under `vite dev` (plain Node, no Worker runtime) that import fails and we
 * fall back to process.env, which is also where plain-text secrets show up
 * on Workers with nodejs_compat.
 */

/** Cloudflare's rate limiting binding (wrangler.jsonc `ratelimits`). */
export type RateLimiter = { limit(options: { key: string }): Promise<{ success: boolean }> };

export type Bindings = {
  INQUIRY_WEBHOOK_URL?: string;
  FORWARDER_SECRET?: string;
  RESEND_API_KEY?: string;
  INQUIRY_TO_EMAIL?: string;
  INQUIRY_FROM_EMAIL?: string;
  FORM_LIMITER?: RateLimiter;
};

let cached: Promise<Bindings> | undefined;

export function bindings(): Promise<Bindings> {
  cached ??= import(/* @vite-ignore */ "cloudflare:workers")
    .then((m: { env?: Bindings }) => m.env ?? {})
    .catch(() => ({}));
  return cached;
}

/** A string secret or variable: the Worker binding first, then process.env. */
export async function secret(
  name: Exclude<keyof Bindings, "FORM_LIMITER">,
): Promise<string | undefined> {
  const env = await bindings();
  const value = env[name] ?? (typeof process !== "undefined" ? process.env[name] : undefined);
  return value || undefined;
}

// The Worker runtime module. Nitro keeps it external at build time; under
// `vite dev` the import fails and src/lib/http/env.ts falls back to process.env.
declare module "cloudflare:workers" {
  export const env: Record<string, unknown>;
}

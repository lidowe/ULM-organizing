/**
 * Local photo registry (portable export build).
 *
 * Every graded studio photo lives in `src/assets/<name>.jpg` and is bundled by
 * Vite. This module turns those files into a `name -> url` map so page markup
 * can reference them with `{{IMG:name}}`.
 */
/**
 * The `src` fallback: a single 1280-wide webp per photo. Browsers that read
 * `srcset` (everything current) pick from the candidates below instead; this
 * also keeps the multi-megabyte camera originals out of the deploy entirely.
 */
const files = import.meta.glob<string>("../assets/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
  query: { format: "webp", w: "1280" },
});

/**
 * Responsive candidates, generated at build time by vite-imagetools: webp at
 * up to three widths (sources narrower than a step are never upscaled). The
 * import evaluates to a ready-made `srcset` string.
 */
const srcsets = import.meta.glob<string>("../assets/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
  query: { format: "webp", w: "480;960;1600", as: "srcset" },
});

function baseName(path: string): string {
  return path
    .split("/")
    .pop()!
    .replace(/\.(jpg|jpeg|png|webp)$/, "");
}

export const photos: Record<string, string> = Object.fromEntries(
  Object.entries(files).map(([path, url]) => [baseName(path), url]),
);

const srcsetByName: Record<string, string> = Object.fromEntries(
  Object.entries(srcsets).map(([path, srcset]) => [baseName(path), srcset]),
);

export function photoSrcset(name: string): string | undefined {
  return srcsetByName[name];
}

export function photo(name: string): string {
  return photos[name] ?? "";
}

/**
 * Reverse lookup, url -> registry name. Lets the token renderer stamp
 * `data-photo="<name>"` onto rendered <img> tags, so CSS can target a photo
 * by its stable name instead of a src that changes with Vite's build hashes.
 */
const namesByUrl: Record<string, string> = Object.fromEntries(
  Object.entries(photos).map(([name, url]) => [url, name]),
);

export function photoName(url: string): string | undefined {
  return namesByUrl[url];
}

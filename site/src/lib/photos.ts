/**
 * The photo registry: every decision about a photograph lives here, once.
 *
 * Each graded studio photo in `src/assets/<name>.jpg` is bundled by Vite two
 * ways: the original URL, and a generated srcset of resized variants
 * (vite-imagetools), so phones stop downloading desktop-sized files. Page
 * markup references photos as `{{IMG:name}}`; the token renderer resolves
 * the URL and stamps `data-photo`, `srcset`/`sizes` and the focal point onto
 * the rendered <img> (see render-tokens.ts).
 *
 * FOCAL is the vertical anchor used when a context crops the photo into a
 * frame (object-fit:cover): where the subject sits, as an object-position
 * value. It belongs to the photograph, not to any page, which is why it is
 * data here and not a CSS rule per usage.
 */

/**
 * The `src` fallback: one 1280-wide webp per photo. Browsers that read
 * `srcset` (everything current) pick from the candidates below instead; this
 * also keeps the multi-megabyte camera originals out of the deploy entirely.
 */
const originals = import.meta.glob<string>("../assets/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
  query: { format: "webp", w: "1280" },
});

const srcsets = import.meta.glob<string>("../assets/*.{jpg,jpeg}", {
  eager: true,
  import: "default",
  query: { format: "webp", w: "480;960;1600", as: "srcset" },
});

/** Subject anchor per photo, for cropped (object-fit:cover) contexts. */
const FOCAL: Record<string, string> = {
  "room-kid": "center 34%",
  "room-living": "center 30%",
  "drums-overhead": "center 50%",
  "guitars": "center 58%",
  "guitar-amp": "center 48%",
  "console-working": "center 26%",
  "room-halfbuilt": "center 48%",
  "studio-racks": "center 42%",
  "studio-drums": "center 52%",
  "session-bw": "center 38%",
  "hit-factory": "center 44%",
  "mastering-list": "center 50%",
  "moonlight-bass": "center 40%",
  "console-large": "center 45%",
  "session-redlit": "center 45%",
  "session-redlit-2": "center 45%",
  "archive-console-pair": "center 40%",
  "archive-crew": "center 40%",
  "archive-group": "center 35%",
  "control-room-red": "center 45%",
};

export type Photo = {
  url: string;
  srcset?: string;
  focal?: string;
};

function nameOf(path: string): string {
  return path.split("/").pop()!.replace(/\.(jpg|jpeg|png|webp)$/, "");
}

export const photos: Record<string, Photo> = {};
for (const [path, url] of Object.entries(originals)) {
  const name = nameOf(path);
  photos[name] = { url, srcset: srcsets[path], focal: FOCAL[name] };
}

/** Bundled URL for a photo, "" if the name is unknown. */
export function photo(name: string): string {
  return photos[name]?.url ?? "";
}

/** Registry entry for a photo by its bundled URL (how rendered tags are matched). */
const byUrl = new Map(Object.entries(photos).map(([name, p]) => [p.url, { name, ...p }]));

export function photoByUrl(url: string): ({ name: string } & Photo) | undefined {
  return byUrl.get(url);
}

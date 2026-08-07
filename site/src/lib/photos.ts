/**
 * CDN photo registry.
 *
 * Every graded studio photo lives in `src/assets/<name>.jpg.asset.json` as a
 * Lovable Assets pointer. This module turns those pointers into a
 * `name -> url` map so page markup can reference them with `{{IMG:name}}`.
 */
const pointers = import.meta.glob<{ url: string }>("../assets/*.asset.json", {
  eager: true,
  import: "default",
});

export const photos: Record<string, string> = Object.fromEntries(
  Object.entries(pointers).map(([path, pointer]) => {
    const name = path.split("/").pop()!.replace(/\.(jpg|png|webp|jpeg)\.asset\.json$/, "");
    return [name, pointer.url];
  }),
);

export function photo(name: string): string {
  return photos[name] ?? "";
}

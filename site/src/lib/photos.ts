/**
 * Local photo registry (portable export build).
 *
 * Every graded studio photo lives in `src/assets/<name>.jpg` and is bundled by
 * Vite. This module turns those files into a `name -> url` map so page markup
 * can reference them with `{{IMG:name}}`.
 */
const files = import.meta.glob<string>("../assets/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
  query: "?url",
});

export const photos: Record<string, string> = Object.fromEntries(
  Object.entries(files).map(([path, url]) => {
    const name = path.split("/").pop()!.replace(/\.(jpg|jpeg|png|webp)$/, "");
    return [name, url];
  }),
);

export function photo(name: string): string {
  return photos[name] ?? "";
}

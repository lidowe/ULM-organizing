import { ribbonNames } from "@/lib/credits";

/** The Home ribbon's names, twice over so the scroll loops without a gap. */
export function Ribbon() {
  const names = ribbonNames();
  return (
    <>{[0, 1].map((copy) => names.map((name) => <span key={`${copy}-${name}`}>{name}</span>))}</>
  );
}

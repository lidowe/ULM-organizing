import { artistRoster } from "@/lib/credits";

export function ArtistIndex() {
  return (
    <>
      {artistRoster().map((name) => (
        <span key={name}>{name}</span>
      ))}
    </>
  );
}

import { mediaAndBrands } from "@/lib/credits";

export function MediaIndex() {
  return (
    <>
      {mediaAndBrands().map((name) => (
        <span key={name}>{name}</span>
      ))}
    </>
  );
}

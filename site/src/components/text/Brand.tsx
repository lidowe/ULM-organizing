import type { ReactNode } from "react";

/** "Upper Level Music" (or "Upper Level") always set in the brand red. */
export function Brand({ children = "Upper Level Music" }: { children?: ReactNode }) {
  return <span className="ulm">{children}</span>;
}

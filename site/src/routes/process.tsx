import { createFileRoute, redirect } from "@tanstack/react-router";

/**
 * Process merged into Services. The philosophy, the First/Then planning pair
 * and the three modes now open that page, so the prices sit behind the reason
 * for them rather than beside it. Old links and any search results keep working.
 */
export const Route = createFileRoute("/process")({
  beforeLoad: () => {
    throw redirect({ to: "/", statusCode: 301 });
  },
  component: () => null,
});

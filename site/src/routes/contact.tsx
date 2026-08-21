import { createFileRoute, redirect } from "@tanstack/react-router";

/** Legacy URL from the pre-doors site. */
export const Route = createFileRoute("/contact")({
  beforeLoad: () => {
    throw redirect({ to: "/start", statusCode: 301 });
  },
  component: () => null,
});

import { createFileRoute, redirect } from "@tanstack/react-router";

/** Legacy URL from the pre-doors site. */
export const Route = createFileRoute("/news")({
  beforeLoad: () => {
    throw redirect({ to: "/", statusCode: 301 });
  },
  component: () => null,
});

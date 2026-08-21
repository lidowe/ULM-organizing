import { createFileRoute, redirect } from "@tanstack/react-router";

/** Legacy URL from the pre-doors site. */
export const Route = createFileRoute("/about")({
  beforeLoad: () => {
    throw redirect({ to: "/story", statusCode: 301 });
  },
  component: () => null,
});

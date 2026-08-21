import { createFileRoute, redirect } from "@tanstack/react-router";

/** Legacy URL from the pre-doors site. */
export const Route = createFileRoute("/education")({
  beforeLoad: () => {
    throw redirect({ to: "/learn", statusCode: 301 });
  },
  component: () => null,
});

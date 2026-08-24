import { createFileRoute, redirect } from "@tanstack/react-router";

/** Legacy URL from the pre-doors site. */
export const Route = createFileRoute("/services")({
  beforeLoad: () => {
    throw redirect({ to: "/complete", statusCode: 301 });
  },
  component: () => null,
});

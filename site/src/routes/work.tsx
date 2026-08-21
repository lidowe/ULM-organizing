import { createFileRoute, redirect } from "@tanstack/react-router";

/** Legacy URL from the pre-doors site. */
export const Route = createFileRoute("/work")({
  beforeLoad: () => {
    throw redirect({ to: "/proof", statusCode: 301 });
  },
  component: () => null,
});

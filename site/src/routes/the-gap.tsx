import { createFileRoute, redirect } from "@tanstack/react-router";

/** Trial iteration: About and The Gap are one page now, at /why. */
export const Route = createFileRoute("/the-gap")({
  beforeLoad: () => {
    throw redirect({ to: "/why", statusCode: 301 });
  },
  component: () => null,
});

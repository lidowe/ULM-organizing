import { createFileRoute, redirect } from "@tanstack/react-router";

/** Legacy URL. Credits are now a layer inside /work. */
export const Route = createFileRoute("/credits")({
  beforeLoad: () => {
    throw redirect({ to: "/", statusCode: 301 });
  },
  component: () => null,
});

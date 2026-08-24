import { createFileRoute, redirect } from "@tanstack/react-router";

/** Legacy URL. The page is now /about. */
export const Route = createFileRoute("/who-we-are")({
  beforeLoad: () => {
    throw redirect({ to: "/", statusCode: 301 });
  },
  component: () => null,
});

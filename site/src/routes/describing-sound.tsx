import { createFileRoute, redirect } from "@tanstack/react-router";

/** The borrowed-words material lives behind the translation door now. */
export const Route = createFileRoute("/describing-sound")({
  beforeLoad: () => {
    throw redirect({ to: "/purple", statusCode: 301 });
  },
  component: () => null,
});

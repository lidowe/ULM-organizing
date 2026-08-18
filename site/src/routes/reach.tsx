import { createFileRoute, redirect } from "@tanstack/react-router";

/** Legacy URL. There is one contact destination now: /contact. */
export const Route = createFileRoute("/reach")({
  beforeLoad: () => {
    throw redirect({ to: "/", statusCode: 301 });
  },
  component: () => null,
});

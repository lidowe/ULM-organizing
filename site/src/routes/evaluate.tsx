import { createFileRoute, redirect } from "@tanstack/react-router";

/** Trial iteration: the five-doors door pages fold into one section each. */
export const Route = createFileRoute("/evaluate")({
  beforeLoad: () => {
    throw redirect({ to: "/services", hash: "technical", statusCode: 301 });
  },
  component: () => null,
});

import { createFileRoute, redirect } from "@tanstack/react-router";

/** Trial iteration: the five-doors door pages fold into one section each. */
export const Route = createFileRoute("/fix")({
  beforeLoad: () => {
    throw redirect({ to: "/services", hash: "chase", statusCode: 301 });
  },
  component: () => null,
});

import { createFileRoute, redirect } from "@tanstack/react-router";

/** Trial iteration: the five-doors door pages fold into one section each. */
export const Route = createFileRoute("/purple")({
  beforeLoad: () => {
    throw redirect({ to: "/start", hash: "purple", statusCode: 301 });
  },
  component: () => null,
});

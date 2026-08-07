import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/work")({
  beforeLoad: () => {
    throw redirect({ to: "/credits" });
  },
  head: () => ({
    meta: [
      { title: "Credits \u00b7 Upper Level Music" },
      { name: "description", content: "Selected discography and partial credits for Edward Lidow." },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return null;
}

import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  beforeLoad: () => {
    throw redirect({ to: "/who-we-are" });
  },
  head: () => ({
    meta: [
      { title: "Who We Are \u00b7 Upper Level Music" },
      { name: "description", content: "Upper Level Music was created in 2006 by Edward Lidow." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return null;
}

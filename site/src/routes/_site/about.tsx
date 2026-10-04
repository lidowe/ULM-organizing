import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/pages/About";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/_site/about")({
  head: () => pageHead("about"),
  component: AboutPage,
});

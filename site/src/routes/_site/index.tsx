import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/pages/Home";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/_site/")({
  head: () => pageHead("index"),
  component: HomePage,
});

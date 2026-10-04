import { createFileRoute } from "@tanstack/react-router";
import { StudioPage } from "@/pages/Studio";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/_site/studio")({
  head: () => pageHead("studio"),
  component: StudioPage,
});

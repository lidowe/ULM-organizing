import { createFileRoute } from "@tanstack/react-router";
import { TheGapPage } from "@/pages/TheGap";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/_site/the-gap")({
  head: () => pageHead("the-gap"),
  component: TheGapPage,
});

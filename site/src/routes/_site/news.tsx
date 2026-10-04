import { createFileRoute } from "@tanstack/react-router";
import { NewsPage } from "@/pages/News";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/_site/news")({
  head: () => pageHead("news"),
  component: NewsPage,
});

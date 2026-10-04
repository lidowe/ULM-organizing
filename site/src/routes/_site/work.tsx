import { createFileRoute } from "@tanstack/react-router";
import { WorkPage } from "@/pages/Work";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/_site/work")({
  head: () => pageHead("work"),
  component: WorkPage,
});

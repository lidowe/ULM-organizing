import { createFileRoute } from "@tanstack/react-router";
import { ProcessPage } from "@/pages/Process";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/_site/process")({
  head: () => pageHead("process"),
  component: ProcessPage,
});

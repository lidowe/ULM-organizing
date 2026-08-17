import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBody } from "../components/site/SiteLayout";
import { pages } from "../lib/site-pages";
import { pageHead } from "../lib/seo";

export const Route = createFileRoute("/workbench")({
  head: () => pageHead("workbench"),
  component: WorkbenchPage,
});

function WorkbenchPage() {
  return (
    <SiteLayout>
      <PageBody html={pages["workbench"]} />
    </SiteLayout>
  );
}

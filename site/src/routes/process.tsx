import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBody } from "../components/site/SiteLayout";
import { pages } from "../lib/site-pages";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process \u00b7 How the work moves" },
      { name: "description", content: "How a project moves from first conversation to a finished record at Upper Level Music." },
      { property: "og:title", content: "Process \u00b7 How the work moves" },
      { property: "og:description", content: "How a project moves from first conversation to a finished record at Upper Level Music." },
    ],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <SiteLayout>
      <PageBody html={pages.process} />
    </SiteLayout>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBody } from "../components/site/SiteLayout";
import { pages } from "../lib/site-pages";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Start a project \u00b7 Upper Level Music" },
      { name: "description", content: "Tell me about the record. Rough, reference, or a few sentences is enough to start." },
      { property: "og:title", content: "Start a project \u00b7 Upper Level Music" },
      { property: "og:description", content: "Tell me about the record. Rough, reference, or a few sentences is enough to start." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageBody html={pages.contact} />
    </SiteLayout>
  );
}

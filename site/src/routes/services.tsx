import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBody } from "../components/site/SiteLayout";
import { pages } from "../lib/site-pages";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services \u00b7 Recording, mixing, production, mastering" },
      { name: "description", content: "Recording, production, vocal production, mixing, mastering and consultation." },
      { property: "og:title", content: "Services \u00b7 Recording, mixing, production, mastering" },
      { property: "og:description", content: "Recording, production, vocal production, mixing, mastering and consultation." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <PageBody html={pages.services} />
    </SiteLayout>
  );
}

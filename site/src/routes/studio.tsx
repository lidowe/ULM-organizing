import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBody } from "../components/site/SiteLayout";
import { pages } from "../lib/site-pages";

export const Route = createFileRoute("/studio")({
  head: () => ({
    meta: [
      { title: "Studio \u00b7 The room and the gear" },
      { name: "description", content: "The private studio in Columbia, SC \u2014 room, monitoring, and instruments." },
      { property: "og:title", content: "Studio \u00b7 The room and the gear" },
      { property: "og:description", content: "The private studio in Columbia, SC \u2014 room, monitoring, and instruments." },
    ],
  }),
  component: StudioPage,
});

function StudioPage() {
  return (
    <SiteLayout>
      <PageBody html={pages.studio} />
    </SiteLayout>
  );
}

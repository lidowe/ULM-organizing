import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBody } from "../components/site/SiteLayout";
import { pages } from "../lib/site-pages";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News and Thoughts \u00b7 Upper Level Music" },
      {
        name: "description",
        content:
          "Studio updates, releases, and short essays on making records from Upper Level Music.",
      },
      { property: "og:title", content: "News and Thoughts \u00b7 Upper Level Music" },
      {
        property: "og:description",
        content: "Studio updates, releases, and short essays on making records.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NewsPage,
});

function NewsPage() {
  return (
    <SiteLayout>
      <PageBody html={pages.news} />
    </SiteLayout>
  );
}

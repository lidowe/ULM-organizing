import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBody } from "../components/site/SiteLayout";
import { pages } from "../lib/site-pages";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Home · Upper Level Music · Edward Lidow" },
      {
        name: "description",
        content:
          "Artist-first recording, mixing, production, vocal production and mastering at Upper Level Music in Columbia, South Carolina.",
      },
      { property: "og:title", content: "Home · Upper Level Music" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <PageBody html={pages.index} />
    </SiteLayout>
  );
}

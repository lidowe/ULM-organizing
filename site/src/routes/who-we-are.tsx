import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBody } from "../components/site/SiteLayout";
import { pages } from "../lib/site-pages";

const DESCRIPTION =
  "Upper Level Music was created in 2006 by Edward Lidow — musician, engineer, mixer, producer. The story, and why the studio exists.";

export const Route = createFileRoute("/who-we-are")({
  head: () => ({
    meta: [
      { title: "Who We Are · Upper Level Music" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Who We Are · Upper Level Music" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WhoWeArePage,
});

function WhoWeArePage() {
  return (
    <SiteLayout>
      <PageBody html={pages["who-we-are"]} />
    </SiteLayout>
  );
}

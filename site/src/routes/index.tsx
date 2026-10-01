import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBody } from "../components/site/SiteLayout";
import { BoothBoard } from "../components/site/BoothBoard";
import { pages } from "../lib/site-pages";
import { pageHead } from "../lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead("index"),
  component: Home,
});

const MARKER = "<!--BOOTHS-->";

function Home() {
  const [before, after = ""] = pages.index.split(MARKER);
  return (
    <SiteLayout>
      <PageBody html={before} />
      <BoothBoard />
      {after && <PageBody html={after} />}
    </SiteLayout>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBody } from "../components/site/SiteLayout";
import { pages } from "../lib/site-pages";
import { pageHead } from "../lib/seo";

export const Route = createFileRoute("/describing-sound")({
  head: () => pageHead("describing-sound"),
  component: DescribingSoundPage,
});

function DescribingSoundPage() {
  return (
    <SiteLayout>
      <PageBody html={pages["describing-sound"]} />
    </SiteLayout>
  );
}

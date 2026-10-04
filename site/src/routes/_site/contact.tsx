import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/pages/Contact";
import { pageHead } from "@/lib/seo";
import { BOOTH_IDS, type BoothId } from "@/components/booths/booths";

export const Route = createFileRoute("/_site/contact")({
  validateSearch: (search: Record<string, unknown>): { booth?: BoothId } => {
    const booth = BOOTH_IDS.find((id) => id === search.booth);
    return booth ? { booth } : {};
  },
  head: () => pageHead("contact"),
  component: ContactPage,
});

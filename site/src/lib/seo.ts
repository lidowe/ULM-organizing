import { SITE, absoluteUrl, page, type PageSlug } from "@/site/site";

/** Head metadata for a public page: title, description, canonical and share tags. */
export function pageHead(slug: PageSlug) {
  const p = page(slug);
  const url = absoluteUrl(p.path);
  const image = SITE.url + SITE.ogImage;

  return {
    meta: [
      { title: p.title },
      { name: "description", content: p.description },
      { property: "og:site_name", content: SITE.name },
      { property: "og:title", content: p.title },
      { property: "og:description", content: p.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:image:alt", content: SITE.ogImageAlt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: image },
      { name: "twitter:title", content: p.title },
      { name: "twitter:description", content: p.description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

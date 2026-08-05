import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { PAGE_META, getPageHtml, htmlToText, pageSlugs } from "../content";

export default defineTool({
  name: "get_page",
  title: "Get page content",
  description:
    "Read the readable text of one page of the Upper Level Music site. Use list_pages first to get valid slugs.",
  inputSchema: {
    slug: z
      .string()
      .describe("Page slug, e.g. index, work, process, studio, services, about, contact."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const key = slug.trim().toLowerCase();
    const html = getPageHtml(key);
    if (!html) {
      return {
        content: [
          {
            type: "text" as const,
            text: `Unknown page "${slug}". Available slugs: ${pageSlugs().join(", ")}.`,
          },
        ],
        isError: true,
      };
    }

    const meta = PAGE_META.find((p) => p.slug === key);
    const text = htmlToText(html);

    return {
      content: [
        {
          type: "text" as const,
          text: `# ${meta?.title ?? key}\nPath: ${meta?.path ?? "/"}\n\n${text}`,
        },
      ],
      structuredContent: { slug: key, path: meta?.path, title: meta?.title, text },
    };
  },
});

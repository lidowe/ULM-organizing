import { defineTool } from "@lovable.dev/mcp-js";
import { PAGE_META } from "../content";

export default defineTool({
  name: "list_pages",
  title: "List site pages",
  description:
    "List every page on the Upper Level Music site with its slug, URL path, title and description.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(PAGE_META, null, 2) }],
    structuredContent: { pages: PAGE_META },
  }),
});

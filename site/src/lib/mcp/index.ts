import { defineMcp } from "@lovable.dev/mcp-js";
import listPagesTool from "./tools/list-pages";
import getPageTool from "./tools/get-page";
import listCreditsTool from "./tools/list-credits";
import getContactInfoTool from "./tools/get-contact-info";

export default defineMcp({
  name: "upper-level-music",
  title: "Upper Level Music",
  version: "0.1.0",
  instructions:
    "Public tools for the Upper Level Music site (Edward Lidow, recording studio in Columbia, SC). Use list_pages and get_page to read site copy, list_credits for the selected discography, and get_contact_info for how to reach the studio. All data is read-only and already public on the website.",
  tools: [listPagesTool, getPageTool, listCreditsTool, getContactInfoTool],
});

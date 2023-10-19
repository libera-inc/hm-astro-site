import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import rehypeSlug from "rehype-slug";
import { SITE_URL } from "./src/consts.mjs";
// import rehypeToc from "rehype-toc";

// https://astro.build/config
export default defineConfig({
    site: SITE_URL,
    integrations: [mdx(), sitemap()],
    markdown: {
        rehypePlugins: [
            rehypeSlug,
            // [rehypeToc, { headings: ["h2"] }]
        ],
    },
});

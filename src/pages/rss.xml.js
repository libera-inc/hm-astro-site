import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL } from "@src/consts";

export async function GET() {
    const blog = await getCollection("blog");
    const news = await getCollection("news");

    // blog と news のエントリをマッピング
    const blogItems = blog.map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/blog/${post.slug}/`,
    }));
    const newsItems = news.map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/news/${post.slug}/`,
    }));

    return rss({
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        site: SITE_URL,
        items: [...blogItems, ...newsItems],
        customData: `<language>ja-jp</language>`,
    });
}

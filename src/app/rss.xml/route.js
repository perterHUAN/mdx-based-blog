import RSS from "rss";
import { BLOG_TITLE, BLOG_DESCRIPTION, SITE_URL } from "@/constants";
import { getBlogPostList } from "@/helpers/file-helpers";
export async function GET() {
  const rss = new RSS({
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
  });

  const blogLists = await getBlogPostList();

  blogLists.forEach((blog) => {
    rss.item({
      title: blog.title,
      description: blog.abstract,
      url: `${SITE_URL}/${blog.slug}`,
      date: blog.publishedOn,
    });
  });
  return new Response(rss.xml({ indent: true }), {
    headers: { "Content-Type": "application/xml" },
  });
}

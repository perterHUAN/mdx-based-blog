import React from "react";

import BlogHero from "@/components/BlogHero";

import styles from "./postSlug.module.css";

import { MDXRemote } from "next-mdx-remote/rsc";
import { loadBlogPost } from "@/helpers/file-helpers";
import { BLOG_TITLE } from "@/constants";
import COMPONENT_MAP from "@/helpers/mdx-components";
import { notFound } from "next/navigation";
export async function generateMetadata({ params }) {
  const blogInfo = await loadBlogPost(params.postSlug);
  if (!blogInfo) return null;
  const { frontmatter } = blogInfo;
  return {
    title: frontmatter.title + " • " + BLOG_TITLE,
    description: frontmatter.abstract,
  };
}
async function BlogPost({ params }) {
  const blogInfo = await loadBlogPost(params.postSlug);
  if (!blogInfo) notFound();
  const { frontmatter, content } = blogInfo;
  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote source={content} components={COMPONENT_MAP} />
      </div>
    </article>
  );
}

export default BlogPost;

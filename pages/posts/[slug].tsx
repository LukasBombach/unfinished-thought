import { getPostBySlug, getAllPosts } from "../../lib/api";
import markdownToHtml from "lib/markdownToHtml";

import type { VFC } from "react";

const Post: VFC<{ post: Record<string, string> }> = ({ post }) => {
  return <pre>{JSON.stringify(post, null, 2)}</pre>;
};

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default Post;

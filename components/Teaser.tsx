import type { VFC } from "react";
import type { Post } from "lib/api";

export const Teaser: VFC<{ post: Post }> = ({ post }) => (
  <article>
    <h2 key={post.slug}>
      <a href={`/posts/${post.slug}`}>{post.title}</a>
    </h2>
    <blockquote>{post.excerpt}</blockquote>
  </article>
);

import { style, composeStyles } from "@vanilla-extract/css";
import { styled } from "lib/styled";

import type { VFC } from "react";
import type { Post } from "lib/api";

const Article = styled("article", {
  position: "relative",
});

const Link = styled("a", {
  ":after": {
    position: "absolute",
    inset: 0,
  },
});

export const Teaser: VFC<{ post: Post }> = ({ post }) => (
  <Article>
    <h2 key={post.slug}>
      <Link href={`/posts/${post.slug}`}>{post.title}</Link>
    </h2>
    <blockquote>{post.excerpt}</blockquote>
  </Article>
);

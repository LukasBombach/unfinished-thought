import { styled } from "lib/styled";

import type { VFC } from "react";
import type { Post } from "lib/api";

const Article = styled("article", {
  position: "relative",
});

const Title = styled("h2", {
  lineHeight: "$16",
});

const Link = styled("a", {
  textDecoration: "none",
  "&::before": {
    content: "''",
    position: "absolute",
    //inset: 0,
  },
});

const Excerpt = styled("blockquote", {
  fontFamily: "serif",
});

export const Teaser: VFC<{ post: Post }> = ({ post }) => (
  <Article>
    <Title key={post.slug}>
      <Link href={`/posts/${post.slug}`}>{post.title}</Link>
    </Title>
    <Excerpt>{post.excerpt}</Excerpt>
  </Article>
);

import { styled } from "stitches.config";

import type { VFC } from "react";

export interface Post {
  title: string;
  description: string;
  href: string;
}

const Article = styled("article", {
  position: "relative",
  color: "$darkBlue",
});

const Title = styled("h2", {
  fontSize: "$20",
  lineHeight: "$16",
});

const Link = styled("a", {
  "&::before": {
    content: "''",
    position: "absolute",
    inset: 0,
    zIndex: 1,
  },
});

const Excerpt = styled("blockquote", {
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  overflow: "hidden",
  color: "$faded",
});

export const Teaser: VFC<{ post: Post }> = ({ post }) => (
  <Article>
    <Title>
      <Link href={post.href}>{post.title}</Link>
    </Title>
    <Excerpt>{post.description}</Excerpt>
  </Article>
);

import { styled } from "stitches.config";

import type { VFC } from "react";
import type { Post } from "lib/api";

export type PostPreview = Post<"title" | "slug" | "description">;

const Article = styled("article", {
  position: "relative",
});

const Title = styled("h2", {
  fontSize: "$20",
  lineHeight: "$16",
});

const Link = styled("a", {
  textDecoration: "none",
  "&::before": {
    content: "''",
    position: "absolute",
    inset: 0,
    zIndex: 1,
  },
});

const Excerpt = styled("blockquote", {
  fontFamily: "serif",
  color: "$darkBlue",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  overflow: "hidden",
  opacity: 0.9, // todo make this a color
});

export const Teaser: VFC<{ post: PostPreview }> = ({ post }) => (
  <Article>
    <Title key={post.slug}>
      <Link href={`/${post.slug}`}>{post.title}</Link>
    </Title>
    <Excerpt>{post.description}</Excerpt>
  </Article>
);

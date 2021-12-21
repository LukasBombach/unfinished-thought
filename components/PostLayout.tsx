import { MDXProvider } from "@mdx-js/react";
import { PageTitle } from "components/PageTitle";
import { styled } from "stitches.config";

import type { FC } from "react";

export interface PostMeta {
  title: string;
  description: string;
  date: Date;
  cardImage: `/og/${string}.png`;
}

const Wrapper = styled("div", {
  display: "grid",
  gap: "$32",
  padding: "$48 $40",
  margin: "0 auto",
  maxWidth: 720,
});

const Paragraph = styled("p", {
  lineHeight: "$16",
});

const components = {
  p: Paragraph,
};

export const PostLayout: FC<{ meta: PostMeta }> = ({ meta, children }) => {
  return (
    <Wrapper>
      <PageTitle pageName={meta.title} />
      <h1>{meta.title}</h1>
      <MDXProvider components={components}>{children}</MDXProvider>
    </Wrapper>
  );
};

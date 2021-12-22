import { MDXProvider } from "@mdx-js/react";
import { PageTitle } from "components/PageTitle";
import { styled } from "stitches.config";
import "prism-material-themes/themes/material-default.css";

import type { FC } from "react";

export interface PostMeta {
  title: string;
  description: string;
  date: Date;
  cardImage: `/og/${string}.png`;
}

const Title = styled("h1", {
  fontSize: "2.2rem",
  lineHeight: "1.3",
});

const Headline = styled("h2", {
  fontSize: "1.8rem",
  lineHeight: "1.3",
});

const Paragraph = styled("p", {
  lineHeight: "1.9",
});

const Wrapper = styled("div", {
  padding: "$48 $40",
  margin: "0 auto",
  maxWidth: 720,
  color: "$darkBlue",

  [`& ${Headline}`]: {
    paddingTop: "$40",
  },

  [`& ${Paragraph}`]: {
    paddingTop: "1rem",
  },

  [`& ${Headline} + ${Paragraph}`]: {
    paddingTop: "$8",
  },

  'code[class*="language-"], pre[class*="language-"]': {
    fontSize: "0.9rem",
    margin: 0,
    padding: "1rem 0 0 0",
    background: "transparent",

    "& code": {
      background: "#263238",
      display: "block",
      padding: "2em 0 2em 2em",
      width: "100%",
      overflowX: "auto",
    },
  },
});

const components = {
  p: Paragraph,
  h2: Headline,
};

export const PostLayout: FC<{ meta: PostMeta }> = ({ meta, children }) => {
  return (
    <Wrapper>
      <PageTitle pageName={meta.title} />
      <Title>{meta.title}</Title>
      <MDXProvider components={components}>{children}</MDXProvider>
    </Wrapper>
  );
};

import { MDXProvider } from "@mdx-js/react";
import { PageTitle } from "components/PageTitle";
import { PostCredit } from "components/PostCredit";
import { styled } from "stitches.config";
import "prism-material-themes/themes/material-default.css";

import type { FC } from "react";

export interface PostMeta {
  title: string;
  description: string;
  date: Date;
  cardImage: `/og/${string}.png`;
}

const Layout = styled("main", {
  display: "grid",
  gap: "$24",
  gridTemplateColumns: "100%",
  padding: "$48 $40",
  margin: "0 auto",
  maxWidth: 720,
  color: "$darkBlue",
});

// [1] todo this is not working at all for some reason
const Title = styled("h1", {
  fontSize: "2.2rem",
  lineHeight: "1.3",
  // [1]
  "@desktop": {
    fontSize: "3rem",
  },
});

const Headline = styled("h2", {
  fontSize: "1.8rem",
  lineHeight: "1.3",
});

const Paragraph = styled("p", {
  lineHeight: "1.9",
});

const Link = styled("a", {
  color: "$tangerine",
});

// [1] todo baaad hack
const Text = styled("div", {
  [`& ${Headline}:not(:first-child)`]: {
    paddingTop: "$40",
  },

  [`& ${Paragraph}:not(:first-child)`]: {
    paddingTop: "1rem",
  },

  [`& ${Headline}:not(:first-child) + ${Paragraph}`]: {
    paddingTop: "$8",
  },

  'code[class*="language-"], pre[class*="language-"]': {
    fontSize: "0.9rem",
    marginTop: "1rem", // [1]
  },
});

const components = {
  p: Paragraph,
  h2: Headline,
  a: Link,
};

export const PostLayout: FC<{ meta: PostMeta }> = ({ meta, children }) => {
  return (
    <Layout>
      <PageTitle pageName={meta.title} />
      <Title>{meta.title}</Title>
      <PostCredit date={meta.date} />
      <Text>
        <MDXProvider components={components}>{children}</MDXProvider>
      </Text>
    </Layout>
  );
};

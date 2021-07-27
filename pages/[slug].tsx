import Head from "next/head";
import { getPostBySlug, getAllPosts } from "lib/api";
import markdownToHtml from "lib/markdown";
import { styled } from "lib/styled";

import type { VFC } from "react";
import type { Post } from "lib/api";

const Navigation = styled("nav", {});

const LinkBack = styled("a", {
  color: "$faded",
  fontSize: "$18",
});

const Main = styled("main", {});

const Headline = styled("h1", {
  lineHeight: "1.2em",
  fontSize: "$22",
  paddingBottom: "$32",
});

const Content = styled("section", {
  "& h2": {
    padding: "$16 0",
    fontSize: "$20",
    lineHeight: "$16",
  },
  "& p": {
    fontFamily: "serif",
    paddingBottom: "1em",
  },
  "& a": {
    color: "#ffa083",
    textDecoration: "underline",
  },
  "& pre": {
    color: "#e2e8f0",
    backgroundColor: "#2d3748",
    fontSize: 16,
    borderRadius: 6,
    padding: "$16",
    overflow: "auto",
    width: "calc(100vw - 48px)", // todo this is probably the worst code humanity has ever seen
    maxWidth: 720,
  },
  "& .remark-highlight": {
    paddingBottom: "1em",
  },
});

const BlogEntry: VFC<{ post: Post }> = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title} - Lukas Bombach</title>

        <meta content={post.description} name="description" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:title" content={post.title} />
        <meta property="og:image" content={post.cardImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@luke_schmuke" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={post.cardImage} />

        <link
          rel="preload"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css"
          as="script"
        />
        <link
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css"
          rel="stylesheet"
        />
      </Head>

      <Navigation>
        <LinkBack href="/">&larr; Back to posts overview</LinkBack>
      </Navigation>

      <Main>
        <Headline>{post.title}</Headline>
        <Content dangerouslySetInnerHTML={{ __html: post.content }} />
      </Main>

      <Navigation>
        <LinkBack href="/">&larr; Back to posts overview</LinkBack>
      </Navigation>
    </>
  );
};

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "content",
    "cardImage",
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

export default BlogEntry;

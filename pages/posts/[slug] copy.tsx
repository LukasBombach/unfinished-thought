import { MDXProvider } from "@mdx-js/react";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { CodeBlock } from "components/CodeBlock";
import { getPostBySlug, getAllPosts } from "lib/api";
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
});

const components = {
  pre: props => {
    console.log("pre", props);
    return <CodeBlock {...props} />;
  },
  code: props => {
    console.log("code", props);
    return <CodeBlock {...props} />;
  },
};

const BlogEntry: VFC<{ post: Post }> = ({ post }) => {
  return (
    <MDXProvider components={components}>
      <Navigation>
        <LinkBack href="/">&larr; Back to posts overview</LinkBack>
      </Navigation>

      <Main>
        <Headline>{post.title}</Headline>
        <MDXRemote {...(post.content as any)} components={components} />
      </Main>
    </MDXProvider>
  );
};

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, ["title", "date", "content"]);
  const content = await serialize(post.content);

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

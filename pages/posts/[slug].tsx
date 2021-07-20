import { styled } from "lib/styled";
import { getPostBySlug, getAllPosts } from "lib/api";
import markdownToHtml from "lib/markdownToHtml";

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

const BlogEntry: VFC<{ post: Post }> = ({ post }) => {
  return (
    <>
      <Navigation>
        <LinkBack href="/">&larr; Back to posts overview</LinkBack>
      </Navigation>

      <Main>
        <Headline>{post.title}</Headline>
        <Content dangerouslySetInnerHTML={{ __html: post.content }} />
      </Main>
    </>
  );
};

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, ["title", "date", "content"]);
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

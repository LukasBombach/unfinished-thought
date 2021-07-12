import { getAllPosts } from "../lib/api";
import { Teaser } from "components/Teaser";
import { styled } from "lib/styled";

import "lib/styled/global.css";

import type { VFC } from "react";
import type { Post } from "lib/api";

export const App = styled("main", {
  fontFamily: "sans",
  color: "dark-blue",
});

const Home: VFC<{ allPosts: Post[] }> = ({ allPosts }) => {
  return (
    <App>
      {allPosts.map(post => (
        <Teaser key={post.slug} post={post} />
      ))}
    </App>
  );
};

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}

export default Home;

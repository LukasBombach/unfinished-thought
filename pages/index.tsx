import { Header } from "components/Header";
import { TeaserList } from "components/TeaserList";
import { getAllPosts } from "lib/api";

import type { VFC } from "react";
import type { Post } from "lib/api";

const Home: VFC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <>
      <Header />
      <TeaserList posts={posts} />
    </>
  );
};

export async function getStaticProps() {
  const posts = getAllPosts(["title", "slug", "excerpt"]);

  return {
    props: { posts },
  };
}

export default Home;

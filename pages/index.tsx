import { Header } from "components/Header";
import { SocialLinks } from "components/SocialLinks";
import { TeaserList } from "components/TeaserList";
import { getAllPosts } from "lib/api";

import type { VFC } from "react";
import type { PostPreview } from "components/Teaser";

const Home: VFC<{ posts: PostPreview[] }> = ({ posts }) => {
  return (
    <>
      <Header />
      <SocialLinks />
      <TeaserList posts={posts} />
    </>
  );
};

export async function getStaticProps() {
  const posts = getAllPosts(["title", "slug", "description"]);

  return {
    props: { posts },
  };
}

export default Home;

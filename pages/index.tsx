import Head from "next/head";
import { Header } from "components/Header";
import { SocialLinks } from "components/SocialLinks";
import { TeaserList } from "components/TeaserList";
import { JustOnePost } from "components/JustOnePost";
import { getAllPosts } from "lib/api";

import type { VFC } from "react";
import type { PostPreview } from "components/Teaser";

const Home: VFC<{ posts: PostPreview[] }> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Unfinished thought - A blog by Lukas Bombach</title>
      </Head>
      <Header />
      <SocialLinks />
      <TeaserList posts={posts} />
      <JustOnePost />
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

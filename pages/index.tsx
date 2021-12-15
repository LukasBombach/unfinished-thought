import { Layout } from "components/Layout";
import { Header } from "components/Header";
import { TeaserList } from "components/TeaserList";
import { JustOnePost } from "components/JustOnePost";

import type { NextPage } from "next";
import type { PostPreview } from "components/Teaser";

const Home: NextPage<{ posts: PostPreview[] }> = ({ posts = [] }) => {
  return (
    <Layout>
      <Header />
      <TeaserList posts={posts} />
      <JustOnePost />
    </Layout>
  );
};

export default Home;

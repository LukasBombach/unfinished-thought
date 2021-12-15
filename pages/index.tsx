import { Layout } from "components/Layout";
import { Header } from "components/Header";
import { Posts } from "components/Posts";
import { JustOnePost } from "components/JustOnePost";

import type { NextPage } from "next";
import type { PostPreview } from "components/Teaser";

const Home: NextPage<{ posts: PostPreview[] }> = ({ posts = [] }) => {
  return (
    <Layout>
      <Header />
      <Posts posts={posts} />
      <JustOnePost />
    </Layout>
  );
};

export default Home;

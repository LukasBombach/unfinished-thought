import { Layout } from "components/Layout";
import { Header } from "components/Header";

import { JustOnePost } from "components/JustOnePost";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Layout>
      <Header />
      <JustOnePost />
    </Layout>
  );
};

export default Home;

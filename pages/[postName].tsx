import { useRouter } from "next/router";
import { PageTitle } from "components/PageTitle";
import { Layout } from "components/Layout";
import { Header } from "components/Header";

import type { NextPage } from "next";

const Post: NextPage = () => {
  const q = useRouter().query;
  const postName = Array.isArray(q.postName) ? q.postName[0] : q.postName;

  return (
    <Layout>
      <PageTitle pageName={postName} />
      <Header />
      <p>Post: {postName}</p>
    </Layout>
  );
};

export default Post;

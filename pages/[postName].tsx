import { useRouter } from "next/router";
import { PageTitle } from "components/PageTitle";
import { Layout } from "components/Layout";
import { Header } from "components/Header";

import type { NextPage } from "next";

const Post: NextPage = () => {
  const router = useRouter();
  const { postName } = router.query;

  return (
    <Layout>
      <PageTitle title={postName as string} />
      <Header />
      <p>Post: {postName}</p>
    </Layout>
  );
};

export default Post;

import { useRouter } from "next/router";
import { PageTitle } from "components/PageTitle";
import { Layout } from "components/Layout";
import { Header } from "components/Header";

import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";

const Post: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = () => {
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

export const getStaticProps: GetStaticProps = async context => {
  return {
    props: {}, // will be passed to the page component as props
  };
};

export default Post;

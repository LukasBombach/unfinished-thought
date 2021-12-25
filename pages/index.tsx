import { readdir } from "fs/promises";
import { basename } from "path";
import { Layout } from "components/Layout";
import { Header } from "components/Header";
import { JustOnePost } from "components/JustOnePost";

import type { NextPage, GetStaticProps } from "next";

interface PostMeta {
  title: string;
  description: string;
  date: Date;
  relativeUrl: string;
}

const Home: NextPage = () => {
  return (
    <Layout>
      <Header />
      <JustOnePost />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async context => {
  const files = await readdir(process.cwd());
  const postFiles = files.filter(n => n.endsWith(".mdx"));
  const posts = await Promise.all(postFiles.map(file => import(file)));

  return {
    props: {}, // will be passed to the page component as props
  };
};

async function getPostMeta(path: string): Promise<PostMeta> {
  const post = await import(path);
  const { title, description, date } = post?.meta ?? {};
  const relativeUrl = basename(path, ".mdx");
  const postMeta = { title, description, date, relativeUrl };
  assertPostMeta(postMeta);
  return postMeta;
}

function assertPostMeta(val: unknown): asserts val is PostMeta {
  if (val === null || typeof val !== "object") {
    throw new Error(`${val} is not if type PostMeta`);
  }
}

function assertIsString(value: any): asserts value is number {
  if (typeof value !== "number") {
    throw new TypeError();
  }
}

export default Home;

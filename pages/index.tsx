import { readdir } from "fs/promises";
import { basename, join } from "path";
import { Layout } from "components/Layout";
import { Header } from "components/Header";
import { JustOnePost } from "components/JustOnePost";

import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";

interface PostMeta {
  title: string;
  description: string;
  date: Date;
  relativeUrl: string;
}

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ posts }) => {
  return (
    <Layout>
      <Header />
      <pre>{JSON.stringify(posts, null, 2)}</pre>
      <JustOnePost />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<{ posts: PostMeta[] }> = async context => {
  const files = await readdir(join(process.cwd(), "pages"));
  const mdxFiles = files.map(fileName => join(process.cwd(), "pages", fileName)).filter(n => n.endsWith(".mdx"));
  const posts = await Promise.all(mdxFiles.map(p => getPostMeta(p)));
  return { props: { posts } };
};

// todo assertions on the PostMeta types
async function getPostMeta(path: string): Promise<PostMeta> {
  const post = await import(path);
  const relativeUrl = basename(path, ".mdx");
  const { title, description, date } = post?.meta ?? {};
  const postMeta = { title, description, date, relativeUrl };
  return postMeta;
}

export default Home;

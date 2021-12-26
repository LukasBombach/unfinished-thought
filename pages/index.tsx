import { readdir } from "fs/promises";
import { basename, join, relative } from "path";
import { Layout } from "components/Layout";
import { Header } from "components/Header";
import { JustOnePost } from "components/JustOnePost";

import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";

interface PostMeta {
  title: string;
  description: string;
  date: Date;
  url: string;
}

type PostMetaWithoutDate = Omit<PostMeta, "date">;

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ posts }) => {
  return (
    <Layout>
      <Header />
      {posts.map(post => (
        <a key={post.url} href={post.url}>
          <pre>{JSON.stringify(post, null, 2)}</pre>
        </a>
      ))}

      <JustOnePost />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<{ posts: PostMetaWithoutDate[] }> = async context => {
  const files = await readdir(pages());
  const paths = files.map(f => pages(f));
  const mdxFiles = paths.filter(p => p.endsWith(".mdx"));
  const postsAsPromised = mdxFiles.map(p => getPostMeta(p));
  const unsortedPosts = await Promise.all(postsAsPromised);
  const sortedPosts = [...unsortedPosts].sort((a, b) => (a.date > b.date ? -1 : 1));
  const posts = sortedPosts.map(({ date, ...post }) => post);
  return { props: { posts } };
};

// todo assertions on the PostMeta types
async function getPostMeta(path: string): Promise<PostMeta> {
  const post = await import("./" + relative(pages(), path));
  const url = "/" + basename(path, ".mdx");
  const { title, description, date } = post?.meta ?? {};
  const postMeta = { title, description, date, url };
  return postMeta;
}

function pages(path = ""): string {
  return join(process.cwd(), "pages", path);
}

export default Home;

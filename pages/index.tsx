import { getAllPosts } from "lib/api";
import { Layout } from "components/Layout";
import { Header } from "components/Header";
import { Teaser } from "components/Teaser";

import type { VFC } from "react";
import type { Post } from "lib/api";

const Home: VFC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <Layout>
      <Header />
      {posts.map(post => (
        <Teaser key={post.slug} post={post} />
      ))}
    </Layout>
  );
};

export async function getStaticProps() {
  const posts = getAllPosts(["title", "slug", "excerpt"]);

  return {
    props: { posts },
  };
}

export default Home;

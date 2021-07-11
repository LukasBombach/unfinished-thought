import { getAllPosts } from "../lib/api";
import { Teaser } from "components/Teaser";

import { app } from "styles/styles.css";
import "styles/global.css";

import type { VFC } from "react";
import type { Post } from "lib/api";

const Home: VFC<{ allPosts: Post[] }> = ({ allPosts }) => {
  return (
    <div className={app}>
      {allPosts.map(post => (
        <Teaser key={post.slug} post={post} />
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}

export default Home;

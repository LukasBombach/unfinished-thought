import { Teaser } from "components/Teaser";
import { styled } from "lib/styled";

import type { VFC } from "react";
import type { Post } from "lib/api";

export const Main = styled("main", {
  display: "grid",
  gap: "$32",
});

export const TeaserList: VFC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <Main>
      {posts.map(post => (
        <Teaser key={post.slug} post={post} />
      ))}
    </Main>
  );
};

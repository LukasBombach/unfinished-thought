import { Teaser } from "components/Teaser";
import { styled } from "stitches.config";

import type { VFC } from "react";
import type { PostPreview } from "components/Teaser";

export const Main = styled("main", {
  display: "grid",
  gap: "$32",
});

export const TeaserList: VFC<{ posts: PostPreview[] }> = ({ posts }) => {
  return (
    <Main>
      {posts.map(post => (
        <Teaser key={post.slug} post={post} />
      ))}
    </Main>
  );
};

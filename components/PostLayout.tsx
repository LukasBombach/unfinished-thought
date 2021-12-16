import { PageTitle } from "components/PageTitle";
import { styled } from "stitches.config";

import type { FC } from "react";

export interface PostMeta {
  title: string;
  description: string;
  date: Date;
  cardImage: `/og/${string}.png`;
}

export const Wrapper = styled("div", {
  display: "grid",
  gap: "$32",
  padding: "$48 $16",
  margin: "0 auto",
  maxWidth: 720,
});

export const PostLayout: FC<{ meta: PostMeta }> = ({ meta, children }) => {
  return (
    <Wrapper>
      <PageTitle pageName={meta.title} />
      {children}
    </Wrapper>
  );
};

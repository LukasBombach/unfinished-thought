import { styled } from "lib/styled";

import type { VFC } from "react";

const Aside = styled("aside", {
  fontSize: "$s",
});

const List = styled("ul", {
  display: "grid",
  gridAutoFlow: "column",
  justifyContent: "start",
  gap: "$16",
});

const Item = styled("li", {});

const Twitter = styled("a", {
  color: "#55ACEE",
});

const GitHub = styled("a", {
  color: "#333333",
});

const LinkedIn = styled("a", {
  color: "#1884BB",
});

export const SocialLinks: VFC<{ className?: string }> = ({ className }) => (
  <Aside>
    <List className={className}>
      <Item>
        <Twitter href="https://twitter.com/luke_schmuke">Twitter</Twitter>
      </Item>
      <Item>
        <GitHub href="https://github.com/LukasBombach/">GitHub</GitHub>
      </Item>
      <Item>
        <LinkedIn href="https://www.linkedin.com/in/lukas-bombach-010b8196/">
          LinkedIn
        </LinkedIn>
      </Item>
    </List>
  </Aside>
);

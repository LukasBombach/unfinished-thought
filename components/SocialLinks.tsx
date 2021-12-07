import { styled } from "stitches.config";

import type { VFC } from "react";

const Aside = styled("aside", {
  fontSize: "$18",
});

const List = styled("ul", {
  display: "grid",
  gridAutoFlow: "column",
  justifyContent: "start",
  gap: "$12",
  color: "$faded",
});

const Item = styled("li", {});

const Link = styled("a", {
  "&:hover": {
    color: "$darkBlue",
  },
});

export const SocialLinks: VFC = () => (
  <Aside>
    <List>
      <Item>Find me on</Item>
      <Item>
        <Link href="https://twitter.com/luke_schmuke">Twitter</Link>
      </Item>
      <Item>
        <Link href="https://github.com/LukasBombach/">GitHub</Link>
      </Item>
      <Item>
        <Link href="https://www.linkedin.com/in/lukas-bombach-010b8196/">
          LinkedIn
        </Link>
      </Item>
    </List>
  </Aside>
);

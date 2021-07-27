import { styled } from "lib/styled";

const Em = styled("em", {
  color: "$faded",
  fontSize: "$18",
});

import type { VFC } from "react";

export const JustOnePost: VFC = () => <Em>That's it, just one post so far</Em>;

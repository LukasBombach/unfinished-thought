import { styled } from "stitches.config";

const Text = styled("p", {
  color: "$faded",
  opacity: 0.3,
  fontSize: 12,
});

import type { VFC } from "react";

export const JustOnePost: VFC = () => (
  <footer>
    <Text>That\'s it, just one post so far</Text>
  </footer>
);

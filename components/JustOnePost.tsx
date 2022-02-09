import { styled } from "stitches.config";

const Text = styled("p", {
  color: "$faded",
  fontSize: "$12",
});

import type { VFC } from "react";

export const JustOnePost: VFC = () => (
  <footer>
    <Text>(That&apos;s it, just one post so far)</Text>
  </footer>
);

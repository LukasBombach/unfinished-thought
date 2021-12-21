import { globalCss } from "stitches.config";

import type { VFC } from "react";

const applyDefaultCss = globalCss({
  "html, body, h1, h2, p, blockquote, ul, li, div, pre": {
    margin: 0,
    padding: 0,
    lineHeight: "1",
    boxSizing: "border-box",
    fontFamily: "$sans",
  },
  a: { color: "inherit", textDecoration: "none" },
  ul: { listStyle: "none" },
  pre: { width: "100%", overflowX: "auto" },
});

export const DefaultCss: VFC = () => {
  applyDefaultCss();
  return null;
};

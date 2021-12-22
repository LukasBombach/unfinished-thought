import { globalCss } from "stitches.config";

import type { VFC } from "react";

// [1] todo bg is not height 100% in all cases
// [1] todo not a token yet and I don't like the color
const applyDefaultCss = globalCss({
  "html, body, h1, h2, p, blockquote, ul, li, div, pre": {
    margin: 0,
    padding: 0,
    lineHeight: "1",
    boxSizing: "border-box",
    fontFamily: "$sans",
  },
  body: {
    background: "#fbf7f010", // [1]
  },
  a: { color: "inherit", textDecoration: "none" },
  ul: { listStyle: "none" },
  pre: { width: "100%" },
});

export const DefaultCss: VFC = () => {
  applyDefaultCss();
  return null;
};

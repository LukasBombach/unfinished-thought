import { createStitches } from "@stitches/react";

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    colors: {
      white: "#fff",
      darkBlue: "#3a4655",
      faded: "#66788f",
    },
    fonts: {
      serif: "Georgia, serif",
      sans: "Helvetica, sans-serif",
    },
    space: {
      12: "12px",
      16: "16px",
      24: "24px",
      32: "32px",
      48: "48px",
    },
    fontSizes: {
      18: "18px",
      20: "20px",
      22: "22px",
    },
    lineHeights: {
      "16": "1.6",
    },
  },
});

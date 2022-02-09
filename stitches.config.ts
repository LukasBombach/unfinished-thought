import { createStitches } from "@stitches/react";

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    colors: {
      white: "#fff",
      tangerine: "#ffa083",
      darkBlue: "#3a4655",
      faded: "#66788f",
    },
    fonts: {
      serif: "Georgia, serif",
      sans: "Helvetica, sans-serif",
    },
    space: {
      8: "8px",
      12: "12px",
      16: "16px",
      24: "24px",
      32: "32px",
      40: "40px",
      48: "48px",
    },
    fontSizes: {
      12: "12px",
      18: "18px",
      20: "20px",
      22: "22px",
    },
    lineHeights: {
      "16": "1.6",
    },
    media: {
      desktop: "(min-width: 1024px)",
    },
  },
});

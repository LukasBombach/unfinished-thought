import { createCss } from "@stitches/react";

export const { styled, css, global, keyframes, getCssString, theme } =
  createCss({
    theme: {
      colors: {
        white: "#fff",
        darkBlue: "#3a4655",
        faded: "#66788f",
      },
      space: {
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
        "16": "1.6em",
      },
    },
    media: {
      mobile: "",
      tablet: "screen and (min-width: 768px)",
      dark: "(prefers-color-scheme: dark)",
    },
  });

export const darkTheme = theme({
  colors: {
    white: "#1f2d3d",
    darkBlue: "#fff",
  },
});

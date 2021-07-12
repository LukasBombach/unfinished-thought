import { createCss } from "@stitches/react";

export const { styled, css, global, keyframes, getCssString, theme } =
  createCss({
    theme: {
      colors: {
        darkBlue: "#3A4655",
      },
      fonts: {
        sans: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif`,
      },
    },
    media: {
      mobile: "",
      tablet: "screen and (min-width: 768px)",
    },
  });

import { globalCss } from "stitches.config";

const resetCss = globalCss({
  "html, body, h1, h2, p, blockquote, ul, li, div, pre": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  // This is terrible, don't do this! haha!
  "#__next": {
    fontFamily: "sans-serif",
    color: "$darkBlue",
    fontSize: "$20",
    lineHeight: "$16",
    display: "grid",
    gap: "$32",
    padding: "$48 $16",
    margin: "0 auto",
    maxWidth: 720,
  },
  a: { color: "inherit", textDecoration: "none" },
  ul: { listStyle: "none" },
});

export default function App({ Component, pageProps }) {
  resetCss();
  return <Component {...pageProps} />;
}

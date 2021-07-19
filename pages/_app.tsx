import { global } from "lib/styled";

const resetCss = global({
  "html, body, h1, h2, p, blockquote": { margin: 0, padding: 0 },
  body: {
    fontFamily: "sans-serif",
    color: "$darkBlue",
    fontSize: "$20",
    lineHeight: "$16",
  },
  a: { color: "inherit" },
});

export default function App({ Component, pageProps }) {
  resetCss();
  return <Component {...pageProps} />;
}

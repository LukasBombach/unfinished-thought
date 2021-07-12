import { global } from "lib/styled";

const resetCss = global({
  "html, body, blockquote": { margin: 0 },
  a: { color: "inherit" },
});

export default function App({ Component, pageProps }) {
  resetCss();
  return <Component {...pageProps} />;
}

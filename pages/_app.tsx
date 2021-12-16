import { DefaultCss } from "components/DefaultCss";
import { PageTitle } from "components/PageTitle";

import type { VFC } from "react";
import type { AppProps } from "next/app";

const App: VFC<AppProps> = ({ Component, pageProps }) => (
  <>
    <PageTitle />
    <DefaultCss />
    <Component {...pageProps} />
  </>
);

export default App;

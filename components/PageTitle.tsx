import Head from "next/head";

import type { VFC } from "react";

export const PageTitle: VFC<{ title: string }> = ({ title }) => (
  <Head>
    <title>{title}</title>
  </Head>
);

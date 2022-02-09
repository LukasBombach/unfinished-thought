import Head from "next/head";

import type { VFC } from "react";

export const PageTitle: VFC<{ pageName?: string }> = ({ pageName }) => {
  const sitename = "Unfinished thought - A blog by Lukas Bombach";
  const title = pageName ? `${pageName} - ${sitename}` : sitename;

  return (
    <Head>
      <title>{title} </title>
    </Head>
  );
};

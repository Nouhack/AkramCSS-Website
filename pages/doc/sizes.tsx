import React from "react";
import Head from "next/head";
import SizesPage from "../../pages-data/sizes";
type Props = {};

export default function Sizes({}: Props) {
  return (
    <div className="w-100-100 page px-1 md:px-5 overflowY-auto">
      <Head>
        <title>Sizes - AkramCSS</title>
        <meta
          name="description"
          content="Sizes page presents all the sizes utility classes of AkramCSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pb-3">
        <p className="text-4xl font-bold ls-tighter">Sizes</p>
        <SizesPage />
      </div>
    </div>
  );
}

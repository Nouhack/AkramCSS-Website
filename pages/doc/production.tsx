import React from "react";
import Head from "next/head";
import ProductionPage from "../../pages-data/production";
type Props = {};

export default function production({}: Props) {
  return (
    <div className="w-100-100 page px-1 md:px-5 overflowY-auto ">
      <Head>
        <title>Production - AkramCSS</title>
        <meta
          name="description"
          content="whether you're building your web app with vanilla js or using any js framework the way of setting your environnement for generation the production build version is the same , all you have to modify is the entry points . "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pb-4">
        <p className="text-4xl font-bold ls-tighter">
          Production environnement
        </p>
        <ProductionPage />
      </div>
    </div>
  );
}

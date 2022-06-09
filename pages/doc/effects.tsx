import React from "react";
import Head from "next/head";
import ReferencesSideBar from "../../Components/ReferencesSideBar";
import EffectsPage from "../../pages-data/effects";
type Props = {};

export default function Effects({}: Props) {
  const test = [
    { name: "Shadow box", url: "#shadow" },
    { name: "Opacity", url: "#opacity" },
    { name: "Mix blend mode", url: "#mixblend" },
    { name: "Background blend mode", url: "#backgroundblendmode" },
  ];
  return (
    <div className="w-100-100 page px-1 md:px-0 overflowY-auto scroll-smooth ">
      <Head>
        <title>Effects - AkramCSS</title>
        <meta
          name="description"
          content="Effects page presents all the effect utility classes of AkramCSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="container" className="display-flex flex-row w-100-100">
        <div className="md:px-2 max-w-100-100 pb-4 ">
          <p id="nouhack" className="text-4xl font-bold ls-tighter">
            Effects
          </p>
          <EffectsPage />
        </div>
        <ReferencesSideBar items={test} />
      </div>
    </div>
  );
}

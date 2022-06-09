import React from "react";
import Head from "next/head";
import ReferencesSideBar from "../../Components/ReferencesSideBar";
import TransitionsPage from "../../pages-data/transitions";

type Props = {};

export default function Transitions({}: Props) {
  const test = [
    { name: "Transition property", url: "#transition" },
    { name: "Transition duration", url: "#duration" },
    { name: "Transition function", url: "#function" },
    { name: "Transition delay", url: "#delay" },
  ];
  return (
    <div className="w-100-100 page px-1 md:px-0 overflowY-auto scroll-smooth ">
      <Head>
        <title>Transitions - AkramCSS</title>
        <meta
          name="description"
          content="Transitions page presents all the transition utility classes of AkramCSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="container" className="display-flex flex-row w-100-100">
        <div className="md:px-2 max-w-100-100 pb-4 ">
          <p id="nouhack" className="text-4xl font-bold ls-tighter">
            Transitions
          </p>
          <TransitionsPage />
        </div>
        <ReferencesSideBar items={test} />
      </div>
    </div>
  );
}

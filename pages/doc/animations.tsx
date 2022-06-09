import React from "react";
import Head from "next/head";
import ReferencesSideBar from "../../Components/ReferencesSideBar";
import AnimationsPage from "../../pages-data/animations";

type Props = {};

export default function Animations({}: Props) {
  const test = [{ name: "bounce / flash", url: "#animations" }];
  return (
    <div className="w-100-100 page px-1 md:px-0 overflowY-auto scroll-smooth ">
      <Head>
        <title>Animations - AkramCSS</title>
        <meta
          name="description"
          content="Animations page presents all the animation utility classes of AkramCSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="container" className="display-flex flex-row w-100-100">
        <div className="md:px-2 max-w-100-100 pb-4 ">
          <p id="nouhack" className="text-4xl font-bold ls-tighter">
            Animations
          </p>
          <AnimationsPage />
        </div>
        <ReferencesSideBar items={test} />
      </div>
    </div>
  );
}

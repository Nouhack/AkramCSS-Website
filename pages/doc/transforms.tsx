import React from "react";
import Head from "next/head";
import ReferencesSideBar from "../../Components/ReferencesSideBar";
import TransformsPge from "../../pages-data/transforms";
type Props = {};

export default function Transforms({}: Props) {
  const test = [
    { name: "Scale", url: "#scale" },
    { name: "Horizontal scale", url: "#scalex" },
    { name: "Vertical scale", url: "#scaley" },
    { name: "Rotate", url: "#rotate" },
    { name: "Horizontal rems transform", url: "#translatex" },
    { name: "Vertical rems transform", url: "#translatey" },
    { name: "Horizontal percentage transform", url: "#percentagetranslatex" },
    { name: "Vertical percentage transform", url: "#percentagetranslatey" },
    { name: "Horizontal skew", url: "#horizontalskew" },
    { name: "Vertical skew", url: "#verticalskew" },
  ];
  return (
    <div className="w-100-100 page px-1 md:px-0 overflowY-auto scroll-smooth ">
      <Head>
        <title>Transforms - AkramCSS</title>
        <meta
          name="description"
          content="Transforms page presents all the transform utility classes of AkramCSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="container" className="display-flex flex-row w-100-100">
        <div className="md:px-2 max-w-100-100 pb-4 ">
          <p id="nouhack" className="text-4xl font-bold ls-tighter">
            Transforms
          </p>
          <TransformsPge />
        </div>
        <ReferencesSideBar items={test} />
      </div>
    </div>
  );
}

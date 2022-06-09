import React from "react";
import Head from "next/head";
import ReferencesSideBar from "../../Components/ReferencesSideBar";
import FiltersPage from "../../pages-data/filters";
type Props = {};

export default function Filters({}: Props) {
  const test = [
    { name: "Blur", url: "#blur" },
    { name: "Brightness", url: "#brightness" },
    { name: "Contrast", url: "#contrast" },
    { name: "Grayscale", url: "#grayscale" },
    { name: "Hue rotate", url: "#huerotate" },
    { name: "Invert", url: "#invert" },
    { name: "Saturate", url: "#saturate" },
  ];
  return (
    <div className="w-100-100 page px-1 md:px-0 overflowY-auto scroll-smooth ">
      <Head>
        <title>Filters - AkramCSS</title>
        <meta
          name="description"
          content="Filters page presents all the filter utility classes of AkramCSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="container" className="display-flex flex-row w-100-100">
        <div className="md:px-2 max-w-100-100 pb-4 ">
          <p id="nouhack" className="text-4xl font-bold ls-tighter">
            Filters
          </p>
          <FiltersPage />
        </div>
        <ReferencesSideBar items={test} />
      </div>
    </div>
  );
}

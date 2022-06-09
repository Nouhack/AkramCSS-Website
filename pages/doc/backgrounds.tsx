import React from "react";
import Head from "next/head";
import ReferencesSideBar from "../../Components/ReferencesSideBar";
import BackgorundsPage from "../../pages-data/backgrounds";
type Props = {};

export default function Backgrounds({}: Props) {
  const test = [
    { name: "Background attachment", url: "#backgroundattachment" },
    { name: "Background clip", url: "#backgroundclip" },
    { name: "Background color", url: "#backgroundcolor" },
    { name: "Background origin", url: "#backgroundorigin" },
    { name: "Background position", url: "#backgroundposition" },
    { name: "Background repeat", url: "#backgroundrepeat" },
    { name: "Background size", url: "#backgroundsize" },
    { name: "Background image", url: "#backgroundimage" },
    { name: "From", url: "#from" },
    { name: "To", url: "#to" },
  ];
  return (
    <div className="w-100-100 page px-1 md:px-0 overflowY-auto scroll-smooth ">
      <Head>
        <title>Backgrounds - AkramCSS</title>
        <meta
          name="description"
          content="Backgrounds page presents all the background utility classes of AkramCSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="container" className="display-flex flex-row w-100-100">
        <div className="md:px-2 max-w-100-100 pb-4 ">
          <p id="nouhack" className="text-4xl font-bold ls-tighter">
            Backgrounds
          </p>
          <BackgorundsPage />
        </div>
        <ReferencesSideBar items={test} />
      </div>
    </div>
  );
}

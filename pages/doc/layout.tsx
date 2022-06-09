import React from "react";
import Head from "next/head";
import ReferencesSideBar from "../../Components/ReferencesSideBar";
import Layoutdata from "../../pages-data/layout-data";
type Props = {};

export default function Layout({}: Props) {
  const test = [
    { name: "Aspect ratio", url: "#aspectratio" },
    { name: "Box decoration break", url: "#boxdecorationbreak" },
    { name: "Display", url: "#display" },
    { name: "Float", url: "#float" },
    { name: "Clear", url: "#clear" },
    { name: "Object fit", url: "#objectfit" },
    { name: "Object position", url: "#objectposition" },
    { name: "Overflow", url: "#overflow" },
    { name: "Horizontal Overflow", url: "#overflowx" },
    { name: "Vertical Overflow", url: "#overflowy" },
    { name: "Over scroll behavior", url: "#overscrollbehavior" },
    { name: "Horizontal over scroll behavior", url: "#overscrollx" },
    { name: "Vertical over scroll behavior", url: "#overscrolly" },
    { name: "Position", url: "#position" },
    { name: "Top", url: "#top" },
    { name: "Right", url: "#right" },
    { name: "Left", url: "#left" },
    { name: "Bottom", url: "#bottom" },
  ];
  return (
    <div className="w-100-100 page px-1 md:px-0 overflowY-auto scroll-smooth ">
      <Head>
        <title>Layout - AkramCSS</title>
        <meta
          name="description"
          content="Layout page presents all the layout utility classes of AkramCSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="container" className="display-flex flex-row w-100-100">
        <div className="md:px-2 max-w-100-100 pb-4 ">
          <p id="nouhack" className="text-4xl font-bold ls-tighter">
            Layout
          </p>
          <Layoutdata />
        </div>
        <ReferencesSideBar items={test} />
      </div>
    </div>
  );
}

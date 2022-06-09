import React from "react";
import Head from "next/head";
import ReferencesSideBar from "../../Components/ReferencesSideBar";
import SpacingPage from "../../pages-data/spacing";
type Props = {};

export default function Spacing({}: Props) {
  const test = [
    {
      name: "padding",
      url: "#padding",
    },
    { name: "Horizontal padding", url: "#horizontalpadding" },
    { name: "Vertical padding", url: "#verticalpadding" },
    { name: "Padding top", url: "#paddingtop" },
    { name: "Padding bottom", url: "#paddingbottom" },
    { name: "Padding right", url: "#paddingright" },
    { name: "Padding left", url: "#paddingleft" },
    { name: "Margin", url: "#margin" },
    { name: "Horizontal margin", url: "#horizontalmargin" },
    { name: "Vetrical margin", url: "#verticalmargin" },
    { name: "Margin top", url: "#margintop" },
    { name: "Margin bottom", url: "#marginbottom" },
    { name: "Margin right", url: "#marginright" },
    { name: "Margin left", url: "#marginleft" },
  ];
  return (
    <div className="w-100-100 page px-1 md:px-0 overflowY-auto scroll-smooth ">
      <Head>
        <title>Spacing - AkramCSS</title>
        <meta
          name="description"
          content="Spacing page presents all the spacing utility classes of AkramCSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="container" className="display-flex flex-row w-100-100">
        <div className="md:px-2 max-w-100-100 pb-4 ">
          <p id="nouhack" className="text-4xl font-bold ls-tighter">
            Spacing
          </p>
          <SpacingPage />
        </div>
        <ReferencesSideBar items={test} />
      </div>
    </div>
  );
}

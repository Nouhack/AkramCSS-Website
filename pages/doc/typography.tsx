import React from "react";
import Head from "next/head";
import ReferencesSideBar from "../../Components/ReferencesSideBar";
import TypographyPage from "../../pages-data/typography";
type Props = {};

export default function Typography({}: Props) {
  const test = [
    {
      name: "font size",
      url: "#fontsize",
    },
    { name: "font family", url: "#fontfamily" },
    { name: "font weight", url: "#fontweight" },
    { name: "font variant numeric", url: "#fontvariantnumeric" },
    { name: "letter spacing", url: "#letterspacing" },
    { name: "line height", url: "#lineheight" },
    { name: "list type", url: "#listtype" },
    { name: "list style position", url: "#liststyleposition" },
    { name: "text align", url: "#textalign" },
    { name: "text color", url: "#textcolor" },
    { name: "text decoration", url: "#textdecoration" },
    { name: "text decoration color", url: "#textdecorationcolor" },
    { name: "text decoration style", url: "#textdecorationstyle" },
    { name: "text decoration thickness", url: "#textdecorationthickness" },
    { name: "text underline offset", url: "#textunderlineoffset" },
    { name: "text transform", url: "#texttransform" },
    { name: "text overflow", url: "#textoverflow" },
    { name: "indent", url: "#indent" },
    { name: "vertical align", url: "#verticalalign" },
    { name: "white spacing", url: "#whitespacing" },
    { name: "word break", url: "#wordbreak" },
    { name: "font style", url: "#fontstyle" },
  ];
  return (
    <div className="w-100-100 page px-1 md:px-0 overflowY-auto scroll-smooth ">
      <Head>
        <title>Typography - AkramCSS</title>
        <meta
          name="description"
          content="Typography page presents all the text and fonts utility classes of AkramCSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="container" className="display-flex flex-row w-100-100">
        <div className="md:px-2 max-w-100-100 pb-4 ">
          <p id="nouhack" className="text-4xl font-bold ls-tighter">
            Typography
          </p>
          <TypographyPage />
        </div>
        <ReferencesSideBar items={test} />
      </div>
    </div>
  );
}

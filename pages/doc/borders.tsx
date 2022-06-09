import React from "react";
import Head from "next/head";
import ReferencesSideBar from "../../Components/ReferencesSideBar";
import BordersPage from "../../pages-data/borders";

type Props = {};

export default function Borders({}: Props) {
  const test = [
    {
      name: "Border radius",
      url: "#rounded",
    },
    { name: "Border radius top", url: "#roundedtop" },
    { name: "Border radius bottom", url: "#roundedbottom" },
    { name: "Border radius right", url: "#roundedright" },
    { name: "Border radius left", url: "#roundedleft" },
    { name: "Border radius top right", url: "#roundedtopright" },
    { name: "Border radius top left", url: "#roundedtopleft" },
    { name: "Border radius bottom right", url: "#roundedbottomright" },
    { name: "Border radius bottom left", url: "#roundedbottomleft" },
    { name: "Border width", url: "#borderwidth" },
    { name: "Border width top", url: "#bordertopwidth" },
    { name: "Border width bottom", url: "#borderbottomwidth" },
    { name: "Border width right", url: "#borderrightwidth" },
    { name: "Border width left", url: "#borderleftwidth" },
    { name: "Horizontal border width", url: "#borderXwidth" },
    { name: "Vertical border width", url: "#borderYwidth" },
    { name: "Border color", url: "#bordercolor" },
    { name: "Border top color", url: "#bordertopcolor" },
    { name: "Border bottom color", url: "#borderbottomcolor" },
    { name: "Border right color", url: "#borderrightcolor" },
    { name: "Border left color", url: "#borderleftcolor" },
    { name: "Horizontal Border color", url: "#borderhorizontalcolor" },
    { name: "Vertical Border color", url: "#borderverticalcolor" },
    { name: "Border style", url: "#borderstyle" },
    { name: "Outline style", url: "#outlinestyle" },
    { name: "Outline width", url: "#outlinewidth" },
    { name: "Outline color ", url: "#outlinecolor" },
    { name: "Outline offset", url: "#outlineoffset" },
  ];
  return (
    <div className="w-100-100 page px-1 md:px-0 overflowY-auto scroll-smooth ">
      <Head>
        <title>Borders - AkramCSS</title>
        <meta
          name="description"
          content="Borders page presents all the border utility classes of AkramCSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="container" className="display-flex flex-row w-100-100">
        <div className="md:px-2 max-w-100-100 pb-4 ">
          <p id="nouhack" className="text-4xl font-bold ls-tighter">
            Borders
          </p>
          <BordersPage />
        </div>
        <ReferencesSideBar items={test} />
      </div>
    </div>
  );
}

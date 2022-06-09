import React from "react";
import Head from "next/head";
import ReferencesSideBar from "../../Components/ReferencesSideBar";
import FlexGrid from "../../pages-data/flex-grid";
type Props = {};

export default function Flexgrid({}: Props) {
  const test = [
    { name: "Flex basis", url: "#flexbasis" },
    { name: "Flex direction", url: "#flexdirection" },
    { name: "Flex wrap", url: "#flexwrap" },
    { name: "Flex", url: "#flex" },
    { name: "Flex grow", url: "#flexgrow" },
    { name: "Flex shrink", url: "#flexshrink" },
    { name: "Order", url: "#order" },
    { name: "Grid template columns", url: "#gridtemplatecolumns" },
    { name: "Grid column", url: "#gridcolumn" },
    { name: "Grid column start", url: "#gridcolumnstart" },
    { name: "Grid column end", url: "#gridcolumnend" },
    { name: "Grid template rows", url: "#gridtemplaterows" },
    { name: "Grid row", url: "#gridrow" },
    { name: "Grid row start", url: "#gridrowstart" },
    { name: "Grid row end", url: "#gridrowend" },
    { name: "Grid auto flow", url: "#gridautoflow" },
    { name: "Gap", url: "#gap" },
    { name: "Column gap", url: "#columngap" },
    { name: "Row gap", url: "#rowgap" },
    { name: "Justify content", url: "#justifycontent" },
    { name: "Justify items", url: "#justifyitems" },
    { name: "Justify self", url: "#justifyself" },
    { name: "Align content", url: "#aligncontent" },
    { name: "Align items", url: "#alignitems" },
    { name: "Align self", url: "#alignself" },
    { name: "Place content", url: "#placecontent" },
    { name: "Place items", url: "#placeitems" },
    { name: "Place self", url: "#placeself" },
  ];
  return (
    <div className="w-100-100 page px-1 md:px-0 overflowY-auto scroll-smooth ">
      <Head>
        <title>Flex - Grid - AkramCSS</title>
        <meta
          name="description"
          content="Flex grid page presents all the flex and grid utility classes of AkramCSS"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="container" className="display-flex flex-row w-100-100">
        <div className="md:px-2 max-w-100-100 pb-4 ">
          <p id="nouhack" className="text-4xl font-bold ls-tighter">
            Flex - Grid
          </p>
          <FlexGrid />
        </div>
        <ReferencesSideBar items={test} />
      </div>
    </div>
  );
}

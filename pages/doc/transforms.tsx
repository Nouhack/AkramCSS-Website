import React from "react";
import Head from "next/head";
import UtilityDoc from "../../Components/subComponents/UtilityDoc";
import ReferencesSideBar from "../../Components/ReferencesSideBar";
import {
  scale,
  scaleX,
  scaleY,
  rotate,
  translateX,
  translateY,
  percentageTranslateX,
  percentageTranslateY,
  skewX,
  skewY,
} from "../../data/utility";

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

          <UtilityDoc
            id="scale"
            mainTitle="Scale"
            mainDescription="The scale() CSS function defines a transformation that resizes an element on the 2D plane. Because the amount of scaling is defined by a vector, it can resize the horizontal and vertical dimensions at different scales. Its result is a <transform-function> data type."
            items={scale}
            usage={`{ scale }-{ 0 | 25 | 50 | 75 | 100 | 150 | 170 | 200 }`}
            code={`<div class="bg-akram w-100-100">
            <img class="scale-75"/>
            <img class="scale-25"/>
            <img class="scale-100"/>
</div>`}
          />
          <UtilityDoc
            id="scalex"
            mainTitle="Horizontal scale"
            mainDescription="The scaleX() CSS function defines a transformation that resizes an element along the x-axis (horizontally). Its result is a <transform-function> data type."
            items={scaleX}
            usage={`{ scale-x }-{ 0 | 25 | 50 | 75 | 100 | 150 | 170 | 200 }`}
            code={`<div class="bg-maria display-flex flex-row">
            <img class="scale-x-75"/>
            <img class="scale-x-25"/>
            <img class="scale-x-100"/>
</div>`}
          />
          <UtilityDoc
            id="scaley"
            mainTitle="Vertical scale"
            mainDescription="The scaleY() CSS function defines a transformation that resizes an element along the y-axis (vertically). Its result is a <transform-function> data type."
            items={scaleY}
            usage={`{ scale-y }-{ 0 | 25 | 50 | 75 | 100 | 150 | 170 | 200 }`}
            code={`<div class="bg-primary">
            <img class="scale-y-75"/>
            <img class="scale-y-25"/>
            <img class="scale-y-100"/>
</div>`}
          />

          <UtilityDoc
            id="rotate"
            mainTitle="Rotate"
            mainDescription="The rotate() CSS function defines a transformation that rotates an element around a fixed point on the 2D plane, without deforming it. Its result is a <transform-function> data type."
            items={rotate}
            usage={`{ rotate }-{ 0 | 1 | 3 | 5 | 12 | 30 | 45 | 60 | 90 | 180}`}
            code={`<div class="bg-sissa p-4 m-2">
            <img class="rotate-12"/>
            <img class="rotate-60"/>
            <img class="rotate-90"/>
</div>`}
          />
          <UtilityDoc
            id="translatex"
            mainTitle="Horizontal rems translate"
            mainDescription="The translateX() CSS function repositions an element horizontally on the 2D plane. Its result is a <transform-function> data type."
            items={translateX}
            usage={`{ translate-x }-{ remsizes }`}
            code={`<div class="bg-sissa p-4 m-2">
            <img class="translate-x-2"/>
            <img class="translate-x-10"/>
            <img class="translate-x-15"/>
</div>`}
          />
          <UtilityDoc
            id="translatey"
            mainTitle="Vertical rems translate"
            mainDescription="The translateY() CSS function repositions an element vertically on the 2D plane. Its result is a <transform-function> data type."
            items={translateY}
            usage={`{ translate-y }-{ remsizes }`}
            code={`<div class="bg-sissa p-4 m-2">
            <img class="translate-y-2"/>
            <img class="translate-y-10"/>
            <img class="translate-y-15"/>
</div>`}
          />
          <UtilityDoc
            id="percentagetranslatex"
            mainTitle="Horizontal percentage translate"
            mainDescription="The translateX() CSS function repositions an element horizontally on the 2D plane. Its result is a <transform-function> data type. the variables are in percentage instead of rems."
            items={percentageTranslateX}
            usage={`{ translate-x }-{ 10-100 | 20-100 | 30-100 | 40-100 | 50-100 | 60-100 | 70-100 | 80-100 | 90-100 | 100-100 }`}
            code={`<div class="bg-sissa p-4 m-2">
            <img class="translate-x-10-100"/>
            <img class="translate-x-40-100"/>
            <img class="translate-x-100-100"/>
</div>`}
          />
          <UtilityDoc
            id="percentagetranslatey"
            mainTitle="Vertical percentage translate"
            mainDescription="The translateY() CSS function repositions an element vertically on the 2D plane. Its result is a <transform-function> data type. the variables are in percentage instead of rems."
            items={percentageTranslateY}
            usage={`{ translate-y }-{ 10-100 | 20-100 | 30-100 | 40-100 | 50-100 | 60-100 | 70-100 | 80-100 | 90-100 | 100-100 }`}
            code={`<div class="bg-sissa p-4 m-2">
            <img class="translate-y-10-100"/>
            <img class="translate-y-40-100"/>
            <img class="translate-y-100-100"/>
</div>`}
          />
          <UtilityDoc
            id="horizontalskew"
            mainTitle="Horizontal skew"
            mainDescription="The skewX() CSS function defines a transformation that skews an element in the horizontal direction on the 2D plane. Its result is a <transform-function> data type."
            items={skewX}
            usage={`{ skew-x }-{ 0 | 1 | 3 | 6 | 12 | 30 | 45 | 60 | 90 | 180 }`}
            code={`<div class="bg-sissa p-4 m-2">
            <img class="skew-x-0"/>
            <img class="skew-x-12"/>
            <img class="skew-x-45"/>
</div>`}
          />
          <UtilityDoc
            id="verticalskew"
            mainTitle="Vertical skew"
            mainDescription="The skewY() CSS function defines a transformation that skews an element in the vertical direction on the 2D plane. Its result is a <transform-function> data type."
            items={skewY}
            usage={`{ skew-y }-{ 0 | 1 | 3 | 6 | 12 | 30 | 45 | 60 | 90 | 180 }`}
            code={`<div class="bg-sissa p-4 m-2">
            <img class="skew-y-0"/>
            <img class="skew-y-12"/>
            <img class="skew-y-45"/>
</div>`}
          />
        </div>
        <ReferencesSideBar items={test} />
      </div>
    </div>
  );
}

import React from "react";
import Head from "next/head";
import UtilityDoc from "../../Components/subComponents/UtilityDoc";
import ReferencesSideBar from "../../Components/ReferencesSideBar";
import {
  blur,
  brightness,
  contrast,
  grayscale,
  hurRotate,
  invert,
  saturate,
} from "../../data/utility";

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

          <UtilityDoc
            id="blur"
            mainTitle="Blur"
            mainDescription="The blur() CSS function applies a Gaussian blur to the input image. Its result is a <filter-function>."
            items={blur}
            usage={`{ blur }-{ none | sm | default | md | lg | xl | 2xl | 3xl | 4xl }`}
            code={`<div class="bg-akram w-100-100">
            <div class="blur-sm"></div>
            <div class="blur-none"></div>
            <div class="blur-lg"></div>
</div>`}
          />
          <UtilityDoc
            id="brightness"
            mainTitle="Brightness"
            mainDescription="The brightness() CSS function applies a linear multiplier to the input image, making it appear brighter or darker. Its result is a <filter-function>."
            items={brightness}
            usage={`{ brightness }-{ 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100 | 110 | 120 | 130 | 140 | 150 | 160 | 170 | 180 | 190 | 200 }`}
            code={`<div class="bg-maria display-flex flex-row">
            <div class='brightness-0'>TWO</div>
            <div class='brightness-40'>THREE</div>
            <div class='brightness-60'>FOUR</div>
            <div class='brightness-100'>FOUR</div>
</div>`}
          />
          <UtilityDoc
            id="contrast"
            mainTitle="Contrast"
            mainDescription="The contrast() CSS function adjusts the contrast of the input image. Its result is a <filter-function>."
            items={contrast}
            usage={`{ contrast }-{ 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100 | 110 | 120 | 130 | 140 | 150 | 160 | 170 | 180 | 190 | 200 }`}
            code={`<div class="bg-primary">
        <div class="contrast-0">ONE</div>
        <div class="contrast-40">TWO</div>
        <div class="contrast-120">THREE</div>
</div>`}
          />

          <UtilityDoc
            id="grayscale"
            mainTitle="Grayscale"
            mainDescription="The grayscale() CSS function converts the input image to grayscale. Its result is a <filter-function>."
            items={grayscale}
            usage={`{ grayscale }-{ 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100}`}
            code={`<div class="bg-sissa p-4 m-2">
        <div class="grayscale-0">ONE</div>
        <div class="grayscale-40">TWO</div>
        <div class="grayscale-100">THREE</div>
</div>`}
          />
          <UtilityDoc
            id="huerotate"
            mainTitle="Hue rotate"
            mainDescription="The hue-rotate() CSS function rotates the hue of an element and its contents. Its result is a <filter-function>."
            items={hurRotate}
            usage={`{ hue-rotate }-{ 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100}`}
            code={`<div class="bg-sissa p-4 m-2">
        <div class="hue-rotate-0">ONE</div>
        <div class="hue-rotate-40">TWO</div>
        <div class="hue-rotate-100">THREE</div>
</div>`}
          />
          <UtilityDoc
            id="invert"
            mainTitle="Invert"
            mainDescription="The invert() CSS function inverts the color samples in the input image. Its result is a <filter-function>."
            items={invert}
            usage={`{ invert }-{ 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100}`}
            code={`<div class="bg-sissa p-4 m-2">
        <div class="invert-0">ONE</div>
        <div class="invert-40">TWO</div>
        <div class="invert-100">THREE</div>
</div>`}
          />
          <UtilityDoc
            id="saturate"
            mainTitle="Saturate"
            mainDescription="The saturate() CSS function super-saturates or desaturates the input image. Its result is a <filter-function>."
            items={saturate}
            usage={`{ saturate }-{ 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100 | 200}`}
            code={`<div class="bg-sissa p-4 m-2">
        <div class="saturate-0">ONE</div>
        <div class="saturate-40">TWO</div>
        <div class="saturate-100">THREE</div>
        <div class="saturate-200">THREE</div>
</div>`}
          />
        </div>
        <ReferencesSideBar items={test} />
      </div>
    </div>
  );
}

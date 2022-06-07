import React from "react";
import Head from "next/head";
import UtilityDoc from "../../Components/subComponents/UtilityDoc";
import ReferencesSideBar from "../../Components/ReferencesSideBar";
import {
  shadow,
  opacity,
  mixBlend,
  backgroundBlendMode,
} from "../../data/utility";

type Props = {};

export default function Effects({}: Props) {
  const test = [
    { name: "Shadow box", url: "#shadow" },
    { name: "Opacity", url: "#opacity" },
    { name: "Mix blend mode", url: "#mixblend" },
    { name: "Background blend mode", url: "#backgroundblendmode" },
  ];
  return (
    <div className="w-100-100 page px-1 md:px-0 overflowY-auto scroll-smooth ">
      <Head>
        <title>Effects - AkramCSS</title>
        <meta
          name="description"
          content="Effects page presents all the effect utility classes of AkramCSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="container" className="display-flex flex-row w-100-100">
        <div className="md:px-2 max-w-100-100 pb-4 ">
          <p id="nouhack" className="text-4xl font-bold ls-tighter">
            Effects
          </p>

          <UtilityDoc
            id="shadow"
            mainTitle="Shadow box"
            mainDescription="The box-shadow CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color."
            items={shadow}
            usage={`{ shadow }-{ sm | md | lg | xl | 2xl | 3xl }-{ base | inner | sissa | akram | maria | senary}`}
            code={`<div class="bg-akram w-100-100">
            <div class="shadow-sm-sissa"></div>
            <div class="shadow-lg-maria"></div>
            <div class="shadow-3xl-senary"></div>
</div>`}
          />
          <UtilityDoc
            id="opacity"
            mainTitle="Opacity"
            mainDescription="The opacity CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency."
            items={opacity}
            usage={`{ opacity }-{ 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100 }`}
            code={`<div class="bg-maria display-flex flex-row">
            <div class='opacity-10'>TWO</div>
            <div class='opacity-30'>THREE</div>
            <div class='opacity-50'>FOUR</div>
            <div class='opacity-100'>FOUR</div>
</div>`}
          />
          <UtilityDoc
            id="mixblend"
            mainTitle="Mix blend mode"
            mainDescription="The mix-blend-mode CSS property sets how an element's content should blend with the content of the element's parent and the element's background."
            items={mixBlend}
            usage={`{ mix-blend-mode }-{ normal | multiply | screen | overlay | darken | lighten | color-dodge | color-burn | hard-light | soft-light | difference | exclusion | hue | saturation | color | luminosity }`}
            code={`<div class="bg-primary">
        <div class="mix-blend-mode-normal">ONE</div>
        <div class="mix-blend-mode-screen">TWO</div>
        <div class="mix-blend-mode-dark">THREE</div>
</div>`}
          />

          <UtilityDoc
            id="backgroundblendmode"
            mainTitle="Background blend mode"
            mainDescription="The background-blend-mode CSS property sets how an element's background images should blend with each other and with the element's background color."
            items={backgroundBlendMode}
            usage={`{ bg-blend-mode }-{ normal | multiply | screen | overlay | darken | lighten | color-dodge | color-burn | hard-light | soft-light | difference | exclusion | hue | saturation | color | luminosity }`}
            code={`<div class="bg-sissa p-4 m-2">
        <div class="bg-blend-mode-normal">ONE</div>
        <div class="bg-blend-mode-screen">TWO</div>
        <div class="bg-blend-mode-darken">THREE</div>
</div>`}
          />
        </div>
        <ReferencesSideBar items={test} />
      </div>
    </div>
  );
}

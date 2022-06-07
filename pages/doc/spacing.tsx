import React from "react";
import Head from "next/head";
import UtilityDoc from "../../Components/subComponents/UtilityDoc";
import ReferencesSideBar from "../../Components/ReferencesSideBar";
import {
  padding,
  horizontalPadding,
  verticalPadding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  margin,
  horizontalMargin,
  verticalMargin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
} from "../../data/utility";

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

          <UtilityDoc
            id="padding"
            mainTitle="Padding"
            mainDescription="The padding CSS shorthand property sets the padding area on all four sides of an element at once."
            items={padding}
            usage={`{ p }-{ remsizes }`}
            code={`<div class="bg-akram w-100-100">
            <div class='p-0.5'>ONE</div>
            <div class='p-1'>TWO</div>
            <div class='p-2'>THREE</div>
            <div class='p-7'>FOUR</div>
            <div class='p-10'>FIVE</div>
</div>`}
          />
          <UtilityDoc
            special={true}
            id="horizontalpadding"
            mainTitle="Horizontal padding"
            mainDescription="Horizontal padding set the right and left padding to have the same value."
            items={horizontalPadding}
            usage={`{ px }-{ remsizes }`}
            code={`<div class="bg-maria display-flex flex-row">
            <div class='px-1'>TWO</div>
            <div class='px-2'>THREE</div>
            <div class='px-7'>FOUR</div>
            <div class='px-10'>FIVE</div>
</div>`}
          />
          <UtilityDoc
            special={true}
            id="verticalpadding"
            mainTitle="Vertical padding"
            mainDescription="Vertival padding set the top and bottom padding to have the same value."
            items={verticalPadding}
            usage={`{ py }-{ remsizes }`}
            code={`<div class="bg-primary">
        <p class="py-2">ONE</p>
        <p class="py-3">TWO</p>
        <p class="py-0.5">THREE</p>
        <p class="py-1">FOUR</p>
</div>`}
          />

          <UtilityDoc
            id="paddingtop"
            mainTitle="Padding top"
            mainDescription="The padding-top CSS property sets the height of the padding area on the top of an element."
            items={paddingTop}
            usage={`{ pt }-{ remsizes }`}
            code={`<div class="bg-sissa p-4 m-2">
        <p class="pt-3">ONE</p>
        <p class="pt-2">TWO</p>
        <p class="pt-0.5">THREE</p>
</div>`}
          />
          <UtilityDoc
            id="paddingbottom"
            mainTitle="Padding bottom"
            mainDescription="The padding-bottom CSS property sets the height of the padding area on the bottom of an element."
            items={paddingBottom}
            usage={`{ pb }-{ remsizes }`}
            code={`<div class="bg-sissa p-4 m-2">
        <p class="pb-3">ONE</p>
        <p class="pb-7">TWO</p>
        <p class="pb-0">THREE</p>
</div>`}
          />

          <UtilityDoc
            id="paddingright"
            mainTitle="Padding right"
            mainDescription="The padding-right CSS property sets the width of the padding area on the right of an element."
            items={paddingRight}
            usage={`{ pr }-{ remsizes }`}
            code={`<div class="bg-maria my-2 w-full">
        <p class="pr-3">One</p>
        <p class="pr-2">TWO</p>
        <p class="pr-10">THREE</p>
</div>`}
          />

          <UtilityDoc
            id="paddingleft"
            mainTitle="Padding left"
            mainDescription="The padding-left CSS property sets the width of the padding area to the left of an element."
            items={paddingLeft}
            usage={`{ pl }-{ remsizes }`}
            code={`<div class="bg-maria my-2 w-full">
        <p class="pl-3">One</p>
        <p class="pl-2">TWO</p>
        <p class="pl-10">THREE</p>
</div>`}
          />

          <UtilityDoc
            id="margin"
            mainTitle="Margin"
            mainDescription="The margin CSS shorthand property sets the margin area on all four sides of an element."
            items={margin}
            usage={`{ m }-{ remsizes }`}
            code={`<div class="bg-maria my-2 w-full">
        <p class="m-3">One</p>
        <p class="m-2">TWO</p>
        <p class="m-10">THREE</p>
</div>`}
          />
          <UtilityDoc
            special={true}
            id="horizontalmargin"
            mainTitle="Horizontal margin"
            mainDescription="The horizontal margin sets the right and left margin to have the same value."
            items={horizontalMargin}
            usage={`{ mx }-{ remsizes }`}
            code={`<div class="bg-maria my-2 w-full">
        <p class="mx-3">One</p>
        <p class="mx-2">TWO</p>
        <p class="mx-10">THREE</p>
</div>`}
          />

          <UtilityDoc
            special={true}
            id="verticalmargin"
            mainTitle="Vertical margin"
            mainDescription="The vertical margin sets the top and bottom margin to have the same value."
            items={verticalMargin}
            usage={`{ my }-{ remsizes }`}
            code={`<div class="bg-maria my-2 w-full">
        <p class="my-3">One</p>
        <p class="my-2">TWO</p>
        <p class="my-10">THREE</p>
</div>`}
          />
          <UtilityDoc
            id="margintop"
            mainTitle="Margin top"
            mainDescription="The margin-top CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer."
            items={marginTop}
            usage={`{ mt }-{ remsizes }`}
            code={`<div class="bg-maria my-2 w-full">
        <p class="mt-3">One</p>
        <p class="mt-2">TWO</p>
        <p class="mt-10">THREE</p>
</div>`}
          />
          <UtilityDoc
            id="marginbottom"
            mainTitle="Margin bottom"
            mainDescription="The margin-bottom CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer."
            items={marginBottom}
            usage={`{ mb }-{ remsizes }`}
            code={`<div class="bg-maria my-2 w-full">
        <p class="mb-3">One</p>
        <p class="mb-2">TWO</p>
        <p class="mb-10">THREE</p>
</div>`}
          />

          <UtilityDoc
            id="marginright"
            mainTitle="Margin right"
            mainDescription="The margin-right CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer."
            items={marginRight}
            usage={`{ mr }-{ remsizes }`}
            code={`<div class="bg-maria my-2 w-full">
        <p class="mr-3">One</p>
        <p class="mr-2">TWO</p>
        <p class="mr-10">THREE</p>
</div>`}
          />

          <UtilityDoc
            id="marginleft"
            mainTitle="Margin left"
            mainDescription="The margin-left CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer."
            items={marginLeft}
            usage={`{ ml }-{ remsizes }`}
            code={`<div class="bg-maria my-2 w-full">
        <p class="ml-3">One</p>
        <p class="ml-2">TWO</p>
        <p class="ml-10">THREE</p>
</div>`}
          />
        </div>
        <ReferencesSideBar items={test} />
      </div>
    </div>
  );
}

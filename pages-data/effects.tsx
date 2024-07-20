import React from "react";
import UtilityDoc from "../Components/subComponents/UtilityDoc";
import {
  shadow,
  opacity,
  mixBlend,
  backgroundBlendMode,
} from "../data/utility";

type Props = {};

export default function effects({}: Props) {
  return (
    <>
      <UtilityDoc
        id="shadow"
        mainTitle="Shadow box"
        mainDescription="The box-shadow CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color."
        items={shadow}
        usage={`{ shadow }-{ sm | md | lg | xl | 2xl | 3xl }-{ base | inner | primary | secondary | success | info | warning | danger | sissa | akram | maria }`}
        code={`<div class="bg-akram w-100-100">
            <div class="shadow-sm-sissa"></div>
            <div class="shadow-lg-maria"></div>
            <div class="shadow-3xl-primary"></div>
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
    </>
  );
}

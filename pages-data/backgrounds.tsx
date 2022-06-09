import React from "react";
import UtilityDoc from "../Components/subComponents/UtilityDoc";
import {
  backgroundAttachment,
  backgroundClip,
  backgroundColor,
  backgroundOrigin,
  backgroundPosition,
  backgroundRepeat,
  backgroundSize,
  backgroundImage,
  fromGradient,
  toGradient,
} from "../data/utility";

type Props = {};

export default function backgrounds({}: Props) {
  return (
    <>
      <UtilityDoc
        id="backgroundattachment"
        mainTitle="Background attachment"
        mainDescription="The background-attachment CSS property sets whether a background image's position is fixed within the viewport, or scrolls with its containing block."
        items={backgroundAttachment}
        usage={`{ bg }-{ fixed | scroll | local }`}
        code={`<div class="bg-akram w-100-100">
            <div class="bg-fixed" style="background-image: url(...)"></div>
            <div class="bg-scroll" style="background-image: url(...)"></div>
            <div class="bg-local" style="background-image: url(...)"></div>
</div>`}
      />
      <UtilityDoc
        id="backgroundclip"
        mainTitle="Background clip"
        mainDescription="The background-clip CSS property sets whether an element's background extends underneath its border box, padding box, or content box."
        items={backgroundClip}
        usage={`{ bg }-{ clip-border | clip-padding | clip-content | clip-text }`}
        code={`<div class="bg-maria display-flex flex-row">
            <div class='bg-clip-border'>TWO</div>
            <div class='bg-clip-padding'>THREE</div>
            <div class='bg-clip-content'>FOUR</div>
            <div class='bg-clip-text'>FOUR</div>
</div>`}
      />
      <UtilityDoc
        id="backgroundcolor"
        mainTitle="Background color"
        mainDescription="The background-color CSS property sets the background color of an element."
        items={backgroundColor}
        usage={`{ bg }-{ base | inner | sissa | akram | maria | senary}`}
        code={`<div class="bg-primary">
        <div class="bg-sissa">ONE</div>
        <div class="bg-akram">TWO</div>
        <div class="bg-maria">THREE</div>
</div>`}
      />

      <UtilityDoc
        id="backgroundorigin"
        mainTitle="Background origin"
        mainDescription="The background-origin CSS property sets the background's origin: from the border start, inside the border, or inside the padding."
        items={backgroundOrigin}
        usage={`{ bg }-{ origin-border | origin-padding | origin-content }`}
        code={`<div class="bg-sissa p-4 m-2">
        <div class="bg-origin-border">ONE</div>
        <div class="bg-origin-padding">TWO</div>
        <div class="bg-origin-content">THREE</div>
</div>`}
      />
      <UtilityDoc
        id="backgroundposition"
        mainTitle="Background position"
        mainDescription="The background-position CSS property sets the initial position for each background image. The position is relative to the position layer set by background-origin."
        items={backgroundPosition}
        usage={`{ bg }-{ center | top | right | left | bottom | top-left | top-right | bottom-left | bottom-right }`}
        code={`<div class="bg-sissa p-4 m-2">
        <div class="bg-top">ONE</div>
        <div class="bg-center">TWO</div>
        <div class="bg-top-right">THREE</div>
</div>`}
      />

      <UtilityDoc
        id="backgroundrepeat"
        mainTitle="Background repeat"
        mainDescription="The background-repeat CSS property sets how background images are repeated. A background image can be repeated along the horizontal and vertical axes, or not repeated at all."
        items={backgroundRepeat}
        usage={`{ bg }-{ repeat | repeat-x | repeat-y | no-repeat | repeat-round | repeat-space }`}
        code={`<div class="bg-maria my-2 w-full">
        <div class="bg-repeat" style="background-image: url(...)"></div>
        <div class="bg-no-repeat" style="background-image: url(...)"></div>
        <div class="bg-repeat-y" style="background-image: url(...)"></div>
</div>`}
      />

      <UtilityDoc
        id="backgroundsize"
        mainTitle="Background size"
        mainDescription="The background-size CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space."
        items={backgroundSize}
        usage={`{ bg }-{ auto | cover | contain }`}
        code={`<div class="bg-maria my-2 w-full">
        <div class="bg-auto" style="background-image: url(...)"></div>
        <div class="bg-cover" style="background-image: url(...)"></div>
        <div class="bg-contain" style="background-image: url(...)"></div>
</div>`}
      />

      <UtilityDoc
        id="backgroundimage"
        mainTitle="Background image"
        mainDescription="The background-image CSS property sets one or more background images on an element, linear-gradient() CSS function creates an image consisting of a progressive transition between two or more colors along a straight line. Its result is an object of the <gradient> data type, which is a special kind of <image>."
        items={backgroundImage}
        usage={`{ gradient }-{ none | to-top | to-bottom | to-right | to-left | to-top-right | to-top-left | to-bottom-right | to-bottom-left }`}
        code={`<div class="bg-maria my-2 w-full">
        <div class="gradient-none">One</div>
        <div class="gradient-to-top">TWO</div>
        <div class="gradient-to-top-right">THREE</div>
</div>`}
      />
      <UtilityDoc
        id="from"
        mainTitle="From Gradient color"
        mainDescription="From is the first color of the gradient. It is the color of the gradient at the starting point."
        items={fromGradient}
        usage={`{ from }-{ base | inner | sissa | akram | maria | senary }`}
        code={`<div class="bg-maria my-2 w-full">
        <div class="gradient-to-right from-sissa">One</div>
        <div class="gradient-to-top from-akram">TWO</div>
        <div class="gradient-to-top-right from-senary">THREE</div>
</div>`}
      />
      <UtilityDoc
        id="to"
        mainTitle="To Gradient color"
        mainDescription="To is the second color of the gradient. It is the color of the gradient at the ending point."
        items={toGradient}
        usage={`{ to }-{ base | inner | sissa | akram | maria | senary }`}
        code={`<div class="bg-maria my-2 w-full">
        <div class="gradient-right from-sissa to-akram">One</div>
        <div class="gradient-to-top from-akram to-senary">TWO</div>
        <div class="gradient-to-top-right from-senary to-sissa">THREE</div>
</div>`}
      />
    </>
  );
}

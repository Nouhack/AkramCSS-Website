import React from "react";
import UtilityDoc from "../Components/subComponents/UtilityDoc";
import {
  rounded,
  roundedTop,
  roundedBottom,
  roundedLeft,
  roundedRight,
  roundedTopLeft,
  roundedTopRight,
  roundedBottomLeft,
  roundedBottomRight,
  borderWidth,
  borderXWidth,
  borderYWidth,
  borderLeftWidth,
  borderRightWidth,
  borderTopWidth,
  borderBottomWidth,
  borderColor,
  borderXColor,
  borderYColor,
  borderLeftColor,
  borderRightColor,
  borderTopColor,
  borderBottomColor,
  borderStyle,
  outlineStyle,
  outlineWidth,
  outlineColor,
  outlineOffset,
} from "../data/utility";

type Props = {};

export default function borders({}: Props) {
  return (
    <>
      <UtilityDoc
        id="rounded"
        mainTitle="Border radius"
        mainDescription="The border-radius CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners."
        items={rounded}
        usage={`{ rounded }-{ none | sm | md | lg | xl | 2xl | 3xl | 4xl | 5xl | 6xl | circle }`}
        code={`<div class="bg-akram w-100-100">
            <div class='rounded-none'>ONE</div>
            <div class='rounded-sm'>TWO</div>
            <div class='rounded-md'>THREE</div>
            <div class='rounded-lg'>FOUR</div>
            .
            .
            .
            <div class='rounded-circle'>FIVE</div>
</div>`}
      />
      <UtilityDoc
        special={true}
        id="roundedtop"
        mainTitle="Border radius Top"
        mainDescription="Border radius top sets the top right and top left corner radius of an element equal."
        items={roundedTop}
        usage={`{ rounded-t }-{ none | sm | md | lg | xl | 2xl | 3xl | 4xl | 5xl | 6xl | circle }`}
        code={`<div class="bg-maria display-flex flex-row">
            <div class='rounded-t-sm'>TWO</div>
            <div class='rounded-t-lg'>THREE</div>
            <div class='rounded-t-7xl'>FOUR</div>
            <div class='rounded-t-circle'>FIVE</div>
</div>`}
      />
      <UtilityDoc
        special={true}
        id="roundedbottom"
        mainTitle="Border radius Bottom"
        mainDescription="Border radius bottom sets the bottom right and bottom left corner radius of an element equal."
        items={roundedBottom}
        usage={`{ rounded-b }-{ none | sm | md | lg | xl | 2xl | 3xl | 4xl | 5xl | 6xl | circle }`}
        code={`<div class="bg-primary">
        <p class="rounded-b-lg">ONE</p>
        <p class="rounded-b-xl">TWO</p>
        <p class="rounded-b-7xl">THREE</p>
        <p class="rounded-b-circle">FOUR</p>
</div>`}
      />

      <UtilityDoc
        special={true}
        id="roundedright"
        mainTitle="Border radius right"
        mainDescription="Border radius right sets the right top and right bottom corner radius of an element equal."
        items={roundedRight}
        usage={`{ rounded-r }-{ none | sm | md | lg | xl | 2xl | 3xl | 4xl | 5xl | 6xl | circle }`}
        code={`<div class="bg-sissa p-4 m-2">
        <p class="rounded-r-lg">ONE</p>
        <p class="rounded-r-xl">TWO</p>
        <p class="rounded-r-circle">THREE</p>
</div>`}
      />
      <UtilityDoc
        special={true}
        id="roundedleft"
        mainTitle="Border radius left"
        mainDescription="Border radius left sets the left top and left bottom corner radius of an element equal."
        items={roundedLeft}
        usage={`{ rounded-l }-{ none | sm | md | lg | xl | 2xl | 3xl | 4xl | 5xl | 6xl | circle }`}
        code={`<div class="bg-sissa p-4 m-2">
        <p class="rounded-l-lg">ONE</p>
        <p class="rounded-l-xl">TWO</p>
        <p class="rounded-l-circle">THREE</p>
</div>`}
      />

      <UtilityDoc
        id="roundedtopright"
        mainTitle="Border radius top right"
        mainDescription="The border-top-right-radius CSS property rounds the top-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner."
        items={roundedTopRight}
        usage={`{ rounded-tr }-{ none | sm | md | lg | xl | 2xl | 3xl | 4xl | 5xl | 6xl | circle }`}
        code={`<div class="bg-maria my-2 w-full">
        <p class="rounded-tr-xl">One</p>
        <p class="rounded-tr-5xl">TWO</p>
        <p class="rounded-tr-circle">THREE</p>
</div>`}
      />

      <UtilityDoc
        id="roundedtopleft"
        mainTitle="Border radius top left"
        mainDescription="The border-top-left-radius CSS property rounds the top-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner."
        items={roundedTopLeft}
        usage={`{ rounded-tl }-{ none | sm | md | lg | xl | 2xl | 3xl | 4xl | 5xl | 6xl | circle }`}
        code={`<div class="bg-maria my-2 w-full">
        <p class="rounded-tl-xl">One</p>
        <p class="rounded-tl-4xl">TWO</p>
        <p class="rounded-tl-circle">THREE</p>
</div>`}
      />

      <UtilityDoc
        id="roundedbottomright"
        mainTitle="Border radius bottom right"
        mainDescription="The border-bottom-right-radius CSS property rounds the bottom-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner."
        items={roundedBottomRight}
        usage={`{ rounded-br }-{ none | sm | md | lg | xl | 2xl | 3xl | 4xl | 5xl | 6xl | circle }`}
        code={`<div class="bg-maria my-2 w-full">
        <p class="rounded-br-xl">One</p>
        <p class="rounded-br-3xl">TWO</p>
        <p class="rounded-br-circle">THREE</p>
</div>`}
      />
      <UtilityDoc
        id="roundedbottomleft"
        mainTitle="Border radius bottom left"
        mainDescription="The border-bottom-left-radius CSS property rounds the bottom-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner."
        items={roundedBottomLeft}
        usage={`{ rounded-bl }-{ none | sm | md | lg | xl | 2xl | 3xl | 4xl | 5xl | 6xl | circle }`}
        code={`<div class="bg-maria my-2 w-full">
        <p class="rounded-bl-xl">One</p>
        <p class="rounded-bl-4xl">TWO</p>
        <p class="rounded-bl-circle">THREE</p>
</div>`}
      />
      <UtilityDoc
        id="borderwidth"
        mainTitle="Border width"
        mainDescription="The border-width shorthand CSS property sets the width of an element's border."
        items={borderWidth}
        usage={`{ border }-{ 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 }`}
        code={`<div class="bg-maria my-2 w-full">
        <div class="border-1">One</div>
        <div class="border-4">TWO</div>
        <div class="border-8">THREE</div>
</div>`}
      />
      <UtilityDoc
        id="bordertopwidth"
        mainTitle="Border width top"
        mainDescription="The border-top-width CSS property sets the width of the top border of an element."
        items={borderTopWidth}
        usage={`{ border-t }-{ 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 }`}
        code={`<div class="bg-maria my-2 w-full">
        <div class="border-t-1">One</div>
        <div class="border-t-4">TWO</div>
        <div class="border-t-8">THREE</div>
</div>`}
      />
      <UtilityDoc
        id="borderbottomwidth"
        mainTitle="Border width bottom"
        mainDescription="The border-bottom-width CSS property sets the width of the bottom border of an element."
        items={borderBottomWidth}
        usage={`{ border-b }-{ 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 }`}
        code={`<div class="bg-maria my-2 w-full">
        <div class="border-b-1">One</div>
        <div class="border-b-4">TWO</div>
        <div class="border-b-8">THREE</div>
</div>`}
      />
      <UtilityDoc
        id="borderrightwidth"
        mainTitle="Border width right"
        mainDescription="The border-right-width CSS property sets the width of the right border of an element."
        items={borderRightWidth}
        usage={`{ border-r }-{ 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 }`}
        code={`<div class="bg-maria my-2 w-full">
        <div class="border-r-1">One</div>
        <div class="border-r-4">TWO</div>
        <div class="border-r-8">THREE</div>
</div>`}
      />
      <UtilityDoc
        id="borderleftwidth"
        mainTitle="Border width left"
        mainDescription="The border-left-width CSS property sets the width of the left border of an element."
        items={borderLeftWidth}
        usage={`{ border-l }-{ 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 }`}
        code={`<div class="bg-maria my-2 w-full">
        <div class="border-l-1">One</div>
        <div class="border-l-4">TWO</div>
        <div class="border-l-8">THREE</div>
</div>`}
      />

      <UtilityDoc
        special={true}
        id="borderXwidth"
        mainTitle="Horizontal border width"
        mainDescription="Horizontal border width sets the width of the left and right border of an element equal."
        items={borderXWidth}
        usage={`{ border-x }-{ 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 }`}
        code={`<div class="bg-maria my-2 w-full">
        <div class="border-x-1">One</div>
        <div class="border-x-4">TWO</div>
        <div class="border-x-8">THREE</div>
</div>`}
      />

      <UtilityDoc
        special={true}
        id="borderYwidth"
        mainTitle="Vertical border width"
        mainDescription="Vertical border width sets the width of the top and bottom border of an element equal."
        items={borderYWidth}
        usage={`{ border-y }-{ 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 }`}
        code={`<div class="bg-maria my-2 w-full">
        <div class="border-y-1">One</div>
        <div class="border-y-4">TWO</div>
        <div class="border-y-8">THREE</div>
</div>`}
      />

      <UtilityDoc
        id="bordercolor"
        mainTitle="Border color"
        mainDescription="The border-color shorthand CSS property sets the color of an element's border."
        items={borderColor}
        usage={`{ border }-{ base | inner  | primary | secondary | success | info | warning | danger  | sissa | akram | maria }`}
        code={`<div class="bg-maria my-2 w-full">
        <div class="border-base">One</div>
        <div class="border-inner">TWO</div>
        <div class="border-sissa">THREE</div>
</div>`}
      />

      <UtilityDoc
        id="bordertopcolor"
        mainTitle="Border top color"
        mainDescription="The border-top-color CSS property sets the color of an element's top border. It can also be set with the shorthand CSS properties border-color or border-top."
        items={borderTopColor}
        usage={`{ border-t }-{ base | inner  | primary | secondary | success | info | warning | danger  | sissa | akram | maria }`}
        code={`<div class="bg-maria my-2 w-full">
        <div class="border-t-base">One</div>
        <div class="border-t-inner">TWO</div>
        <div class="border-t-sissa">THREE</div>
</div>`}
      />
      <UtilityDoc
        id="borderbottomcolor"
        mainTitle="Border bottom color"
        mainDescription="The border-bottom-color CSS property sets the color of an element's bottom border. It can also be set with the shorthand CSS properties border-color or border-bottom."
        items={borderBottomColor}
        usage={`{ border-b }-{ base | inner  | primary | secondary | success | info | warning | danger  | sissa | akram | maria }`}
        code={`<div class="bg-maria my-2 w-full">
        <div class="border-b-base">One</div>
        <div class="border-b-inner">TWO</div>
        <div class="border-b-sissa">THREE</div>
</div>`}
      />

      <UtilityDoc
        id="borderrightcolor"
        mainTitle="Border right color"
        mainDescription="The border-right-color CSS property sets the color of an element's right border. It can also be set with the shorthand CSS properties border-color or border-right."
        items={borderRightColor}
        usage={`{ border-r }-{ base | inner  | primary | secondary | success | info | warning | danger  | sissa | akram | maria }`}
        code={`<div class="bg-maria my-2 w-full">
        <div class="border-r-base">One</div>
        <div class="border-r-inner">TWO</div>
        <div class="border-r-sissa">THREE</div>
</div>`}
      />
      <UtilityDoc
        id="borderleftcolor"
        mainTitle="Border left color"
        mainDescription="The border-left-color CSS property sets the color of an element's left border. It can also be set with the shorthand CSS properties border-color or border-left."
        items={borderLeftColor}
        usage={`{ border-l }-{ base | inner  | primary | secondary | success | info | warning | danger  | sissa | akram | maria }`}
        code={`<div class="bg-maria my-2 w-full">
        <div class="border-l-base">One</div>
        <div class="border-l-inner">TWO</div>
        <div class="border-l-sissa">THREE</div>
</div>`}
      />

      <UtilityDoc
        special={true}
        id="borderhorizontalcolor"
        mainTitle="Horizontal border color"
        mainDescription="Horizontal border color sets the color of the left and right border of an element equal."
        items={borderXColor}
        usage={`{ border-x }-{ base | inner  | primary | secondary | success | info | warning | danger  | sissa | akram | maria }`}
        code={`<div class="bg-maria my-2 w-full">
        <div class="border-x-base">One</div>
        <div class="border-x-inner">TWO</div>
        <div class="border-x-sissa">THREE</div>
</div>`}
      />
      <UtilityDoc
        special={true}
        id="borderverticalcolor"
        mainTitle="Vertical border color"
        mainDescription="Vertical border color sets the color of the top and bottom border of an element equal."
        items={borderYColor}
        usage={`{ border-y }-{ base | inner  | primary | secondary | success | info | warning | danger  | sissa | akram | maria }`}
        code={`<div class="bg-maria my-2 w-full">
        <div class="border-y-base">One</div>
        <div class="border-y-inner">TWO</div>
        <div class="border-y-sissa">THREE</div>
</div>`}
      />
      <UtilityDoc
        id="borderstyle"
        mainTitle="Border style"
        mainDescription="The border-style shorthand CSS property sets the line style for all four sides of an element's border."
        items={borderStyle}
        usage={`{ border }-{ none | solid | dashed | dotted | double | groove | ridge | inset | outset }`}
        code={`<div class="bg-maria my-2 w-full">
        <div class="border-solid">One</div>
        <div class="border-groove">TWO</div>
        <div class="border-dashed">THREE</div>
</div>`}
      />
      <UtilityDoc
        id="outlinestyle"
        mainTitle="Outline style"
        mainDescription="The outline-style CSS property sets the style of an element's outline. An outline is a line that is drawn around an element, outside the border."
        items={outlineStyle}
        usage={`{ outline }-{ none | solid | dashed | dotted | double | hidden}`}
        code={`<div class="bg-maria my-2 w-full">
        <div class="outline-solid">One</div>
        <div class="outline-dashed">TWO</div>
        <div class="outline-dotted">THREE</div>
</div>`}
      />
      <UtilityDoc
        id="outlinewidth"
        mainTitle="Outline width"
        mainDescription="The CSS outline-width property sets the thickness of an element's outline. An outline is a line that is drawn around an element, outside the border."
        items={outlineWidth}
        usage={`{ outline }-{ 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 }`}
        code={`<div class="bg-maria my-2 w-full">
        <div class="outline-dashed outline-1">One</div>
        <div class="outline-dashed outline-2">TWO</div>
        <div class="outline-dashed outline-3">THREE</div>
</div>`}
      />
      <UtilityDoc
        id="outlinecolor"
        mainTitle="Outline color"
        mainDescription="The outline-color CSS property sets the color of an element's outline."
        items={outlineColor}
        usage={`{ outline }-{ base | inner  | primary | secondary | success | info | warning | danger  | sissa | akram | maria }`}
        code={`<div class="bg-maria my-2 w-full">
        <div class="outline-solid outline-2 outline-sissa">One</div>
        <div class="outline-solid outline-2 outline-akram">TWO</div>
        <div class="outline-solid outline-2 outline-primary">THREE</div>
</div>`}
      />
      <UtilityDoc
        id="outlineoffset"
        mainTitle="Outline offset"
        mainDescription="The outline-offset CSS property sets the amount of space between an outline and the edge or border of an element."
        items={outlineOffset}
        usage={`{ outline-offset }-{ none | 1 | 2 | 3 |  4 | 5 | 6 | 7 | 8 }`}
        code={`<div class="bg-maria my-2 w-full">
        <div class="outline-solid outline-offset-2 ">One</div>
        <div class="outline-solid outline-offset-5">TWO</div>
        <div class="outline-solid outline-offset-6">THREE</div>
</div>`}
      />
    </>
  );
}

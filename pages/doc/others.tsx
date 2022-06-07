import React from "react";
import Head from "next/head";
import UtilityDoc from "../../Components/subComponents/UtilityDoc";
import ReferencesSideBar from "../../Components/ReferencesSideBar";
import {
  cursor,
  resize,
  userSelect,
  scrollSnapType,
  HorizontalScrollSnapType,
  VerticalScrollSnapType,
  bothScrollSnapType,
  scrollSnapAlign,
  scrollBehavior,
  caretColor,
  accentColor,
  scrollMargin,
  scrollMarginTop,
  scrollMarginRight,
  scrollMarginBottom,
  scrollMarginLeft,
  scrollPadding,
  scrollPaddingTop,
  scrollPaddingRight,
  scrollPaddingBottom,
  scrollPaddingLeft,
  stroke,
  strokeWidth,
  fill,
} from "../../data/utility";

type Props = {};

export default function Others({}: Props) {
  const test = [
    { name: "Cursor", url: "#cursor" },
    { name: "Resize", url: "#resize" },
    { name: "User Select", url: "#userselect" },
    { name: "Scroll snap type", url: "#scrollsnaptype" },
    { name: "Horizontal scroll snap type", url: "#horizontalscrollsnaptype" },
    { name: "Vertical scroll snap type", url: "#verticalscrollsnaptype" },
    { name: "Both scroll snap type", url: "#bothscrollsnaptype" },
    { name: "Scroll snap align", url: "#scrollsnapalign" },
    { name: "Scroll behavior", url: "#scrollbehavior" },
    { name: "Caret color", url: "#caretcolor" },
    { name: "Accent color", url: "#accentcolor" },
    { name: "Scroll margin", url: "#scrollmargin" },
    { name: "Scroll margin top", url: "#scrollmargintop" },
    { name: "Scroll margin right", url: "#scrollmarginright" },
    { name: "Scroll margin bottom", url: "#scrollmarginbottom" },
    { name: "Scroll margin left", url: "#scrollmarginleft" },
    { name: "Scroll padding", url: "#scrollpadding" },
    { name: "Scroll padding top", url: "#scrollpaddingtop" },
    { name: "Scroll padding right", url: "#scrollpaddingright" },
    { name: "Scroll padding bottom", url: "#scrollpaddingbottom" },
    { name: "Scroll padding left", url: "#scrollpaddingleft" },
    { name: "Stroke", url: "#stroke" },
    { name: "Stroke width", url: "#strokewidth" },
  ];
  return (
    <div className="w-100-100 page px-1 md:px-0 overflowY-auto scroll-smooth ">
      <Head>
        <title>Others - AkramCSS</title>
        <meta
          name="description"
          content="Others page presents all the rest utility classes of AkramCSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="container" className="display-flex flex-row w-100-100">
        <div className="md:px-2 max-w-100-100 pb-4 ">
          <p id="nouhack" className="text-4xl font-bold ls-tighter">
            Others
          </p>

          <UtilityDoc
            id="cursor"
            mainTitle="Cursor"
            mainDescription="The cursor CSS property sets the mouse cursor, if any, to show when the mouse pointer is over an element.The cursor setting should inform users of the mouse operations that can be performed at the current location, including: text selection, activating help or context menus, copying content, resizing tables, and so on. You can specify either the type of cursor using a keyword, or load a specific icon to use (with optional fallback images and mandatory keyword as a final fallback"
            items={cursor}
            usage={`{ cursor }-{ none | auto | default | pointer | text | wait | help | move | n-resize | ne-resize | e-resize | se-resize | s-resize | sw-resize | w-resize | nw-resize | crosshair | vertical-text | cell | context-menu | alias | copy | progress | no-drop | not-allowed | col-resize | row-resize | all-scroll | zoom-in | zoom-out | grab | grabbing }`}
            code={`<div class="bg-akram w-100-100">
            <div class="cursor-default"></div>
            <div class="cursor-text"></div>
            <div class="cursor-move"></div>
</div>`}
          />
          <UtilityDoc
            id="resize"
            mainTitle="Resize"
            mainDescription="The resize CSS property sets whether an element is resizable, and if so, in which directions."
            items={resize}
            usage={`{ resize }-{ none | x | y | both }`}
            code={`<div class="bg-akram w-100-100">
            <textarea class="resize-x"></textarea>
            <textarea class="resize-y"></textarea>
            <textarea class="resize-none"></textarea>
            <textarea class="resize-both"></textarea>
</div>`}
          />
          <UtilityDoc
            id="userselect"
            mainTitle="User select"
            mainDescription="The user-select CSS property controls whether the user can select text. This doesn't have any effect on content loaded as part of a browser's user interface (its chrome), except in textboxes."
            items={userSelect}
            usage={`{ select }-{ none | text | all | auto }`}
            code={`<div class="bg-akram w-100-100">
            <p class="select-none">FIRST</p>
            <p class="select-text">SECOND</p>
            <p class="select-all">THIRD</p>
            <p class="select-auto">FOURTH</p>
</div>`}
          />
          <UtilityDoc
            id="userselect"
            mainTitle="User select"
            mainDescription="The user-select CSS property controls whether the user can select text. This doesn't have any effect on content loaded as part of a browser's user interface (its chrome), except in textboxes."
            items={userSelect}
            usage={`{ select }-{ none | text | all | auto }`}
            code={`<div class="bg-akram w-100-100">
            <p class="select-none">FIRST</p>
            <p class="select-text">SECOND</p>
            <p class="select-all">THIRD</p>
            <p class="select-auto">FOURTH</p>
</div>`}
          />
          <UtilityDoc
            id="scrollsnaptype"
            mainTitle="Scroll snap type"
            mainDescription="The scroll-snap-type CSS property sets how strictly snap points are enforced on the scroll container in case there is one."
            items={scrollSnapType}
            usage={`{ snap }-{ none }`}
            code={`<div class="bg-akram overflowX-scroll w-100-100 snap-none">
            <p class="w-full">FIRST</p>
            <p class="w-full">SECOND</p>
            <p class="w-full">THIRD</p>
</div>`}
          />
          <UtilityDoc
            id="horizontalscrollsnaptype"
            mainTitle="Horizontal scroll snap type"
            mainDescription="The scroll-snap-type-x CSS property defines how strictly snap points are enforced on the horizontal axis of the scroll container in case there is one."
            items={HorizontalScrollSnapType}
            usage={`{ snap-x }-{ none | mandatory | proximity }`}
            code={`<div class="bg-akram overflowX-scroll w-100-100 snap-x-mandatory">
            <p class="w-full">FIRST</p>
            <p class="w-full">SECOND</p>
            <p class="w-full">THIRD</p>
</div>`}
          />
          <UtilityDoc
            id="verticalscrollsnaptype"
            mainTitle="Vertical scroll snap type"
            mainDescription="The scroll-snap-type-y CSS property defines how strictly snap points are enforced on the vertical axis of the scroll container in case there is one."
            items={VerticalScrollSnapType}
            usage={`{ snap-y }-{ none | mandatory | proximity }`}
            code={`<div class="bg-akram overflowY-scroll w-100-100 snap-y-mandatory">
            <p class="h-full">FIRST</p>
            <p class="h-full">SECOND</p>
            <p class="h-full">THIRD</p>
</div>`}
          />
          <UtilityDoc
            id="bothscrollsnaptype"
            mainTitle="Both scroll snap type"
            mainDescription="The scroll container snaps to snap positions in both of its axes independently (potentially snapping to different elements in each axis)."
            items={bothScrollSnapType}
            usage={`{ snap-both }-{ none | mandatory | proximity }`}
            code={`<div class="bg-akram overflow-scroll w-100-100 snap-both-mandatory">
            <p class="w-full h-full">FIRST</p>
            <p class="w-full h-full">SECOND</p>
            <p class="w-full h-full">THIRD</p>
</div>`}
          />
          <UtilityDoc
            id="scrollsnapalign"
            mainTitle="Scroll snap align"
            mainDescription="The scroll-snap-align property specifies the box's snap position as an alignment of its snap area (as the alignment subject) within its snap container's snapport (as the alignment container). The two values specify the snapping alignment in the block axis and inline axis, respectively. If only one value is specified, the second value defaults to the same value."
            items={scrollSnapAlign}
            usage={`{ snap-align }-{ none | start | end | center }`}
            code={`<div class="bg-akram overflowX-scroll overflowX-scroll w-100-100 snap-x-mendatory">
            <p class="w-full h-full snap-align-center">FIRST</p>
            <p class="w-full h-full snap-align-start">SECOND</p>
            <p class="w-full h-full snap-align-end">THIRD</p>
</div>`}
          />
          <UtilityDoc
            id="scrollbehavior"
            mainTitle="Scroll behavior"
            mainDescription="The scroll-behavior CSS property sets the behavior for a scrolling box when scrolling is triggered by the navigation or CSSOM scrolling APIs."
            items={scrollBehavior}
            usage={`{ scroll }-{ auto | smooth }`}
            code={`<div class="bg-akram ">
            <div className="scroll-smooth">FIRST</div>
            <div className="scroll-auto">FIRST</div>
</div>`}
          />
          <UtilityDoc
            id="caretcolor"
            mainTitle="Caret color"
            mainDescription="The caret-color CSS property sets the color of the insertion caret, the visible marker where the next character typed will be inserted. This is sometimes referred to as the text input cursor. The caret appears in elements such as <input> or those with the contenteditable attribute. The caret is typically a thin vertical line that flashes to help make it more noticeable. By default, it is black, but its color can be altered with this property."
            items={caretColor}
            usage={`{ caret }-{ inner | base | maria | sissa | akram | senary }`}
            code={`<div class="bg-akram w-100-100">
            <textarea class="caret-sissa"></textarea>
            <textarea class="caret-maria"></textarea>
            <textarea class="caret-akram"></textarea>
</div>`}
          />
          <UtilityDoc
            id="accentcolor"
            mainTitle="Accent color"
            mainDescription="The accent-color CSS property sets the accent color for user-interface controls generated by some elements."
            items={accentColor}
            usage={`{ accent }-{ inner | base | maria | sissa | akram | senary }`}
            code={`<div class="bg-akram w-100-100">
            <input type="checkbox" class="bg-akram" checked />
            <input type="checkbox" class="bg-inner" checked />
            <input type="checkbox" class="bg-sissa" checked />
            <input type="checkbox" class="bg-maria" checked />
</div>`}
          />
          <UtilityDoc
            id="scrollmargin"
            mainTitle="Scroll margin"
            mainDescription="The scroll-margin shorthand property sets all of the scroll margins of an element at once, assigning values much like the margin property does for margins of an element."
            items={scrollMargin}
            usage={`{ scroll-m }-{ remsizes }`}
            code={`<div class="bg-akram w-100-100 scroll-m-3">HII</div>`}
          />
          <UtilityDoc
            id="scrollmargintop"
            mainTitle="Scroll margin top"
            mainDescription="The scroll-margin-top property defines the top margin of the scroll snap area for the scroll container."
            items={scrollMarginTop}
            usage={`{ scroll-mt }-{ remsizes }`}
            code={`<div class="bg-akram w-100-100 scroll-mt-3">HII</div>`}
          />
          <UtilityDoc
            id="scrollmarginright"
            mainTitle="Scroll margin right"
            mainDescription="The scroll-margin-right property defines the right margin of the scroll snap area for the scroll container."
            items={scrollMarginRight}
            usage={`{ scroll-mr }-{ remsizes }`}
            code={`<div class="bg-akram w-100-100 scroll-mr-3">HII</div>`}
          />
          <UtilityDoc
            id="scrollmarginbottom"
            mainTitle="Scroll margin bottom"
            mainDescription="The scroll-margin-bottom property defines the bottom margin of the scroll snap area for the scroll container."
            items={scrollMarginBottom}
            usage={`{ scroll-mb }-{ remsizes }`}
            code={`<div class="bg-akram w-100-100 scroll-mb-3">HII</div>`}
          />
          <UtilityDoc
            id="scrollmarginleft"
            mainTitle="Scroll margin left"
            mainDescription="The scroll-margin-left property defines the left margin of the scroll snap area for the scroll container."
            items={scrollMarginLeft}
            usage={`{ scroll-ml }-{ remsizes }`}
            code={`<div class="bg-akram w-100-100 scroll-ml-3">HII</div>`}
          />
          <UtilityDoc
            id="scrollpadding"
            mainTitle="Scroll padding"
            mainDescription="The scroll-padding shorthand property sets all of the scroll padding of an element at once, assigning values much like the padding property does for paddings of an element."
            items={scrollPadding}
            usage={`{ scroll-p }-{ remsizes }`}
            code={`<div class="bg-akram w-100-100 scroll-p-3">HII</div>`}
          />
          <UtilityDoc
            id="scrollpaddingtop"
            mainTitle="Scroll padding top"
            mainDescription="The scroll-padding-top property defines the top padding of the scroll snap area for the scroll container."
            items={scrollPaddingTop}
            usage={`{ scroll-pt }-{ remsizes }`}
            code={`<div class="bg-akram w-100-100 scroll-pt-3">HII</div>`}
          />
          <UtilityDoc
            id="scrollpaddingright"
            mainTitle="Scroll padding right"
            mainDescription="The scroll-padding-right property defines the right padding of the scroll snap area for the scroll container."
            items={scrollPaddingRight}
            usage={`{ scroll-pr }-{ remsizes }`}
            code={`<div class="bg-akram w-100-100 scroll-pr-3">HII</div>`}
          />
          <UtilityDoc
            id="scrollpaddingbottom"
            mainTitle="Scroll padding bottom"
            mainDescription="The scroll-padding-bottom property defines the bottom padding of the scroll snap area for the scroll container."
            items={scrollPaddingBottom}
            usage={`{ scroll-pb }-{ remsizes }`}
            code={`<div class="bg-akram w-100-100 scroll-pb-3">HII</div>`}
          />
          <UtilityDoc
            id="scrollpaddingleft"
            mainTitle="Scroll padding left"
            mainDescription="The scroll-padding-left property defines the left padding of the scroll snap area for the scroll container."
            items={scrollPaddingLeft}
            usage={`{ scroll-pl }-{ remsizes }`}
            code={`<div class="bg-akram w-100-100 scroll-pl-3">HII</div>`}
          />
          <UtilityDoc
            id="stroke"
            mainTitle="Stroke"
            mainDescription="The stroke property in CSS is for adding a border to SVG shapes."
            items={stroke}
            usage={`{ stroke }-{ inner | base | sissa | akram | maria | senary }`}
            code={`<svg class="stroke-sissa">
  <!-- ... -->
</svg>`}
          />
          <UtilityDoc
            id="strokewidth"
            mainTitle="Stroke width"
            mainDescription="The stroke property in CSS is for adding a border to SVG shapes."
            items={strokeWidth}
            usage={`{ stroke-w }-{ none | thin | normal | thick }`}
            code={`<svg class="stroke-sissa stroke-w-thick">
  <!-- ... -->
</svg>
<svg class="stroke-sissa stroke-w-thick">
  <!-- ... -->
</svg>
`}
          />
          <UtilityDoc
            id="fill"
            mainTitle="Fill"
            mainDescription="The stroke property in CSS is for adding a border to SVG shapes."
            items={fill}
            usage={`{ fill }-{ inner | base | akram | sissa | maria | senary }`}
            code={`<svg class="stroke-sissa stroke-w-thick fill-maria">
  <!-- ... -->
</svg>
<svg class="stroke-sissa stroke-w-thick">
  <!-- ... -->
</svg>
`}
          />
        </div>
        <ReferencesSideBar items={test} />
      </div>
    </div>
  );
}

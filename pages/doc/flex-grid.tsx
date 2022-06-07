import React from "react";
import Head from "next/head";
import UtilityDoc from "../../Components/subComponents/UtilityDoc";
import ReferencesSideBar from "../../Components/ReferencesSideBar";
import {
  flexBasis,
  flexDirection,
  flexWrap,
  flex,
  flexGrow,
  flexShrink,
  order,
  gridTemplateColumn,
  gridColumn,
  gridColumnStart,
  gridColumnEnd,
  gridtemplateRow,
  gridRow,
  gridRowStart,
  gridRowEnd,
  gridAutoFlow,
  gap,
  columnGap,
  rowGap,
  justifyContent,
  justifyItem,
  justifySelf,
  alignContent,
  alignItem,
  alignSelf,
  placeContent,
  placeItem,
  placeSelf,
} from "../../data/utility";

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

          <UtilityDoc
            id="flexbasis"
            mainTitle="Flex basis"
            mainDescription="The flex-basis CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with box-sizing."
            items={flexBasis}
            usage={`{ basis }-{ percentagesizes }`}
            code={`<div class="bg-akram w-100-100 display-flex flex-row">
            <div class="basis-20-100"></div>
            <div class="basis-30-100"></div>
            <div class="basis-50-100"></div>
</div>`}
          />
          <UtilityDoc
            id="flexdirection"
            mainTitle="Flex direction"
            mainDescription="The flex-direction CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed)."
            items={flexDirection}
            usage={`{ flex }-{ row | row-reverse | column | column-reverse }`}
            code={`<div class="bg-maria display-flex flex-row">
            <div class="bg-akram h-10">i love <br>Akramcss</div>
            <div class="bg-senary h-10">i love <br>Akramcss</div>
</div>`}
          />

          <UtilityDoc
            id="flexwrap"
            mainTitle="Flex wrap"
            mainDescription="The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked."
            items={flexWrap}
            usage={`{ flex }-{ nowrap | wrap | wrap-reverse }`}
            code={`<div class="bg-maria display-flex flex-wrap">
            <div class="">FIRST</div>
            <div class="">SECOND</div>
            <div class="">THIRD</div>
</div>`}
          />
          <UtilityDoc
            id="flex"
            mainTitle="Flex"
            mainDescription="The flex CSS shorthand property sets how a flex item will grow or shrink to fit the space available in its flex container."
            items={flex}
            usage={`{ flex }-{ none | initial | auto }`}
            code={`<div class="bg-primary">
            <div class='flex-none'>FIRST</div>
            <div class='flex-initial'>SECOND</div>
            <div class='flex-auto'>THIRD</div>
</div>`}
          />
          <UtilityDoc
            id="flexgrow"
            mainTitle="Flex grow"
            mainDescription="The flex-grow CSS property sets the flex grow factor of a flex item's main size."
            items={flexGrow}
            usage={`{ grow }-{ 0 | 1 }`}
            code={`<div class="bg-primary display-flex">
            <div class="grow-0">FIRST </div>
            <div class="grow-1">FIRST </div>
</div>`}
          />
          <UtilityDoc
            id="flexshrink"
            mainTitle="Flex shrink"
            mainDescription="The flex-shrink CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to flex-shrink.In use, flex-shrink is used alongside the other flex properties flex-grow and flex-basis, and normally defined using the flex shorthand."
            items={flexShrink}
            usage={`{ shrink }-{ 0 | 1 }`}
            code={`<div class="bg-primary display-flex">
            <div class="shrink-0">FIRST </div>
            <div class="shrink-1">FIRST </div>
</div>`}
          />

          <UtilityDoc
            id="order"
            mainTitle="Order"
            mainDescription="New layout methods such as Flexbox and Grid bring with them the possibility of controlling the order of content. In this article, we will take a look at ways in which you can change the visual order of your content when using Flexbox. We will also consider the implications of reordering items from an accessibility point of view."
            items={order}
            usage={`{ order }-{ first | last | none | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16}`}
            code={`<div class="bg-primary display-flex">
            <div class="order-first">FIRST </div>
            <div class="order-1">FIRST </div>
            <div class="order-2">SECOND </div>
            <div class="order-3">THIRD </div>
</div>`}
          />

          <UtilityDoc
            id="gridtemplatecolumns"
            mainTitle="Grid template columns"
            mainDescription="The grid-template-columns CSS property defines the line names and track sizing functions of the grid columns.    by using c-1 , c-2 .... you are specifying the columns in a grid layout."
            items={gridTemplateColumn}
            usage={`{ grid }-{ c-1 | c-2 | c-3 | c-4 | c-5 | c-6 | c-7 | c-8 | c-9 | c-10 | c-11 | c-12 | c-13 | c-14 | c-15 | c-16 }`}
            code={`<div class="display-grid grid-c-4 bg-primary">
            <div class="bg-inner"></div>
            <div class="bg-akram"></div>
            <div class="bg-sissa"></div>
            <div class="bg-maria"></div>
            <div class="bg-senary"></div>
            <div class="bg-base"></div>
</div>`}
          />

          <UtilityDoc
            id="gridcolumn"
            mainTitle="Grid column"
            mainDescription="The grid-column CSS shorthand property specifies a grid item's size and location within a grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area."
            items={gridColumn}
            usage={`{ col }-{ auto | span-1 | span-2 | span-3 | span-4 | span-5 | span-6 | span-7 | span-8 | span-9 | span-10 | span-11 | span-12 | span-13 | span-14 | span-15 | span-16 }`}
            code={`<div class="bg-primary display-grid grid-c-3">
            <div class="col-auto"></div>
            <div class="col-span-1"></div>
            <div class="col-span-4"></div>
            <div class="col-span-5"></div>
</div>`}
          />
          <UtilityDoc
            id="gridcolumnstart"
            mainTitle="Grid column start"
            mainDescription="The grid-column-start CSS property specifies a grid item's start position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement. This start position defines the block-start edge of the grid area."
            items={gridColumnStart}
            usage={`{ col }-{ start-1 | start-2 | start-3 | start-4 | start-5 | start-6 | start-7 | start-8 | start-9 | start-10 | start-11 | start-12 | start-13 | start-14 | start-15 | start-16 |start-17 | start-auto }`}
            code={`<div class="bg-primary display-grid grid-c-3">
            <div class="col-start-1"></div>
            <div class="col-start-3"></div>
            <div class="col-start-2"></div>
</div>`}
          />
          <UtilityDoc
            id="gridcolumnend"
            mainTitle="Grid column end"
            mainDescription="The grid-column-end CSS property specifies a grid item's end position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the block-end edge of its grid area."
            items={gridColumnEnd}
            usage={`{ col }-{ end-1 | end-2 | end-3 | end-4 | end-5 | end-6 | end-7 | end-8 | end-9 | end-10 | end-11 | end-12 | end-13 | end-14 | end-15 | end-16 |end-17 | end-auto }`}
            code={`<div class="bg-primary display-grid grid-c-3">
            <div class="col-end-1"></div>
            <div class="col-end-3"></div>
            <div class="col-end-2"></div>
</div>`}
          />

          <UtilityDoc
            id="gridtemplaterows"
            mainTitle="Grid template rows"
            mainDescription="The grid-template-rows CSS property defines the line names and track sizing functions of the grid rows."
            items={gridtemplateRow}
            usage={`{ grid }-{ r-1 | r-2 | r-3 | r-4 | r-5 | r-6 | r-7 | r-8 | r-9 | r-10 | r-11 | r-12 | r-13 | r-14 | r-15 | r-16 }`}
            code={`<div class="display-grid grid-r-4 bg-primary">
            <div class="bg-inner"></div>
            <div class="bg-akram"></div>
            <div class="bg-sissa"></div>
            <div class="bg-maria"></div>
            <div class="bg-senary"></div>
            <div class="bg-base"></div>
</div>`}
          />

          <UtilityDoc
            id="gridrow"
            mainTitle="Grid row"
            mainDescription="The grid-row CSS shorthand property specifies a grid item's size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area."
            items={gridRow}
            usage={`{ row }-{ auto | span-1 | span-2 | span-3 | span-4 | span-5 | span-6 | span-7 | span-8 | span-9 | span-10 | span-11 | span-12 | span-13 | span-14 | span-15 | span-16 }`}
            code={`<div class="bg-primary display-grid grid-r-3">
            <div class="row-auto"></div>
            <div class="row-span-1"></div>
            <div class="row-span-4"></div>
            <div class="row-span-5"></div>
</div>`}
          />
          <UtilityDoc
            id="gridrowstart"
            mainTitle="Grid row start"
            mainDescription="The grid-row-start CSS property specifies a grid item's start position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start edge of its grid area."
            items={gridRowStart}
            usage={`{ row }-{ start-1 | start-2 | start-3 | start-4 | start-5 | start-6 | start-7 | start-8 | start-9 | start-10 | start-11 | start-12 | start-13 | start-14 | start-15 | start-16 |start-17 | start-auto }`}
            code={`<div class="bg-primary display-grid grid-r-3">
            <div class="col-start-1"></div>
            <div class="col-start-3"></div>
            <div class="col-start-2"></div>
</div>`}
          />
          <UtilityDoc
            id="gridrowend"
            mainTitle="Grid row end"
            mainDescription="The grid-row-end CSS property specifies a grid item's end position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-end edge of its grid area."
            items={gridRowEnd}
            usage={`{ row }-{ end-1 | end-2 | end-3 | end-4 | end-5 | end-6 | end-7 | end-8 | end-9 | end-10 | end-11 | end-12 | end-13 | end-14 | end-15 | end-16 |end-17 | end-auto }`}
            code={`<div class="bg-primary display-grid grid-r-3">
            <div class="row-end-1"></div>
            <div class="row-end-3"></div>
            <div class="row-end-2"></div>
</div>`}
          />
          <UtilityDoc
            id="gridautoflow"
            mainTitle="Grid auto flow"
            mainDescription="The grid-auto-flow CSS property controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid."
            items={gridAutoFlow}
            usage={`{ grid-flow }-{ row | column | row-dense | col-dense }`}
            code={`<div class="bg-primary display-grid grid-flow-row">
            <div class="row-end-1"></div>
            <div class="row-end-3"></div>
            <div class="row-end-2"></div>
</div>`}
          />
          <UtilityDoc
            id="gap"
            mainTitle="Gap"
            mainDescription="The gap CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for row-gap and column-gap."
            items={gap}
            usage={`{ gap }-{ remsizes }`}
            code={`<div class="bg-primary display-grid grid-c-2 gap-2 ">
            <div class="text-inner">FIRST</div>
            <div class="bg-akram">SECOND</div>
            <div class="bg-senary">THIRD</div>
</div>`}
          />
          <UtilityDoc
            id="columngap"
            mainTitle="Column gap"
            mainDescription="The column-gap CSS property sets the size of the gap (gutter) between an element's columns."
            items={columnGap}
            usage={`{ gap-x }-{ remsizes }`}
            code={`<div class="bg-primary display-grid grid-c-2 gap-x-2 ">
            <div class="text-inner">FIRST</div>
            <div class="bg-akram">SECOND</div>
            <div class="bg-senary">THIRD</div>
</div>`}
          />
          <UtilityDoc
            id="rowgap"
            mainTitle="Row gap"
            mainDescription="The row-gap CSS property sets the size of the gap (gutter) between an element's rows."
            items={rowGap}
            usage={`{ gap-y }-{ remsizes }`}
            code={`<div class="bg-primary display-grid grid-c-2 gap-y-2 ">
            <div class="text-inner">FIRST</div>
            <div class="bg-akram">SECOND</div>
            <div class="bg-senary">THIRD</div>
</div>`}
          />
          <UtilityDoc
            id="justifycontent"
            mainTitle="Justify content"
            mainDescription="The CSS justify-content property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container."
            items={justifyContent}
            usage={`{ justifyC }-{ start | end | center | space-between | space-around | space-evenly }`}
            code={`<div class="bg-primary display-flex justifyC-center ">
            <div class="text-inner">FIRST</div>
            <div class="bg-akram">SECOND</div>
            <div class="bg-senary">THIRD</div>
</div>`}
          />
          <UtilityDoc
            id="justifyitems"
            mainTitle="Justify items"
            mainDescription="The CSS justify-items property defines the default justify-self for all items of the box, giving them all a default way of justifying each box along the appropriate axis."
            items={justifyItem}
            usage={`{ justifyI }-{ stretch | start | end | center }`}
            code={`<div class="bg-primary display-grid justifyI-center ">
            <div class="text-inner">FIRST</div>
            <div class="bg-akram">SECOND</div>
            <div class="bg-senary">THIRD</div>
</div>`}
          />
          <UtilityDoc
            id="justifyself"
            mainTitle="Justify self"
            mainDescription="The CSS justify-self property sets the way a box is justified inside its alignment container along the appropriate axis."
            items={justifySelf}
            usage={`{ justifyS }-{ auto | start | end | center | stretch }`}
            code={`<div class="bg-primary display-grid justifyI-center ">
            <div class="text-inner justifyS-start">FIRST</div>
            <div class="bg-akram justifyS-end">SECOND</div>
            <div class="bg-senary justifyS-center">THIRD</div>
</div>`}
          />
          <UtilityDoc
            id="aligncontent"
            mainTitle="Align content"
            mainDescription="The CSS justify-content property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container."
            items={alignContent}
            usage={`{ alignC }-{ start | end | center | space-between | space-around | space-evenly }`}
            code={`<div class="bg-primary display-grid alignC-center ">
            <div class="text-inner">FIRST</div>
            <div class="bg-akram">SECOND</div>
            <div class="bg-senary">THIRD</div>
</div>`}
          />
          <UtilityDoc
            id="alignitems"
            mainTitle="Align items"
            mainDescription="The CSS justify-items property defines the default justify-self for all items of the box, giving them all a default way of justifying each box along the appropriate axis."
            items={alignItem}
            usage={`{ alignI }-{ stretch | start | end | center | baseline }`}
            code={`<div class="bg-primary display-flex alignI-center ">
            <div class="text-inner">FIRST</div>
            <div class="bg-akram">SECOND</div>
            <div class="bg-senary">THIRD</div>
</div>`}
          />
          <UtilityDoc
            id="alignself"
            mainTitle="Align self"
            mainDescription="The CSS justify-self property sets the way a box is justified inside its alignment container along the appropriate axis."
            items={alignSelf}
            usage={`{ alignS }-{ auto | start | end | center | stretch | baseline }`}
            code={`<div class="bg-primary display-flex">
            <div class="text-inner alignS-start">FIRST</div>
            <div class="bg-akram alignS-end">SECOND</div>
            <div class="bg-senary alignS-center">THIRD</div>
</div>`}
          />

          <UtilityDoc
            id="placecontent"
            mainTitle="Place content"
            mainDescription="The place-content CSS shorthand property allows you to align content along both the block and inline directions at once (i.e. the align-content and justify-content properties) in a relevant layout system such as Grid or Flexbox."
            items={placeContent}
            usage={`{ placeC }-{ start | end | center | space-between | space-around | space-evenly }`}
            code={`<div class="bg-primary display-grid placeC-center ">
            <div class="text-inner">FIRST</div>
            <div class="bg-akram">SECOND</div>
            <div class="bg-senary">THIRD</div>
</div>`}
          />
          <UtilityDoc
            id="placeItems"
            mainTitle="Place items"
            mainDescription="The CSS place-items shorthand property allows you to align items along both the block and inline directions at once (i.e. the align-items and justify-items properties) in a relevant layout system such as Grid or Flexbox. If the second value is not set, the first value is also used for it."
            items={placeItem}
            usage={`{ placeI}-{ stretch | start | end | center }`}
            code={`<div class="bg-primary display-grid placeI-start">
            <div class="text-inner">FIRST</div>
            <div class="bg-akram">SECOND</div>
            <div class="bg-senary">THIRD</div>
</div>`}
          />
          <UtilityDoc
            id="placeself"
            mainTitle="Place self"
            mainDescription="The place-self CSS shorthand property allows you to align an individual item in both the block and inline directions at once (i.e. the align-self and justify-self properties) in a relevant layout system such as Grid or Flexbox. If the second value is not present, the first value is also used for it."
            items={placeSelf}
            usage={`{ placeS}-{ auto | start | end | center | stretch }`}
            code={`<div class="bg-primary display-grid justifyI-center ">
            <div class="text-inner placeS-start">FIRST</div>
            <div class="bg-akram placeS-end">SECOND</div>
            <div class="bg-senary placeS-center">THIRD</div>
</div>`}
          />
        </div>
        <ReferencesSideBar items={test} />
      </div>
    </div>
  );
}

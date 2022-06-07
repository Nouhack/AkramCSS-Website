import React from "react";
import Head from "next/head";
import UtilityDoc from "../../Components/subComponents/UtilityDoc";
import ReferencesSideBar from "../../Components/ReferencesSideBar";
import {
  aspectratio,
  boxDecorationBreak,
  display,
  float,
  clear,
  objectFit,
  objectPosition,
  overflow,
  overflowX,
  overflowY,
  overScrollBehavior,
  overScrollBehaviorX,
  overScrollBehaviorY,
  position,
  top,
  right,
  bottom,
  left,
} from "../../data/utility";

type Props = {};

export default function Layout({}: Props) {
  const test = [
    { name: "Aspect ratio", url: "#aspectratio" },
    { name: "Box decoration break", url: "#boxdecorationbreak" },
    { name: "Display", url: "#display" },
    { name: "Float", url: "#float" },
    { name: "Clear", url: "#clear" },
    { name: "Object fit", url: "#objectfit" },
    { name: "Object position", url: "#objectposition" },
    { name: "Overflow", url: "#overflow" },
    { name: "Horizontal Overflow", url: "#overflowx" },
    { name: "Vertical Overflow", url: "#overflowy" },
    { name: "Over scroll behavior", url: "#overscrollbehavior" },
    { name: "Horizontal over scroll behavior", url: "#overscrollx" },
    { name: "Vertical over scroll behavior", url: "#overscrolly" },
    { name: "Position", url: "#position" },
    { name: "Top", url: "#top" },
    { name: "Right", url: "#right" },
    { name: "Left", url: "#left" },
    { name: "Bottom", url: "#bottom" },
  ];
  return (
    <div className="w-100-100 page px-1 md:px-0 overflowY-auto scroll-smooth ">
      <Head>
        <title>Layout - AkramCSS</title>
        <meta
          name="description"
          content="Layout page presents all the layout utility classes of AkramCSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="container" className="display-flex flex-row w-100-100">
        <div className="md:px-2 max-w-100-100 pb-4 ">
          <p id="nouhack" className="text-4xl font-bold ls-tighter">
            Layout
          </p>

          <UtilityDoc
            id="aspectratio"
            mainTitle="Aspect ratio"
            mainDescription="The aspect-ratio CSS property sets a preferred aspect ratio for the box, which will be used in the calculation of auto sizes and some other layout functions."
            items={aspectratio}
            usage={`{ aspect }-{ auto | square | 16 | 0 }`}
            code={`<div class="bg-akram w-100-100">
            <img class="aspect-auto"/>
            <img class="aspect-square"/>
            <img class="aspect-16"/>
            <img class="aspect-0"/>
</div>`}
          />
          <UtilityDoc
            id="boxdecorationbreak"
            mainTitle="Box decoration break"
            mainDescription="The box-decoration-break CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages."
            items={boxDecorationBreak}
            usage={`{ boxD }-{ clone | slice }`}
            code={`<div class="bg-maria display-flex flex-row">
            <p class="boxD-clone">i love <br>Akramcss</p>
            <p class="boxD-slice">i love <br>Akramcss</p>
</div>`}
          />

          <UtilityDoc
            id="display"
            mainTitle="Display"
            mainDescription="The display CSS property sets whether an element is treated as a block or inline element and the layout used for its children, such as flow layout, grid or flex.Formally, the display property sets an element's inner and outer display types. The outer type sets an element's participation in flow layout; the inner type sets the layout of children. Some values of display are fully defined in their own individual specifications; for example the detail of what happens when display: flex is declared is defined in the CSS Flexible Box Model specification."
            items={display}
            usage={`{ display }-{ block | inline-block | inline | flex | inline-flex | table | inline-table | table-caption | table-cell | table-column | table-column-group | table-footer-group | table-row | table-root | grid | inline-grid | contents | list-item | none }`}
            code={`<div class="bg-maria display-flex flex-row">
            <div class="display-flex">FIRST</div>
            <div class="display-grid">SECOND</div>
            <div class="display-table">THIRD</div>
</div>`}
          />
          <UtilityDoc
            id="float"
            mainTitle="Float"
            mainDescription="The float CSS property places an element on the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the page, though still remaining a part of the flow (in contrast to absolute positioning)."
            items={float}
            usage={`{ float }-{ left | right | none }`}
            code={`<div class="bg-primary">
            <div class="">
                <img class="float-left" src="/static/images/akram.png" /> 
                <p class="text-akram">AkramCSS</p>
            </div>
            <div class="transition-color duration-slow ease-in-out delay-fase">
                <img class="float-right" src="/static/images/akram.png" />
                <p class="text-akram">AkramCSS</p> 
            </div>
            <div class="transition-shadow duration-default etep-end delay-fase">
                <img class="float-none" src="/static/images/akram.png" />
                <p class="text-akram">AkramCSS</p>
            </div>
</div>`}
          />
          <UtilityDoc
            id="clear"
            mainTitle="Clear"
            mainDescription="The clear CSS property sets whether an element must be moved below (cleared) floating elements that precede it. The clear property applies to floating and non-floating elements."
            items={clear}
            usage={`{ clear }-{ left | right | both | none }`}
            code={`<div class="bg-primary">
            <div class="">
                <img class="clear-right" src="/static/images/akram.png" />
                <p class="text-akram">AkramCSS</p> 
            </div>
            <div class="transition-color duration-slow ease-in-out delay-fase">
                <img class="clear-right" src="/static/images/akram.png" />
                <p class="text-akram">AkramCSS</p> 
            </div>
            <div class="transition-shadow duration-default etep-end delay-fase">
                <img class="clear-none" src="/static/images/akram.png" />
                <p class="text-akram">AkramCSS</p>
            </div>
            <div class="transition-shadow duration-default etep-end delay-fase">
                <img class="clear-both" src="/static/images/akram.png" />
                <p class="text-akram">AkramCSS</p>
            </div>
</div>`}
          />

          <UtilityDoc
            id="objectfit"
            mainTitle="Object fit"
            mainDescription="The object-fit CSS property sets how the content of a replaced element, such as an <img> or <video>, should be resized to fit its container.You can alter the alignment of the replaced element's content object within the element's box using the object-position property."
            items={objectFit}
            usage={`{ objectF }-{ fill | contain | cover | none |scale-down }`}
            code={`<div class="bg-primary">
            <div class="">
                <img class="objectF-fill" src="/static/images/akram.png" />
                <img class="objectF-contain" src="/static/images/akram.png" />
                <img class="objectF-cover" src="/static/images/akram.png" />
                <img class="objectF-none" src="/static/images/akram.png" />
                <img class="objectF-scale-down" src="/static/images/akram.png" />
            </div>
</div>`}
          />

          <UtilityDoc
            id="objectposition"
            mainTitle="Object position"
            mainDescription="The object-position CSS property specifies the alignment of the selected replaced element's contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.You can adjust how the replaced element's object's intrinsic size (that is, its natural size) is adjusted to fit within the element's box using the object-fit property."
            items={objectPosition}
            usage={`{ objectP }-{ bottom | center | left | right | top | left-bottom | left-top | right-bottom | right-top }`}
            code={`<div class="bg-primary">
            <div class="">
                <img class="objectF-none objectP-center" src="/static/images/akram.png" />
                <img class="objectF-none objectP-right" src="/static/images/akram.png" />
                <img class="objectF-none objectP-left-bottom" src="/static/images/akram.png" />
                <img class="objectF-none objectP-left" src="/static/images/akram.png" />
                <img class="objectF-none objectP-right-bottom" src="/static/images/akram.png" />
            </div>
</div>`}
          />

          <UtilityDoc
            id="overflow"
            mainTitle="Overflow"
            mainDescription="The overflow CSS shorthand property sets the desired behavior for an element's overflow — i.e. when an element's content is too big to fit in its block formatting context — in both directions."
            items={overflow}
            usage={`{ overflow }-{ auto | hidden | visible | scroll }`}
            code={`<div class="bg-primary">
            <div class="overflow-auto"></div>
            <div class="overflow-hidden"></div>
            <div class="overflow-visible"></div>
            <div class="overflow-scroll"></div>
</div>`}
          />

          <UtilityDoc
            id="overflowx"
            mainTitle="Horizontal overflow"
            mainDescription="The overflow-x CSS property sets what shows when content overflows a block-level element's left and right edges. This may be nothing, a scroll bar, or the overflow content."
            items={overflowX}
            usage={`{ overflowX }-{ auto | hidden | visible | scroll }`}
            code={`<div class="bg-primary">
            <div class="overflowX-auto"></div>
            <div class="overflowX-hidden"></div>
            <div class="overflowX-visible"></div>
            <div class="overflowX-scroll"></div>
</div>`}
          />
          <UtilityDoc
            id="overflowy"
            mainTitle="Vertical overflow"
            mainDescription="The overflow-y CSS property sets what shows when content overflows a block-level element's top and bottom edges. This may be nothing, a scroll bar, or the overflow content."
            items={overflowY}
            usage={`{ overflowY }-{ auto | hidden | visible | scroll }`}
            code={`<div class="bg-primary">
            <div class="overflowY-auto"></div>
            <div class="overflowY-hidden"></div>
            <div class="overflowY-visible"></div>
            <div class="overflowY-scroll"></div>
</div>`}
          />

          <UtilityDoc
            id="overscrollbehavior"
            mainTitle="Over scroll behavior"
            mainDescription="The overscroll-behavior CSS property sets what a browser does when reaching the boundary of a scrolling area. It's a shorthand for overscroll-behavior-x and overscroll-behavior-y."
            items={overScrollBehavior}
            usage={`{ overscroll }-{ auto | contain| none }`}
            code={`<div class="bg-primary">
            <div class="overscroll-auto"></div>
            <div class="overscroll-contain"></div>
            <div class="overscroll-none"></div>
</div>`}
          />
          <UtilityDoc
            id="overscrollx"
            mainTitle="Horizontal over scroll behavior"
            mainDescription="The overscroll-behavior-x CSS property sets the browser's behavior when the horizontal boundary of a scrolling area is reached."
            items={overScrollBehaviorX}
            usage={`{ overscrollX }-{ auto | contain| none }`}
            code={`<div class="bg-primary">
            <div class="overscrollX-auto"></div>
            <div class="overscrollX-contain"></div>
            <div class="overscrollX-none"></div>
</div>`}
          />
          <UtilityDoc
            id="overscrolly"
            mainTitle="Vertical over scroll behavior"
            mainDescription="The overscroll-behavior-y CSS property sets the browser's behavior when the vertical boundary of a scrolling area is reached."
            items={overScrollBehaviorY}
            usage={`{ overscrollY }-{ auto | contain | none }`}
            code={`<div class="bg-primary">
            <div class="overscrollY-auto"></div>
            <div class="overscrollY-contain"></div>
            <div class="overscrollY-none"></div>
</div>`}
          />
          <UtilityDoc
            id="position"
            mainTitle="Position"
            mainDescription="The position CSS property sets how an element is positioned in a document. The top, right, bottom, and left properties determine the final location of positioned elements."
            items={position}
            usage={`{ position }-{ absolute | fixed | relative | static | sticky }`}
            code={`<div class="bg-primary">
            <div class="position-absolute"></div>
            <div class="position-fixed"></div>
            <div class="position-relative"></div>
            <div class="position-static"></div>
            <div class="position-sticky"></div>
</div>`}
          />

          <UtilityDoc
            id="top"
            mainTitle="Top"
            mainDescription="The top CSS property participates in specifying the vertical position of a positioned element. It has no effect on non-positioned elements."
            items={top}
            usage={`{ top }-{ remsizes }`}
            code={`<div class="bg-primary position-relative">
            <div class="position-absolute top-1"></div>
            <div class="position-absolute top-2"></div>
            <div class="position-absolute top-3"></div>
            <div class="position-absolute top-6"></div>
            <div class="position-absolute top-10"></div>
</div>`}
          />
          <UtilityDoc
            id="right"
            mainTitle="Right"
            mainDescription="The right CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements."
            items={right}
            usage={`{ right }-{ remsizes }`}
            code={`<div class="bg-primary position-relative">
            <div class="position-absolute right-1"></div>
            <div class="position-absolute right-2"></div>
            <div class="position-absolute right-3"></div>
            <div class="position-absolute right-6"></div>
            <div class="position-absolute right-10"></div>
</div>`}
          />
          <UtilityDoc
            id="left"
            mainTitle="Left"
            mainDescription="The left CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements."
            items={left}
            usage={`{ left }-{ remsizes }`}
            code={`<div class="bg-primary position-relative">
            <div class="position-absolute left-1"></div>
            <div class="position-absolute left-2"></div>
            <div class="position-absolute left-3"></div>
            <div class="position-absolute left-6"></div>
            <div class="position-absolute left-10"></div>
</div>`}
          />
          <UtilityDoc
            id="bottom"
            mainTitle="bottom"
            mainDescription="The bottom CSS property participates in setting the vertical position of a positioned element. It has no effect on non-positioned elements."
            items={bottom}
            usage={`{ bottom }-{ remsizes }`}
            code={`<div class="bg-primary position-relative">
            <div class="position-absolute bottom-1"></div>
            <div class="position-absolute bottom-2"></div>
            <div class="position-absolute bottom-3"></div>
            <div class="position-absolute bottom-6"></div>
            <div class="position-absolute bottom-10"></div>
</div>`}
          />
        </div>
        <ReferencesSideBar items={test} />
      </div>
    </div>
  );
}

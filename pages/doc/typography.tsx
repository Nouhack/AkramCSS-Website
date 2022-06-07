import React from "react";
import Head from "next/head";
import UtilityDoc from "../../Components/subComponents/UtilityDoc";
import ReferencesSideBar from "../../Components/ReferencesSideBar";
import {
  fontSize,
  fontFamily,
  fontWeight,
  fontVarient,
  letterSpacing,
  lineHeight,
  listType,
  listStylePosition,
  textAlign,
  textColor,
  textDecoration,
  textDecorationColor,
  textDecorationStyles,
  textDecorationThickness,
  textUnderlineOffset,
  textTransform,
  textOverflow,
  indent,
  verticalAlign,
  whiteSpace,
  wordBreak,
  fontStyle,
} from "../../data/utility";
type Props = {};

export default function Typography({}: Props) {
  const test = [
    {
      name: "font size",
      url: "#fontsize",
    },
    { name: "font family", url: "#fontfamily" },
    { name: "font weight", url: "#fontweight" },
    { name: "font variant numeric", url: "#fontvariantnumeric" },
    { name: "letter spacing", url: "#letterspacing" },
    { name: "line height", url: "#lineheight" },
    { name: "list type", url: "#listtype" },
    { name: "list style position", url: "#liststyleposition" },
    { name: "text align", url: "#textalign" },
    { name: "text color", url: "#textcolor" },
    { name: "text decoration", url: "#textdecoration" },
    { name: "text decoration color", url: "#textdecorationcolor" },
    { name: "text decoration style", url: "#textdecorationstyle" },
    { name: "text decoration thickness", url: "#textdecorationthickness" },
    { name: "text underline offset", url: "#textunderlineoffset" },
    { name: "text transform", url: "#texttransform" },
    { name: "text overflow", url: "#textoverflow" },
    { name: "indent", url: "#indent" },
    { name: "vertical align", url: "#verticalalign" },
    { name: "white spacing", url: "#whitespacing" },
    { name: "word break", url: "#wordbreak" },
    { name: "font style", url: "#fontstyle" },
  ];
  return (
    <div className="w-100-100 page px-1 md:px-0 overflowY-auto scroll-smooth ">
      <Head>
        <title>Typography - AkramCSS</title>
        <meta
          name="description"
          content="Typography page presents all the text and fonts utility classes of AkramCSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="container" className="display-flex flex-row w-100-100">
        <div className="md:px-2 max-w-100-100 pb-4 ">
          <p id="nouhack" className="text-4xl font-bold ls-tighter">
            Typography
          </p>

          <UtilityDoc
            id="fontsize"
            mainTitle="Font size"
            mainDescription="The font-size CSS property sets the size of the font"
            items={fontSize}
            usage={`{ text }-{ xs | sm | base | lg | xl | 2xl | 3xl | 4xl | 5xl | 6xl | 7xl | 8xl | 9xl | 10xl }`}
            code={`<div class="bg-akram w-100-100">
        <p class="text-xs">extra small font size</p>
        <p class="text-sm">small font size</p>
        <p class="text-base">base font size</p>
        <p class="text-lg">large font size</p>
        <p class="text-xl">extra large font size</p>
        <p class="text-2xl">2x extra large font size</p>
        .
        .
        .
        <p class="text-10xl font-medium">10x extra large font size</p>
</div>`}
          />
          <UtilityDoc
            id="fontfamily"
            mainTitle="Font family"
            mainDescription="The font-family CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element."
            items={fontFamily}
            usage={`{ font }-{ sans | serif | mono }`}
            code={`<div class="bg-maria display-flex flex-row">
        <p class="font-sans">extra small font size</p>
        <p class="font-serif">small font size</p>
        <p class="font-mono">base font size</p>
</div>`}
          />
          <UtilityDoc
            id="fontweight"
            mainTitle="Font weight"
            mainDescription="The font-weight CSS property sets the weight (or boldness) of the font. The weights available depend on the font-family that is currently set."
            items={fontWeight}
            usage={`{ font }-{ hairline | thin | light | normal | medium | semibold | bold | extrabold | black}`}
            code={`<div class="bg-primary">
        <p class="font-hairline">hairline font weight</p>
        <p class="font-thin">thin font weight</p>
        <p class="font-light">light font weight</p>
        <p class="font-normal">normal font weight</p>
        <p class="font-madium">medium font weight</p>
        <p class="font-semibold">semibold font weight</p>
        <p class="font-bold">bold font weight</p>
        <p class="font-extrabold">extrabold font weight</p>
        <p class="font-black">black font weight</p>
</div>`}
          />

          <UtilityDoc
            id="fontvariantnumeric"
            mainTitle="Font variant numeric"
            mainDescription="The font-variant-numeric CSS property controls the usage of alternate glyphs for numbers, fractions, and ordinal markers."
            items={fontVarient}
            usage={`{ font }-{ normal-nums | ordinal-nums | slashed-zero | lining-nums | oldstyle-nums | proportional-nums | tabular-nums | diagonal-fractions | stacked-fractions }`}
            code={`<div class="bg-sissa p-4 m-2">
        <p class="font-normal-nums">hairline font weight</p>
        <p class="font-ordinal-nums">thin font weight</p>
        <p class="font-slashed-zero">light font weight</p>
        <p class="font-lining-nums">normal font weight</p>
        <p class="font-oldstyle-nums">medium font weight</p>
        <p class="font-proportional-nums">semibold font weight</p>
        <p class="font-tabular-nums">bold font weight</p>
        <p class="font-diagonal-fractions">extrabold font weight</p>
        <p class="font-stacked-fractions">black font weight</p>
</div>`}
          />
          <UtilityDoc
            id="letterspacing"
            mainTitle="Letter spacing"
            mainDescription="The letter-spacing CSS property sets the horizontal spacing behavior between text characters. This value is added to the natural spacing between characters while rendering the text. Positive values of letter-spacing causes characters to spread farther apart, while negative values of letter-spacing bring characters closer together."
            items={letterSpacing}
            usage={`{ ls }-{ tighter | tight | normal | wide | wider | widest }`}
            code={`<div class="bg-sissa p-4 m-2">
        <p class="ls-tighter">tighter letter spacing</p>
        <p class="ls-tight">tight letter spacing</p>
        <p class="ls-normal">normal letter spacing</p>
        <p class="ls-wide">wide letter spacing</p>
        <p class="ls-wider">wider letter spacing</p>
        <p class="ls-widest">widest letter spacing</p>
</div>`}
          />

          <UtilityDoc
            id="lineheight"
            mainTitle="Line height"
            mainDescription="The line-height CSS property sets the height of a line box. It's commonly used to set the distance between lines of text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height."
            items={lineHeight}
            usage={`{ lh }-{ none |tighter | tight | normal | loose `}
            code={`<div class="bg-maria my-2 w-full">
        <p class="lh-none">none line height</p>
        <p class="lh-tighter">tighter line height</p>
        <p class="lh-tight">tight line height</p>
        <p class="lh-normal">normal line height</p>
        <p class="lh-loose">wide line height</p>
</div>`}
          />

          <UtilityDoc
            id="listtype"
            mainTitle="List type"
            mainDescription="The list-style-type CSS property sets the marker (such as a disc, character, or custom counter style) of a list item element."
            items={listType}
            usage={`{ list }-{ none | disc | decimal | circle | square | box | armenian | georgian | hebrew | cjk-ideographic | hiragana | katakana | hiragana-iroha`}
            code={`<ul class="list-disc">
        <li class="lh-none">none line height</li>
</ul>
<ul class="list-circle">
        <li className="lh-none">I LOVE AkramCSS</li>
</ul>
<ul class="list-box">
        <li class="lh-none">I LOVE AkramCSS</li>
</ul>`}
          />

          <UtilityDoc
            id="liststyleposition"
            mainTitle="List style position"
            mainDescription="The list-style-position CSS property Specifies the position of the list-item markers"
            items={listStylePosition}
            usage={`{ list }-{ inside | outside }`}
            code={`<ul class="list-disc">
        <li class="lh-none">none line height</li>
</ul>
<ul class="list-inside">
        <li className="lh-none">I LOVE AkramCSS</li>
</ul>
<ul class="list-outside">
        <li className="lh-none">I LOVE AkramCSS</li>
</ul>`}
          />

          <UtilityDoc
            id="textalign"
            mainTitle="Text align"
            mainDescription="The text-align CSS property sets the horizontal alignment of the content inside a block element or table-cell box. This means it works like vertical-align but in the horizontal direction."
            items={textAlign}
            usage={`{ text }-{ right | left | center | justify }`}
            code={`<div class="bg-primary mode-dark h-full">
        <p class="text-center">none line height</p>
        <p class="text-right">none line height</p>
        <p class="text-left">none line height</p>
        <p class="text-justify">none line height</p>
</div>`}
          />
          <UtilityDoc
            id="textcolor"
            mainTitle="Text color"
            mainDescription="The color CSS property sets the foreground color value of an element's text and text decorations, and sets the currentcolor value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color."
            items={textColor}
            usage={`{ text }-{ base | inner | sissa | akram | maria | senary }`}
            code={`<div class="bg-senary mode-light h-50-100">
        <p class="text-base">base text color</p>
        <p class="text-inner">inner text color</p>
        <p class="text-sissa">sissa text color</p>
        <p class="text-akram">akram text color</p>
        <p class="text-maria">maria text color</p>
        <p class="text-senary">senary text color</p>
</div>`}
          />

          <UtilityDoc
            id="textdecoration"
            mainTitle="Text decoration"
            mainDescription="The text-decoration shorthand CSS property sets the appearance of decorative lines on text. It is a shorthand for text-decoration-line, text-decoration-color, text-decoration-style, and the newer text-decoration-thickness property."
            items={textDecoration}
            usage={`{ text }-{ none | underline | line-through | overline }`}
            code={`<div class="bg-sissa text-inner h-100-100">
        <p class="text-none">none text decoration</p>
        <p class="text-underline">underline text decoration</p>
        <p class="text-line-through">line through text decoration</p>
        <p class="text-overline">overline text decoration</p>
</div>`}
          />

          <UtilityDoc
            id="textdecorationcolor"
            mainTitle="Text decoration color"
            mainDescription="The text-decoration-color CSS property sets the color of decorations added to text by text-decoration-line."
            items={textDecorationColor}
            usage={`{ decoration }-{ base | inner | sissa | akram | maria | senary }`}
            code={`<div>
        <p class="decoration-base">base color decoration</p>
        <p class="decoration-inner">inner color decoration</p>
        <p class="decoration-sissa-through">sissa color decoration</p>
        <p class="decoration-akram">akram color decoration</p>
        <p class="decoration-akram">akram color decoration</p>
        <p class="decoration-senary">senary color decoration</p>
</div>`}
          />

          <UtilityDoc
            id="textdecorationstyle"
            mainTitle="Text decoration style"
            mainDescription="The text-decoration-style CSS property sets the style of the lines specified by text-decoration-line. The style applies to all lines that are set with text-decoration-line."
            items={textDecorationStyles}
            usage={`{ decoration }-{ solid | double | dotted | dashed | wavy }`}
            code={`<div>
        <p class="decoration-solid">solid decoration</p>
        <p class="decoration-double">double decoration</p>
        <p class="decoration-dotted">dotted decoration</p>
        <p class="decoration-dashed">dashed decoration</p>
        <p class="decoration-wavy">wavy decoration</p>
</div>`}
          />

          <UtilityDoc
            id="textdecorationthickness"
            mainTitle="Text decoration thickness"
            mainDescription="The text-decoration-thickness CSS property sets the stroke thickness of the decoration line that is used on text in an element, such as a line-through, underline, or overline."
            items={textDecorationThickness}
            usage={`{ decoration }-{ auto | from-font | 0 | 1 | 2 | 4 | 8 }`}
            code={`<div>
        <p class="decoration-auto">auto decoration thickness</p>
        <p class="decoration-from-font">from font decoration thickness</p>
        <p class="decoration-0">0 decoration thickness</p>
        <p class="decoration-1">1 decoration thickness</p>
        <p class="decoration-2">2 decoration thickness</p>
        <p class="decoration-4">4 decoration thickness</p>
        <p class="decoration-8">8 decoration thickness</p>
</div>`}
          />

          <UtilityDoc
            id="textunderlineoffset"
            mainTitle="Text underline offset"
            mainDescription="The text-underline-offset CSS property sets the offset distance of an underline text decoration line (applied using text-decoration) from its original position."
            items={textUnderlineOffset}
            usage={`{ underline-offset }-{ auto | 0 | 1 | 2 | 4 | 8 }`}
            code={`<div>
        <p class="underline-offset-auto">auto underline offset</p>
        <p class="underline-offset-0">0 underline offset</p>
        <p class="underline-offset-1">1 underline offset</p>
        <p class="underline-offset-2">2 underline offset</p>
        <p class="underline-offset-4">4 underline offset</p>
        <p class="underline-offset-8">8 underline offset</p>
</div>`}
          />

          <UtilityDoc
            id="texttransform"
            mainTitle="Text transform"
            mainDescription="The text-transform CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby."
            items={textTransform}
            usage={`{ text }-{ normal-case | uppercase | lowercase | capitalize }`}
            code={`<div>
        <p class="text-normal-case">normal text</p>
        <p class="text-uppercase">uppercase text</p>
        <p class="text-lowercase">lowercase text</p>
        <p class="text-capitalize">capitalize text</p>
</div>`}
          />

          <UtilityDoc
            id="textoverflow"
            mainTitle="Text overflow"
            mainDescription="The text-overflow CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('…'), or display a custom string."
            items={textOverflow}
            usage={`{ text }-{ clip | ellipsis }`}
            code={`<div>
        <p class="text-clip">clip text overflow</p>
        <p class="text-ellipsis">ellipsis text overflow</p>
</div>`}
          />
          <UtilityDoc
            id="indent"
            mainTitle="Indent"
            mainDescription="The text-indent CSS property sets the length of empty space (indentation) that is put before lines of text in a block."
            items={indent}
            usage={`{ indent }-{ remsizes }`}
            code={`<div>
        <p class="indent-1">clip text overflow</p>
        .
        .
        .
        <p class="indent-7">ellipsis text overflow</p>
</div>`}
          />

          <UtilityDoc
            id="verticalalign"
            mainTitle="Vertical align"
            mainDescription="The vertical-align CSS property sets vertical alignment of an inline, inline-block or table-cell box."
            items={verticalAlign}
            usage={`{ align }-{ baseline | sub | super | top | text-top | middle | bottom | text-bottom }`}
            code={`<div>
        <div class="align-top">clip text overflow</div>
        <div class="align-bottom">ellipsis text overflow</div>
</div>`}
          />

          <UtilityDoc
            id="whitespacing"
            mainTitle="White spacing"
            mainDescription="The white-space CSS property sets how white space inside an element is handled."
            items={whiteSpace}
            usage={`{ whitespace }-{ normal | nowrap | pre | pre-wrap | pre-line | break-spaces }`}
            code={`<div>
        <p class="whitespace-normal">normal whitespace</p>
        <p class="whitespace-nowrap">nowrap whitespace</p>
        <p class="whitespace-pre">pre whitespace</p>
        <p class="whitespace-pre-wrap">pre wrap whitespace</p>
        <p class="whitespace-pre-line">pre line whitespace</p>
        <p class="whitespace-break-spaces">break spaces whitespace</p>
</div>`}
          />

          <UtilityDoc
            id="wordbreak"
            mainTitle="Word break"
            mainDescription="The word-break CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box."
            items={wordBreak}
            usage={`{ wordbreak }-{ normal | break-all | keep-all | break-word }`}
            code={`<div>
        <p class="wordbreak-normal">normal word break</p>
        <p class="wordbreak-break-all">break all</p>
        <p class="wordbreak-keep-all">keep all break</p>
        <p class="wordbreak-break-word">break word</p>
</div>`}
          />

          <UtilityDoc
            id="fontstyle"
            mainTitle="Font style"
            mainDescription="The font-style CSS property sets whether a font should be styled with a normal, italic, or oblique face from its font-family."
            items={fontStyle}
            usage={`{ italic | not-italic}`}
            code={`<div>
        <p class="italic">normal word break</p>
        <p class="not-italic">break all</p>
</div>`}
          />
        </div>
        <ReferencesSideBar items={test} />
      </div>
    </div>
  );
}

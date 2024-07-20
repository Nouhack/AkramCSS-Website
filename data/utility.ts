const sizeGenerator = (sizesList: any, secondArray: any) => {
  return sizesList.map((item: any, index: number): any => {
    return secondArray.map((item2: any, index2: number) => {
      return {
        class: `${item.util}${item.util.length > 0 ? "-" : ""}${item2.util}`,
        properties: `${item.prop} : ${item2.prop} ;`,
      };
    });
  });
};

const sizeGenerator2 = (sizesList: any, secondArray: any) => {
  return sizesList.map((item: any, index: number): any => {
    return secondArray.map((item2: any, index2: number) => {
      return {
        class: `${item.util}-${item2.util}`,
        propertie1: `${item.prop1} : ${item2.prop} ;`,
        propertie2: `${item.prop2} : ${item2.prop} ;`,
      };
    });
  });
};

var fontSizeList = [{ util: "text", prop: "font-size" }];
var fontVariableList = [
  { util: "xs", prop: "0.75rem" },
  { util: "sm", prop: "0.875rem" },
  { util: "base", prop: "1rem" },
  { util: "lg", prop: "1.125rem" },
  { util: "xl", prop: "1.25rem" },
  { util: "2xl", prop: "1.5rem" },
  { util: "3xl", prop: "1.875rem" },
  { util: "4xl", prop: "2.25rem" },
  { util: "5xl", prop: "3rem" },
  { util: "6xl", prop: "4rem" },
  { util: "7xl", prop: "5rem" },
  { util: "8xl", prop: "6rem" },
  { util: "9xl", prop: "7rem" },
  { util: "10xl", prop: "8rem" },
];

var fontFamilyList = [{ util: "font", prop: "font-family" }];

var fontFamilyVariableList = [
  {
    util: "sans",
    prop: "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'",
  },
  {
    util: "serif",
    prop: "ui-serif,Georgia,cambria,'Times new roman' , Times , serif",
  },
  {
    util: "mono",
    prop: "ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation Mono'",
  },
];

var fontWeightList = [{ util: "font", prop: "font-weight" }];
var fontWeightVariableList = [
  { util: "hairline", prop: "100" },
  { util: "thin", prop: "200" },
  { util: "light", prop: "300" },
  { util: "normal", prop: "400" },
  { util: "medium", prop: "500" },
  { util: "semibold", prop: "600" },
  { util: "bold", prop: "700" },
  { util: "extrabold", prop: "800" },
  { util: "black", prop: "900" },
];
var fontVariantNumeric = [{ util: "font", prop: "font-variant-numeric" }];
var fontVariantNumericVariableList = [
  { util: "normal-nums", prop: "normal" },
  { util: "ordinal-nums", prop: "ordinal" },
  { util: "slashed-zero", prop: "slashed-zero" },
  { util: "lining-num", prop: "lining-num" },
  { util: "oldstyle-nums", prop: "oldstyle-nums" },
  { util: "proportional-nums", prop: "proportional-nums" },
  { util: "tabular-nums", prop: "tabular-nums" },
  { util: "diagonal-fractions", prop: "diagonal-fractions" },
  { util: "stacked-fractions", prop: "stacked-fractions" },
];

var letterSpacings = [{ util: "ls", prop: "letter-spacing" }];
var letterSpacingVariableList = [
  { util: "tighter", prop: "-0.05em" },
  { util: "tight", prop: "-0.025em" },
  { util: "normal", prop: "0" },
  { util: "wide", prop: "0.025em" },
  { util: "wider", prop: "0.05em" },
  { util: "widest", prop: "0.1em" },
];

var lineHeights = [{ util: "lh", prop: "line-height" }];
var lineHeightVariableList = [
  { util: "none", prop: "1" },
  { util: "tighter", prop: "1.25" },
  { util: "tight", prop: "1.5" },
  { util: "normal", prop: "1.75" },
  { util: "loose", prop: "2" },
];

var listTypes = [
  {
    util: "list",
    prop: "list-style-type",
  },
];
var listTypesVariableList = [
  { util: "none", prop: "none" },
  { util: "disc", prop: "disc" },
  { util: "decimal", prop: "decimal" },
  { util: "circle", prop: "circle" },
  { util: "square", prop: "square" },
  { util: "box", prop: "box" },
  { util: "armenian", prop: "armenian" },
  { util: "georgian", prop: "georgian" },
  { util: "hebrew", prop: "hebrew" },
  { util: "cjk-ideographic", prop: "cjk-ideographic" },
  { util: "hiragana", prop: "hiragana" },
  { util: "katakana", prop: "katakana" },
  { util: "hiragana-iroha", prop: "hiragana-iroha" },
];

var listStyPositions = [
  {
    util: "list",
    prop: "list-style-position",
  },
];
var listStyPositionsVariableList = [
  { util: "inside", prop: "inside" },
  { util: "outside", prop: "outside" },
];

var widthList = [
  { util: "w", prop: "width" },
  { util: "min-w", prop: "min-width" },
  { util: "max-w", prop: "max-width" },
];
var heightList = [
  { util: "h", prop: "height" },
  { util: "min-h", prop: "min-height" },
  { util: "max-h", prop: "max-height" },
];
var wiewWidthList = [
  { util: "full", prop: "100vw" },
  { util: "1-2", prop: "50vw" },
  { util: "1-3", prop: "33.33vw" },
  { util: "1-4", prop: "25vw" },
  { util: "1-5", prop: "20vw" },
];
var wiewHeightList = [
  { util: "full", prop: "100vh" },
  { util: "1-2", prop: "50vh" },
  { util: "1-3", prop: "33.33vh" },
  { util: "1-4", prop: "25vh" },
  { util: "1-5", prop: "20vh" },
];
var percentageClasses = [
  { util: "10-100", prop: "10%" },
  { util: "20-100", prop: "20%" },
  { util: "30-100", prop: "30%" },
  { util: "40-100", prop: "40%" },
  { util: "50-100", prop: "50%" },
  { util: "60-100", prop: "60%" },
  { util: "70-100", prop: "70%" },
  { util: "80-100", prop: "80%" },
  { util: "90-100", prop: "90%" },
  { util: "100-100", prop: "100%" },
];

const remClasses = [
  { util: "0", prop: "0rem" },
  { util: "0.1", prop: "0.125rem" },
  { util: "0.2", prop: "0.25rem" },
  { util: "0.3", prop: "0.375rem" },
  { util: "0.5", prop: "0.5rem" },
  { util: "0.6", prop: "0.625rem" },
  { util: "0.7", prop: "0.75rem" },
  { util: "0.8", prop: "0.875rem" },
  { util: "1", prop: "1rem" },
  { util: "1.2", prop: "1.125rem" },
  { util: "1.4", prop: "1.25rem" },
  { util: "1.5", prop: "1.5rem" },
  { util: "1.7", prop: "1.75rem" },
  { util: "2", prop: "2rem" },
  { util: "2.2", prop: "2.25rem" },
  { util: "2.5", prop: "2.5rem" },
  { util: "2.7", prop: "2.75rem" },
  { util: "3", prop: "3rem" },
  { util: "3.5", prop: "3.5rem" },
  { util: "4", prop: "4rem" },
  { util: "5", prop: "5rem" },
  { util: "6", prop: "6rem" },
  { util: "7", prop: "7rem" },
  { util: "8", prop: "8rem" },
  { util: "9", prop: "9rem" },
  { util: "10", prop: "10rem" },
  { util: "11", prop: "11rem" },
  { util: "12", prop: "12rem" },
  { util: "13", prop: "13rem" },
  { util: "14", prop: "14rem" },
  { util: "15", prop: "15rem" },
  { util: "16", prop: "16rem" },
  { util: "18", prop: "18rem" },
  { util: "20", prop: "20rem" },
  { util: "22", prop: "22rem" },
  { util: "24", prop: "24rem" },
];

const heightArray = sizeGenerator(heightList, [
  ...percentageClasses,
  ...remClasses,
  ...wiewHeightList,
]);
const widthArray = sizeGenerator(widthList, [
  ...percentageClasses,
  ...remClasses,
  ...wiewWidthList,
]);
export const sizesGen = [...heightArray, ...widthArray];
export const fontSize = sizeGenerator(fontSizeList, fontVariableList);
export const fontFamily = sizeGenerator(fontFamilyList, fontFamilyVariableList);
export const fontWeight = sizeGenerator(fontWeightList, fontWeightVariableList);
export const fontVarient = sizeGenerator(
  fontVariantNumeric,
  fontVariantNumericVariableList
);
export const letterSpacing = sizeGenerator(
  letterSpacings,
  letterSpacingVariableList
);

var textAligns = [{ util: "text", prop: "text-align" }];
var textAlignsVariableList = [
  { util: "left", prop: "left" },
  { util: "right", prop: "right" },
  { util: "center", prop: "center" },
  { util: "justify", prop: "justify" },
];

var textColors = [{ util: "text", prop: "color" }];
var textColorsVariableList = [
  { util: "base", prop: "var(--base)" },
  { util: "inner", prop: "var(--inner)" },
  { util: "primary", prop: "var(--primary)" },
  { util: "secondary", prop: "var(--secondary)" },
  { util: "success", prop: "var(--success)" },
  { util: "info", prop: "var(--info)" },
  { util: "warning", prop: "var(--warning)" },
  { util: "danger", prop: "var(--danger)" },
  { util: "sissa", prop: "var(--sissa)" },
  { util: "akram", prop: "var(--akram)" },
  { util: "maria", prop: "var(--maria)" },
];

var textDecorations = [{ util: "text", prop: "text-decoration" }];
var textDecorationsVariableList = [
  { util: "none", prop: "none" },
  { util: "underline", prop: "underline" },
  { util: "line-through", prop: "line-through" },
  { util: "overline", prop: "overline" },
];

var textDecorationColors = [
  { util: "decoration", prop: "text-decoration-color" },
];
var textDecorationColorsVariableList = [
  { util: "base", prop: "var(--base)" },
  { util: "inner", prop: "var(--inner)" },
  { util: "primary", prop: "var(--primary)" },
  { util: "secondary", prop: "var(--secondary)" },
  { util: "success", prop: "var(--success)" },
  { util: "info", prop: "var(--info)" },
  { util: "warning", prop: "var(--warning)" },
  { util: "danger", prop: "var(--danger)" },
  { util: "sissa", prop: "var(--sissa)" },
  { util: "akram", prop: "var(--akram)" },
  { util: "maria", prop: "var(--maria)" },
];

var decorationStyles = [{ util: "decoration", prop: "text-decoration-style" }];
var decorationStylesVariableList = [
  { util: "solid", prop: "solid" },
  { util: "double", prop: "double" },
  { util: "dotted", prop: "dotted" },
  { util: "dashed", prop: "dashed" },
  { util: "wavy", prop: "wavy" },
];

var decorationThicknesses = [
  { util: "decoration", prop: "text-decoration-thickness" },
];
var decorationThicknessesVariableList = [
  { util: "auto", prop: "auto" },
  { util: "from-font", prop: "from-font" },
  { util: "0", prop: "0px" },
  { util: "1", prop: "1px" },
  { util: "2", prop: "2px" },
  { util: "4", prop: "4px" },
  { util: "8", prop: "8px" },
];

var textUnderlineOffsets = [
  { util: "underline-offset", prop: "text-underline-offset" },
];
var textUnderlineOffsetsVariableList = [
  { util: "auto", prop: "auto" },
  { util: "0", prop: "0px" },
  { util: "1", prop: "1px" },
  { util: "2", prop: "2px" },
  { util: "4", prop: "4px" },
  { util: "8", prop: "8px" },
];

var textTransforms = [{ util: "text", prop: "text-transform" }];
var textTransformsVariableList = [
  { util: "normal-case", prop: "none" },
  { util: "capitalize", prop: "capitalize" },
  { util: "lowercase", prop: "lowercase" },
  { util: "uppercase", prop: "uppercase" },
];

var textOverflows = [{ util: "text", prop: "text-overflow" }];
var textOverflowsVariableList = [
  { util: "clip", prop: "clip" },
  { util: "ellipsis", prop: "ellipsis" },
];

var indents = [{ util: "indent", prop: "text-indent" }];

var verticalAligns = [{ util: "align", prop: "vertical-align" }];
var verticalAlignsVariableList = [
  { util: "baseline", prop: "baseline" },
  { util: "sub", prop: "sub" },
  { util: "super", prop: "super" },
  { util: "top", prop: "top" },
  { util: "text-top", prop: "text-top" },
  { util: "middle", prop: "middle" },
  { util: "bottom", prop: "bottom" },
  { util: "text-bottom", prop: "text-bottom" },
];

var whiteSpaces = [{ util: "whitespace", prop: "white-space" }];
var whiteSpacesVariableList = [
  { util: "normal", prop: "normal" },
  { util: "nowrap", prop: "nowrap" },
  { util: "pre", prop: "pre" },
  { util: "pre-line", prop: "pre-line" },
  { util: "pre-wrap", prop: "pre-wrap" },
  { util: "break-spaces", prop: "break-spaces" },
];

var wordBreaks = [{ util: "wordbreak", prop: "word-break" }];
var wordBreaksVariableList = [
  { util: "normal", prop: "normal" },
  { util: "break-all", prop: "break-all" },
  { util: "keep-all", prop: "keep-all" },
  { util: "break-word", prop: "break-word" },
];

var paddings = [{ util: "p", prop: "padding" }];
var horizontalPaddings = [
  { util: "px", prop1: "padding-left", prop2: "padding-right" },
];
var verticalalPaddings = [
  { util: "py", prop1: "padding-top", prop2: "padding-bottom" },
];
var paddingsTop = [{ util: "pt", prop: "padding-top" }];
var paddingsBottom = [{ util: "pb", prop: "padding-bottom" }];
var paddingsLeft = [{ util: "pl", prop: "padding-left" }];
var paddingsRight = [{ util: "pr", prop: "padding-right" }];

var margins = [{ util: "m", prop: "margin" }];
var horizontalMargins = [
  { util: "mx", prop1: "margin-left", prop2: "margin-right" },
];
var verticalMargins = [
  { util: "my", prop1: "margin-top", prop2: "margin-bottom" },
];
var marginsTop = [{ util: "mt", prop: "margin-top" }];
var marginsBottom = [{ util: "mb", prop: "margin-bottom" }];
var marginsLeft = [{ util: "ml", prop: "marin-left" }];
var marginsRight = [{ util: "mr", prop: "margin-right" }];

var roundeds = [{ util: "rounded", prop: "border-radius" }];
var roundedTops = [
  {
    util: "rounded-t",
    prop1: "border-top-left-radius",
    prop2: "border-top-right-radius",
  },
];

var gridTemplateColumns = [{ util: "grid", prop: "grid-template-columns" }];
var gridTemplateColumnsVariableList = [
  { util: "c-1", prop: "repeat(1, minmax(0, 1fr))" },
  { util: "c-2", prop: "repeat(2, minmax(0, 1fr))" },
  { util: "c-3", prop: "repeat(3, minmax(0, 1fr))" },
  { util: "c-4", prop: "repeat(4, minmax(0, 1fr))" },
  { util: "c-5", prop: "repeat(5, minmax(0, 1fr))" },
  { util: "c-6", prop: "repeat(6, minmax(0, 1fr))" },
  { util: "c-7", prop: "repeat(7, minmax(0, 1fr))" },
  { util: "c-8", prop: "repeat(8, minmax(0, 1fr))" },
  { util: "c-9", prop: "repeat(9, minmax(0, 1fr))" },
  { util: "c-10", prop: "repeat(10, minmax(0, 1fr))" },
  { util: "c-11", prop: "repeat(11, minmax(0, 1fr))" },
  { util: "c-12", prop: "repeat(12, minmax(0, 1fr))" },
  { util: "c-13", prop: "repeat(13, minmax(0, 1fr))" },
  { util: "c-14", prop: "repeat(14, minmax(0, 1fr))" },
  { util: "c-15", prop: "repeat(15, minmax(0, 1fr))" },
  { util: "c-16", prop: "repeat(16, minmax(0, 1fr))" },
];

var gridTemplateRows = [{ util: "grid", prop: "grid-template-rows" }];
var gridTemplateRowsVariableList = [
  { util: "r-1", prop: "repeat(1, minmax(0, 1fr))" },
  { util: "r-2", prop: "repeat(2, minmax(0, 1fr))" },
  { util: "r-3", prop: "repeat(3, minmax(0, 1fr))" },
  { util: "r-4", prop: "repeat(4, minmax(0, 1fr))" },
  { util: "r-5", prop: "repeat(5, minmax(0, 1fr))" },
  { util: "r-6", prop: "repeat(6, minmax(0, 1fr))" },
  { util: "r-7", prop: "repeat(7, minmax(0, 1fr))" },
  { util: "r-8", prop: "repeat(8, minmax(0, 1fr))" },
  { util: "r-9", prop: "repeat(9, minmax(0, 1fr))" },
  { util: "r-10", prop: "repeat(10, minmax(0, 1fr))" },
  { util: "r-11", prop: "repeat(11, minmax(0, 1fr))" },
  { util: "r-12", prop: "repeat(12, minmax(0, 1fr))" },
  { util: "r-13", prop: "repeat(13, minmax(0, 1fr))" },
  { util: "r-14", prop: "repeat(14, minmax(0, 1fr))" },
  { util: "r-15", prop: "repeat(15, minmax(0, 1fr))" },
  { util: "r-16", prop: "repeat(16, minmax(0, 1fr))" },
];

var gridColumns = [{ util: "col", prop: "grid-column" }];
var gridColumnsVariableList = [
  { util: "auto", prop: "auto" },
  { util: "span-1", prop: "span 1 / span 1" },
  { util: "span-2", prop: "span 2 / span 2" },
  { util: "span-3", prop: "span 3 / span 3" },
  { util: "span-4", prop: "span 4 / span 4" },
  { util: "span-5", prop: "span 5 / span 5" },
  { util: "span-6", prop: "span 6 / span 6" },
  { util: "span-7", prop: "span 7 / span 7" },
  { util: "span-8", prop: "span 8 / span 8" },
  { util: "span-9", prop: "span 9 / span 9" },
  { util: "span-10", prop: "span 10 / span 10" },
  { util: "span-11", prop: "span 11 / span 11" },
  { util: "span-12", prop: "span 12 / span 12" },
  { util: "span-13", prop: "span 13 / span 13" },
  { util: "span-14", prop: "span 14 / span 14" },
  { util: "span-15", prop: "span 15 / span 15" },
  { util: "span-16", prop: "span 16 / span 16" },
];

var gridRows = [{ util: "row", prop: "grid-row" }];
var gridRowsVariableList = [
  { util: "auto", prop: "auto" },
  { util: "span-1", prop: "span 1 / span 1" },
  { util: "span-2", prop: "span 2 / span 2" },
  { util: "span-3", prop: "span 3 / span 3" },
  { util: "span-4", prop: "span 4 / span 4" },
  { util: "span-5", prop: "span 5 / span 5" },
  { util: "span-6", prop: "span 6 / span 6" },
  { util: "span-7", prop: "span 7 / span 7" },
  { util: "span-8", prop: "span 8 / span 8" },
  { util: "span-9", prop: "span 9 / span 9" },
  { util: "span-10", prop: "span 10 / span 10" },
  { util: "span-11", prop: "span 11 / span 11" },
  { util: "span-12", prop: "span 12 / span 12" },
  { util: "span-13", prop: "span 13 / span 13" },
  { util: "span-14", prop: "span 14 / span 14" },
  { util: "span-15", prop: "span 15 / span 15" },
  { util: "span-16", prop: "span 16 / span 16" },
];
var gridColumnStarts = [{ util: "col", prop: "grid-column-start" }];
var gridColumnStartsVariableList = [
  { util: "start-1", prop: "1" },
  { util: "start-2", prop: "2" },
  { util: "start-3", prop: "3" },
  { util: "start-4", prop: "4" },
  { util: "start-5", prop: "5" },
  { util: "start-6", prop: "6" },
  { util: "start-7", prop: "7" },
  { util: "start-8", prop: "8" },
  { util: "start-9", prop: "9" },
  { util: "start-10", prop: "10" },
  { util: "start-11", prop: "11" },
  { util: "start-12", prop: "12" },
  { util: "start-13", prop: "13" },
  { util: "start-14", prop: "14" },
  { util: "start-15", prop: "15" },
  { util: "start-16", prop: "16" },
  { util: "start-17", prop: "17" },
  { util: "start-auto", prop: "auto" },
];

var gridRowStarts = [{ util: "row", prop: "grid-row-start" }];
var gridRowStartsVariableList = [
  { util: "start-1", prop: "1" },
  { util: "start-2", prop: "2" },
  { util: "start-3", prop: "3" },
  { util: "start-4", prop: "4" },
  { util: "start-5", prop: "5" },
  { util: "start-6", prop: "6" },
  { util: "start-7", prop: "7" },
  { util: "start-8", prop: "8" },
  { util: "start-9", prop: "9" },
  { util: "start-10", prop: "10" },
  { util: "start-11", prop: "11" },
  { util: "start-12", prop: "12" },
  { util: "start-13", prop: "13" },
  { util: "start-14", prop: "14" },
  { util: "start-15", prop: "15" },
  { util: "start-16", prop: "16" },
  { util: "start-17", prop: "17" },
  { util: "start-auto", prop: "auto" },
];
var gridColumnEnds = [{ util: "col", prop: "grid-column-end" }];
var gridColumnEndsVariableList = [
  { util: "end-1", prop: "1" },
  { util: "end-2", prop: "2" },
  { util: "end-3", prop: "3" },
  { util: "end-4", prop: "4" },
  { util: "end-5", prop: "5" },
  { util: "end-6", prop: "6" },
  { util: "end-7", prop: "7" },
  { util: "end-8", prop: "8" },
  { util: "end-9", prop: "9" },
  { util: "end-10", prop: "10" },
  { util: "end-11", prop: "11" },
  { util: "end-12", prop: "12" },
  { util: "end-13", prop: "13" },
  { util: "end-14", prop: "14" },
  { util: "end-15", prop: "15" },
  { util: "end-16", prop: "16" },
  { util: "end-17", prop: "17" },
  { util: "end-auto", prop: "auto" },
];

var gridRowEnds = [{ util: "row", prop: "grid-row-end" }];
var gridRowEndsVariableList = [
  { util: "end-1", prop: "1" },
  { util: "end-2", prop: "2" },
  { util: "end-3", prop: "3" },
  { util: "end-4", prop: "4" },
  { util: "end-5", prop: "5" },
  { util: "end-6", prop: "6" },
  { util: "end-7", prop: "7" },
  { util: "end-8", prop: "8" },
  { util: "end-9", prop: "9" },
  { util: "end-10", prop: "10" },
  { util: "end-11", prop: "11" },
  { util: "end-12", prop: "12" },
  { util: "end-13", prop: "13" },
  { util: "end-14", prop: "14" },
  { util: "end-15", prop: "15" },
  { util: "end-16", prop: "16" },
  { util: "end-17", prop: "17" },
  { util: "end-auto", prop: "auto" },
];

var gridAutoFlows = [{ util: "grid-flow", prop: "grid-auto-flow" }];
var gridAutoFlowsVariableList = [
  { util: "row", prop: "row" },
  { util: "column", prop: "column" },
  { util: "row-dense", prop: "row dense" },
  { util: "col-dense", prop: "column dense" },
];

var gaps = [{ util: "gap", prop: "gap" }];
var columnGaps = [{ util: "gap-x", prop: "column-gap" }];
var rowGaps = [{ util: "gap-y", prop: "row-gap" }];

var justifyContents = [{ util: "justifyC", prop: "justify-content" }];
var alignContents = [{ util: "alignC", prop: "align-content" }];
var justifyContentsVariableList = [
  { util: "start", prop: "flex-start" },
  { util: "end", prop: "flex-end" },
  { util: "center", prop: "center" },
  { util: "between", prop: "space-between" },
  { util: "around", prop: "space-around" },
  { util: "evenly", prop: "space-evenly" },
];

var justifyItems = [{ util: "justifyI", prop: "justify-items" }];
var justifyItemsVariableList = [
  { util: "start", prop: "start" },
  { util: "end", prop: "end" },
  { util: "center", prop: "center" },
  { util: "stretch", prop: "stretch" },
];

var justifySelfs = [{ util: "justifyS", prop: "justify-self" }];
var justifySelfsVariableList = [
  { util: "start", prop: "start" },
  { util: "end", prop: "end" },
  { util: "center", prop: "center" },
  { util: "stretch", prop: "stretch" },
  { util: "auto", prop: "auto" },
];

var alignItems = [{ util: "alignI", prop: "align-items" }];
var alignItemsVariableList = [
  { util: "start", prop: "flex-start" },
  { util: "end", prop: "flex-end" },
  { util: "center", prop: "center" },
  { util: "stretch", prop: "stretch" },
  { util: "baseline", prop: "baseline" },
];

var alignSelfs = [{ util: "alignS", prop: "align-self" }];
var alignSelfsVariableList = [
  { util: "start", prop: "flex-start" },
  { util: "end", prop: "flex-end" },
  { util: "center", prop: "center" },
  { util: "stretch", prop: "stretch" },
  { util: "baseline", prop: "baseline" },
  { util: "auto", prop: "auto" },
];

var placeContents = [{ util: "placeC", prop: "place-content" }];
var placeItems = [{ util: "placeI", prop: "place-items" }];
var placeSelfs = [{ util: "placeS", prop: "place-self" }];

var cursors = [{ util: "cursor", prop: "cursor" }];
var cursorsVariableList = [
  { util: "none", prop: "none" },
  { util: "auto", prop: "auto" },
  { util: "default", prop: "default" },
  { util: "pointer", prop: "pointer" },
  { util: "text", prop: "text" },
  { util: "wait", prop: "wait" },
  { util: "help", prop: "help" },
  { util: "move", prop: "move" },
  { util: "n-resize", prop: "n-resize" },
  { util: "ne-resize", prop: "ne-resize" },
  { util: "e-resize", prop: "e-resize" },
  { util: "se-resize", prop: "se-resize" },
  { util: "s-resize", prop: "s-resize" },
  { util: "sw-resize", prop: "sw-resize" },
  { util: "w-resize", prop: "w-resize" },
  { util: "nw-resize", prop: "nw-resize" },
  { util: "crosshair", prop: "crosshair" },
  { util: "vertical-text", prop: "vertical-text" },
  { util: "cell", prop: "cell" },
  { util: "context-menu", prop: "context-menu" },
  { util: "alias", prop: "alias" },
  { util: "copy", prop: "copy" },
  { util: "progress", prop: "progress" },
  { util: "no-drop", prop: "no-drop" },
  { util: "not-allowed", prop: "not-allowed" },
  { util: "col-resize", prop: "col-resize" },
  { util: "row-resize", prop: "row-resize" },
  { util: "all-scroll", prop: "all-scroll" },
  { util: "zoom-in", prop: "zoom-in" },
  { util: "zoom-out", prop: "zoom-out" },
  { util: "grab", prop: "grab" },
  { util: "grabbing", prop: "grabbing" },
];

var resizes = [{ util: "resize", prop: "resize" }];
var resizesVariableList = [
  { util: "both", prop: "both" },
  { util: "x", prop: "horizontal" },
  { util: "y", prop: "vertical" },
  { util: "none", prop: "none" },
];

var userSelects = [{ util: "select", prop: "user-select" }];
var userSelectsVariableList = [
  { util: "none", prop: "none" },
  { util: "auto", prop: "auto" },
  { util: "text", prop: "text" },
  { util: "all", prop: "all" },
];

var scrollSnapTypes = [{ util: "snap", prop: "scroll-snap-type" }];
var scrollSnapTypesVariableList = [{ util: "none", prop: "none" }];

var HorizontalScrollSnapTypes = [{ util: "snap-x", prop: "scroll-snap-type" }];
var HorizontalScrollSnapTypesVariableList = [
  { util: "none", prop: "x none" },
  { util: "mandatory", prop: "x mandatory" },
  { util: "proximity", prop: "x proximity" },
];

var VerticalScrollSnapTypes = [{ util: "snap-y", prop: "scroll-snap-type" }];
var VerticalScrollSnapTypesVariableList = [
  { util: "none", prop: "y none" },
  { util: "mandatory", prop: "y mandatory" },
  { util: "proximity", prop: "y proximity" },
];

var bothScrollSnapTypes = [{ util: "snap-both", prop: "scroll-snap-type" }];
var bothScrollSnapTypesVariableList = [
  { util: "none", prop: "both none" },
  { util: "mandatory", prop: "both mandatory" },
  { util: "proximity", prop: "both proximity" },
];

var scrollSnapAligns = [{ util: "snap-align", prop: "scroll-snap-align" }];
var scrollSnapAlignsVariableList = [
  { util: "none", prop: "none" },
  { util: "start", prop: "start" },
  { util: "center", prop: "center" },
  { util: "end", prop: "end" },
];

var scrollBehaviors = [{ util: "scroll", prop: "scroll-behavior" }];
var scrollBehaviorsVariableList = [
  { util: "auto", prop: "auto" },
  { util: "smooth", prop: "smooth" },
];

var caretColors = [{ util: "caret", prop: "caret-color" }];

var accentColors = [{ util: "accent", prop: "accent-color" }];

var scrollMargins = [{ util: "scroll-m", prop: "scroll-margin" }];

var scrollMarginTops = [{ util: "scroll-mt", prop: "scroll-margin-top" }];
var scrollMarginRights = [{ util: "scroll-mr", prop: "scroll-margin-right" }];
var scrollMarginBottoms = [{ util: "scroll-mb", prop: "scroll-margin-bottom" }];
var scrollMarginLefts = [{ util: "scroll-ml", prop: "scroll-margin-left" }];

var scrollPaddings = [{ util: "scroll-p", prop: "scroll-padding" }];
var scrollPaddingTops = [{ util: "scroll-pt", prop: "scroll-padding-top" }];
var scrollPaddingRights = [{ util: "scroll-pr", prop: "scroll-padding-right" }];
var scrollPaddingBottoms = [
  { util: "scroll-pb", prop: "scroll-padding-bottom" },
];
var scrollPaddingLefts = [{ util: "scroll-pl", prop: "scroll-padding-left" }];

var strokes = [{ util: "stroke", prop: "stroke" }];

var strokeWidths = [{ util: "stroke-w", prop: "stroke-width" }];
var strokeWidthsVariableList = [
  { util: "none", prop: "0" },
  { util: "thin", prop: "1" },
  { util: "normal", prop: "2" },
  { util: "thick", prop: "3" },
];

var fills = [{ util: "fill", prop: "fill" }];

var roundedBottoms = [
  {
    util: "rounded-b",
    prop1: "border-bottom-left-radius",
    prop2: "border-bottom-right-radius",
  },
];
var roundedLefts = [
  {
    util: "rounded-l",
    prop1: "border-top-left-radius",
    prop2: "border-bottom-left-radius",
  },
];
var roundedRights = [
  {
    util: "rounded-r",
    prop1: "border-top-right-radius",
    prop2: "border-bottom-right-radius",
  },
];
var roundedTopRights = [
  { util: "rounded-tr", prop: "border-top-right-radius" },
];
var roundedTopLefts = [{ util: "rounded-tl", prop: "border-top-left-radius" }];
var roundedBottomRights = [
  { util: "rounded-br", prop: "border-bottom-right-radius" },
];
var roundedBottomLefts = [
  { util: "rounded-bl", prop: "border-bottom-left-radius" },
];

var roundedsVariableList = [
  { util: "none", prop: "0rem" },
  { util: "sm", prop: "2rem" },
  { util: "md", prop: "3rem" },
  { util: "lg", prop: "5rem" },
  { util: "xl", prop: "10rem" },
  { util: "2xl", prop: "15rem" },
  { util: "3xl", prop: "20rem" },
  { util: "4xl", prop: "25rem" },
  { util: "5xl", prop: "30rem" },
  { util: "6xl", prop: "35rem" },
  { util: "circle", prop: "50%" },
];

var borderWidths = [{ util: "border", prop: "border-width" }];
var borderColors = [{ util: "border", prop: "border-color" }];

var borderXWidths = [
  { util: "border-x", prop1: "border-left-width", prop2: "border-right-width" },
];
var borderXColors = [
  { util: "border-x", prop1: "border-left-color", prop2: "border-right-color" },
];

var borderYWidths = [
  { util: "border-y", prop1: "border-top-width", prop2: "border-bottom-width" },
];
var borderYColors = [
  { util: "border-y", prop1: "border-top-color", prop2: "border-bottom-color" },
];

var borderRightWidths = [{ util: "border-r", prop: "border-right-width" }];
var borderRightColors = [{ util: "border-r", prop: "border-right-color" }];

var borderLeftWidths = [{ util: "border-l", prop: "border-left-width" }];
var borderLeftColors = [{ util: "border-l", prop: "border-left-color" }];

var borderTopWidths = [{ util: "border-t", prop: "border-top-width" }];
var borderTopColors = [{ util: "border-t", prop: "border-top-color" }];

var borderBottomWidths = [{ util: "border-b", prop: "border-bottom-width" }];
var borderBottomColors = [{ util: "border-b", prop: "border-bottom-color" }];

var borderVariableList = [
  { util: "0", prop: "0" },
  { util: "1", prop: "1px" },
  { util: "2", prop: "2px" },
  { util: "3", prop: "3px" },
  { util: "4", prop: "4px" },
  { util: "5", prop: "5px" },
  { util: "6", prop: "6px" },
  { util: "7", prop: "7px" },
  { util: "8", prop: "8px" },
];

var borderStyles = [{ util: "border", prop: "border-style" }];
var borderStylesVariableList = [
  { util: "none", prop: "none" },
  { util: "solid", prop: "solid" },
  { util: "dashed", prop: "dashed" },
  { util: "dotted", prop: "dotted" },
  { util: "double", prop: "double" },
  { util: "groove", prop: "groove" },
  { util: "inset", prop: "inset" },
  { util: "outset", prop: "outset" },
  { util: "ridge", prop: "ridge" },
];

var outlineWidths = [{ util: "outline", prop: "outline-width" }];
var outlineColors = [{ util: "outline", prop: "outline-color" }];

var outlineStyles = [{ util: "outline", prop: "outline-style" }];
var outlineStylesVariableList = [
  { util: "none", prop: "none" },
  { util: "solid", prop: "solid" },
  { util: "dashed", prop: "dashed" },
  { util: "dotted", prop: "dotted" },
  { util: "double", prop: "double" },
  { util: "hidden", prop: "hidden" },
];

var outlineOffsets = [{ util: "outline-offset", prop: "outline-offset" }];
var outlineOffsetsVariableList = [
  { util: "none", prop: "0" },
  { util: "1", prop: "1px" },
  { util: "2", prop: "2px" },
  { util: "3", prop: "3px" },
  { util: "4", prop: "4px" },
  { util: "5", prop: "5px" },
  { util: "6", prop: "6px" },
  { util: "7", prop: "7px" },
  { util: "8", prop: "8px" },
];

var backgroundAttachments = [{ util: "bg", prop: "background-attachment" }];
var backgroundAttachmentsVariableList = [
  { util: "scroll", prop: "scroll" },
  { util: "fixed", prop: "fixed" },
  { util: "local", prop: "local" },
];

var backgroundClips = [{ util: "bg", prop: "background-clip" }];
var backgroundClipsVariableList = [
  { util: "clip-border", prop: "border-box" },
  { util: "clip-padding", prop: "padding-box" },
  { util: "clip-content", prop: "content-box" },
  { util: "clip-text", prop: "text" },
];

var backgroundColors = [{ util: "bg", prop: "background-color" }];

var backgroundOrigins = [{ util: "bg", prop: "background-origin" }];
var backgroundOriginsVariableList = [
  { util: "origin-border", prop: "border" },
  { util: "origin-padding", prop: "padding" },
  { util: "origin-content", prop: "content" },
];

var backgroundPositions = [{ util: "bg", prop: "background-position" }];
var backgroundPositionsVariableList = [
  { util: "center", prop: "center" },
  { util: "top", prop: "top" },
  { util: "right", prop: "right" },
  { util: "bottom", prop: "bottom" },
  { util: "left", prop: "left" },
  { util: "top-left", prop: "top left" },
  { util: "top-right", prop: "top right" },
  { util: "bottom-left", prop: "bottom left" },
  { util: "bottom-right", prop: "bottom right" },
];

var backgroundRepeats = [{ util: "bg", prop: "background-repeat" }];
var backgroundRepeatsVariableList = [
  { util: "repeat", prop: "repeat" },
  { util: "repeat-x", prop: "repeat-x" },
  { util: "repeat-y", prop: "repeat-y" },
  { util: "no-repeat", prop: "no-repeat" },
  { util: "repeat-round", prop: "round" },
  { util: "repeat-space", prop: "space" },
];

var backgroundSizes = [{ util: "bg", prop: "background-size" }];
var backgroundSizesVariableList = [
  { util: "auto", prop: "auto" },
  { util: "cover", prop: "cover" },
  { util: "contain", prop: "contain" },
];

var fromGradients = [{ util: "from", prop: "var(--primaryColor)" }];
var toGradients = [{ util: "to", prop: "var(--secondryColor)" }];

var opacities = [{ util: "opacity", prop: "opacity" }];
var opacitiesVariableList = [
  { util: "0", prop: "0" },
  { util: "10", prop: "0.1" },
  { util: "20", prop: "0.2" },
  { util: "30", prop: "0.3" },
  { util: "40", prop: "0.4" },
  { util: "50", prop: "0.5" },
  { util: "60", prop: "0.6" },
  { util: "70", prop: "0.7" },
  { util: "80", prop: "0.8" },
  { util: "90", prop: "0.9" },
  { util: "100", prop: "1" },
];

var mixBlends = [{ util: "mix-blend-mode", prop: "mix-blend-mode" }];
var mixBlendsVariableList = [
  { util: "normal", prop: "normal" },
  { util: "multiply", prop: "multiply" },
  { util: "screen", prop: "screen" },
  { util: "overlay", prop: "overlay" },
  { util: "darken", prop: "darken" },
  { util: "lighten", prop: "lighten" },
  { util: "color-dodge", prop: "color-dodge" },
  { util: "color-burn", prop: "color-burn" },
  { util: "hard-light", prop: "hard-light" },
  { util: "soft-light", prop: "soft-light" },
  { util: "difference", prop: "difference" },
  { util: "exclusion", prop: "exclusion" },
  { util: "hue", prop: "hue" },
  { util: "saturation", prop: "saturation" },
  { util: "color", prop: "color" },
  { util: "luminosity", prop: "luminosity" },
];

var backgroundBlendModes = [
  { util: "bg-blend-mode", prop: "background-blend-mode" },
];

var blurs = [{ util: "blur", prop: "filter" }];
var blursVariableList = [
  { util: "none", prop: "blur(0)" },
  { util: "sm", prop: "blur(4px)" },
  { util: "default", prop: "blur(8px)" },
  { util: "md", prop: "blur(12px)" },
  { util: "lg", prop: "blur(16px)" },
  { util: "xl", prop: "blur(24px)" },
  { util: "2xl", prop: "blur(32px)" },
  { util: "3xl", prop: "blur(48px)" },
  { util: "4xl", prop: "blur(64px)" },
];

var brightnesses = [{ util: "brightness", prop: "filter" }];
var brightnessesVariableList = [
  { util: "0", prop: "brightness(0)" },
  { util: "10", prop: "brightness(0.1)" },
  { util: "20", prop: "brightness(0.2)" },
  { util: "30", prop: "brightness(0.3)" },
  { util: "40", prop: "brightness(0.4)" },
  { util: "50", prop: "brightness(0.5)" },
  { util: "60", prop: "brightness(0.6)" },
  { util: "70", prop: "brightness(0.7)" },
  { util: "80", prop: "brightness(0.8)" },
  { util: "90", prop: "brightness(0.9)" },
  { util: "100", prop: "brightness(1)" },
  { util: "110", prop: "brightness(1.1)" },
  { util: "120", prop: "brightness(1.2)" },
  { util: "130", prop: "brightness(1.3)" },
  { util: "140", prop: "brightness(1.4)" },
  { util: "150", prop: "brightness(1.5)" },
  { util: "160", prop: "brightness(1.6)" },
  { util: "170", prop: "brightness(1.7)" },
  { util: "180", prop: "brightness(1.8)" },
  { util: "190", prop: "brightness(1.9)" },
  { util: "200", prop: "brightness(2)" },
];

var contrasts = [{ util: "contrast", prop: "filter" }];
var contrastsVariableList = [
  { util: "0", prop: "contrast(0)" },
  { util: "10", prop: "contrast(0.1)" },
  { util: "20", prop: "contrast(0.2)" },
  { util: "30", prop: "contrast(0.3)" },
  { util: "40", prop: "contrast(0.4)" },
  { util: "50", prop: "contrast(0.5)" },
  { util: "60", prop: "contrast(0.6)" },
  { util: "70", prop: "contrast(0.7)" },
  { util: "80", prop: "contrast(0.8)" },
  { util: "90", prop: "contrast(0.9)" },
  { util: "100", prop: "contrast(1)" },
  { util: "110", prop: "contrast(1.1)" },
  { util: "120", prop: "contrast(1.2)" },
  { util: "130", prop: "contrast(1.3)" },
  { util: "140", prop: "contrast(1.4)" },
  { util: "150", prop: "contrast(1.5)" },
  { util: "160", prop: "contrast(1.6)" },
  { util: "170", prop: "contrast(1.7)" },
  { util: "180", prop: "contrast(1.8)" },
  { util: "190", prop: "contrast(1.9)" },
  { util: "200", prop: "contrast(2)" },
];

var grayscales = [{ util: "grayscale", prop: "filter" }];
var grayscalesVariableList = [
  { util: "0", prop: "grayscale(0)" },
  { util: "10", prop: "grayscale(10%)" },
  { util: "20", prop: "grayscale(20%)" },
  { util: "30", prop: "grayscale(30%)" },
  { util: "40", prop: "grayscale(40%)" },
  { util: "50", prop: "grayscale(50%)" },
  { util: "60", prop: "grayscale(60%)" },
  { util: "70", prop: "grayscale(70%)" },
  { util: "80", prop: "grayscale(80%)" },
  { util: "90", prop: "grayscale(90%)" },
  { util: "100", prop: "grayscale(100%)" },
];

var hurRotates = [{ util: "hue-rotate", prop: "filter" }];
var hurRotatesVariableList = [
  { util: "0", prop: "hue-rotate(0deg)" },
  { util: "10", prop: "hue-rotate(10deg)" },
  { util: "20", prop: "hue-rotate(20deg)" },
  { util: "30", prop: "hue-rotate(30deg)" },
  { util: "40", prop: "hue-rotate(40deg)" },
  { util: "50", prop: "hue-rotate(50deg)" },
  { util: "60", prop: "hue-rotate(60deg)" },
  { util: "70", prop: "hue-rotate(70deg)" },
  { util: "80", prop: "hue-rotate(80deg)" },
  { util: "90", prop: "hue-rotate(90deg)" },
  { util: "100", prop: "hue-rotate(100deg)" },
];

var translateXs = [{ util: "translate-x", prop: "transform" }];
var translateXsVariableList = [
  { util: "0", prop: "translateX(0rem)" },
  { util: "0.1", prop: "translateX(0.125rem)" },
  { util: "0.2", prop: "translateX(0.25rem)" },
  { util: "0.3", prop: "translateX(0.375rem)" },
  { util: "0.5", prop: "translateX(0.5rem)" },
  { util: "0.6", prop: "translateX(0.625rem)" },
  { util: "0.7", prop: "translateX(0.75rem)" },
  { util: "0.8", prop: "translateX(0.875rem)" },
  { util: "1", prop: "translateX(1rem)" },
  { util: "1.2", prop: "translateX(1.125rem)" },
  { util: "1.4", prop: "translateX(1.25rem)" },
  { util: "1.5", prop: "translateX(1.5rem)" },
  { util: "1.7", prop: "translateX(1.75rem)" },
  { util: "2", prop: "translateX(2rem)" },
  { util: "2.2", prop: "translateX(2.25rem)" },
  { util: "2.5", prop: "translateX(2.5rem)" },
  { util: "2.7", prop: "translateX(2.75rem)" },
  { util: "3", prop: "translateX(3rem)" },
  { util: "3.5", prop: "translateX(3.5rem)" },
  { util: "4", prop: "translateX(4rem)" },
  { util: "5", prop: "translateX(5rem)" },
  { util: "6", prop: "translateX(6rem)" },
  { util: "7", prop: "translateX(7rem)" },
  { util: "8", prop: "translateX(8rem)" },
  { util: "9", prop: "translateX(9rem)" },
  { util: "10", prop: "translateX(10rem)" },
  { util: "11", prop: "translateX(11rem)" },
  { util: "12", prop: "translateX(12rem)" },
  { util: "13", prop: "translateX(13rem)" },
  { util: "14", prop: "translateX(14rem)" },
  { util: "15", prop: "translateX(15rem)" },
  { util: "16", prop: "translateX(16rem)" },
  { util: "18", prop: "translateX(18rem)" },
  { util: "20", prop: "translateX(20rem)" },
  { util: "22", prop: "translateX(22rem)" },
  { util: "24", prop: "translateX(24rem)" },
];
var percentageTranslateXs = [
  { util: "10-100", prop: "translateX(10%)" },
  { util: "20-100", prop: "translateX(20%)" },
  { util: "30-100", prop: "translateX(30%)" },
  { util: "40-100", prop: "translateX(40%)" },
  { util: "50-100", prop: "translateX(50%)" },
  { util: "60-100", prop: "translateX(60%)" },
  { util: "70-100", prop: "translateX(70%)" },
  { util: "80-100", prop: "translateX(80%)" },
  { util: "90-100", prop: "translateX(90%)" },
  { util: "100-100", prop: "translateX(100%)" },
];
var translateYs = [{ util: "translate-y", prop: "transform" }];
var translateYsVariableList = [
  { util: "0", prop: "translateY(0rem)" },
  { util: "0.1", prop: "translateY(0.125rem)" },
  { util: "0.2", prop: "translateY(0.25rem)" },
  { util: "0.3", prop: "translateY(0.375rem)" },
  { util: "0.5", prop: "translateY(0.5rem)" },
  { util: "0.6", prop: "translateY(0.625rem)" },
  { util: "0.7", prop: "translateY(0.75rem)" },
  { util: "0.8", prop: "translateY(0.875rem)" },
  { util: "1", prop: "translateY(1rem)" },
  { util: "1.2", prop: "translateY(1.125rem)" },
  { util: "1.4", prop: "translateY(1.25rem)" },
  { util: "1.5", prop: "translateY(1.5rem)" },
  { util: "1.7", prop: "translateY(1.75rem)" },
  { util: "2", prop: "translateY(2rem)" },
  { util: "2.2", prop: "translateY(2.25rem)" },
  { util: "2.5", prop: "translateY(2.5rem)" },
  { util: "2.7", prop: "translateY(2.75rem)" },
  { util: "3", prop: "translateY(3rem)" },
  { util: "3.5", prop: "translateY(3.5rem)" },
  { util: "4", prop: "translateY(4rem)" },
  { util: "5", prop: "translateY(5rem)" },
  { util: "6", prop: "translateY(6rem)" },
  { util: "7", prop: "translateY(7rem)" },
  { util: "8", prop: "translateY(8rem)" },
  { util: "9", prop: "translateY(9rem)" },
  { util: "10", prop: "translateY(10rem)" },
  { util: "11", prop: "translateY(11rem)" },
  { util: "12", prop: "translateY(12rem)" },
  { util: "13", prop: "translateY(13rem)" },
  { util: "14", prop: "translateY(14rem)" },
  { util: "15", prop: "translateY(15rem)" },
  { util: "16", prop: "translateY(16rem)" },
  { util: "18", prop: "translateY(18rem)" },
  { util: "20", prop: "translateY(20rem)" },
  { util: "22", prop: "translateY(22rem)" },
  { util: "24", prop: "translateY(24rem)" },
];
var percentageTranslateYs = [
  { util: "10-100", prop: "translateY(10%)" },
  { util: "20-100", prop: "translateY(20%)" },
  { util: "30-100", prop: "translateY(30%)" },
  { util: "40-100", prop: "translateY(40%)" },
  { util: "50-100", prop: "translateY(50%)" },
  { util: "60-100", prop: "translateY(60%)" },
  { util: "70-100", prop: "translateY(70%)" },
  { util: "80-100", prop: "translateY(80%)" },
  { util: "90-100", prop: "translateY(90%)" },
  { util: "100-100", prop: "translateY(100%)" },
];
var inverts = [{ util: "invert", prop: "filter" }];
var invertsVariableList = [
  { util: "0", prop: "invert(0)" },
  { util: "10", prop: "invert(0.1)" },
  { util: "20", prop: "invert(0.2)" },
  { util: "30", prop: "invert(0.3)" },
  { util: "40", prop: "invert(0.4)" },
  { util: "50", prop: "invert(0.5)" },
  { util: "60", prop: "invert(0.6)" },
  { util: "70", prop: "invert(0.7)" },
  { util: "80", prop: "invert(0.8)" },
  { util: "90", prop: "invert(0.9)" },
  { util: "100", prop: "invert(1)" },
];

var saturates = [{ util: "saturate", prop: "filter" }];
var saturatesVariableList = [
  { util: "0", prop: "saturate(0)" },
  { util: "10", prop: "saturate(0.1)" },
  { util: "20", prop: "saturate(0.2)" },
  { util: "30", prop: "saturate(0.3)" },
  { util: "40", prop: "saturate(0.4)" },
  { util: "50", prop: "saturate(0.5)" },
  { util: "60", prop: "saturate(0.6)" },
  { util: "70", prop: "saturate(0.7)" },
  { util: "80", prop: "saturate(0.8)" },
  { util: "90", prop: "saturate(0.9)" },
  { util: "100", prop: "saturate(1)" },
  { util: "200", prop: "saturate(2)" },
];

var scales = [{ util: "scale", prop: "transform" }];
var scalesVariableList = [
  { util: "0", prop: "scale(0)" },
  { util: "25", prop: "scale(0.25)" },
  { util: "50", prop: "scale(0.5)" },
  { util: "75", prop: "scale(0.75)" },
  { util: "100", prop: "scale(1)" },
  { util: "150", prop: "scale(1.5)" },
  { util: "200", prop: "scale(2)" },
];

var scaleXs = [{ util: "scale-x", prop: "transform" }];
var scaleXsVariableList = [
  { util: "0", prop: "scaleX(0)" },
  { util: "25", prop: "scaleX(0.25)" },
  { util: "50", prop: "scaleX(0.5)" },
  { util: "75", prop: "scaleX(0.75)" },
  { util: "100", prop: "scaleX(1)" },
  { util: "150", prop: "scaleX(1.5)" },
  { util: "200", prop: "scaleX(2)" },
];

var scaleYs = [{ util: "scale-y", prop: "transform" }];
var scaleYsVariableList = [
  { util: "0", prop: "scaleY(0)" },
  { util: "25", prop: "scaleY(0.25)" },
  { util: "50", prop: "scaleY(0.5)" },
  { util: "75", prop: "scaleY(0.75)" },
  { util: "100", prop: "scaleY(1)" },
  { util: "150", prop: "scaleY(1.5)" },
  { util: "200", prop: "scaleY(2)" },
];

var rotates = [{ util: "rotate", prop: "transform" }];
var rotatesVariableList = [
  { util: "0", prop: "rotate(0deg)" },
  { util: "1", prop: "rotate(1deg)" },
  { util: "3", prop: "rotate(3deg)" },
  { util: "5", prop: "rotate(5deg)" },
  { util: "12", prop: "rotate(12deg)" },
  { util: "30", prop: "rotate(30deg)" },
  { util: "45", prop: "rotate(45deg)" },
  { util: "60", prop: "rotate(60deg)" },
  { util: "90", prop: "rotate(90deg)" },
  { util: "180", prop: "rotate(180deg)" },
];

var skewXs = [{ util: "skew-x", prop: "transform" }];
var skewXsVariableList = [
  { util: "0", prop: "skewX(0deg)" },
  { util: "1", prop: "skewX(1deg)" },
  { util: "3", prop: "skewX(3deg)" },
  { util: "6", prop: "skewX(6deg)" },
  { util: "12", prop: "skewX(12deg)" },
  { util: "30", prop: "skewX(30deg)" },
  { util: "45", prop: "skewX(45deg)" },
  { util: "60", prop: "skewX(60deg)" },
  { util: "90", prop: "skewX(90deg)" },
  { util: "180", prop: "skewX(180deg)" },
];

var skewYs = [{ util: "skew-y", prop: "transform" }];
var skewYsVariableList = [
  { util: "0", prop: "skewY(0deg)" },
  { util: "1", prop: "skewY(1deg)" },
  { util: "3", prop: "skewY(3deg)" },
  { util: "6", prop: "skewY(6deg)" },
  { util: "12", prop: "skewY(12deg)" },
  { util: "30", prop: "skewY(30deg)" },
  { util: "45", prop: "skewY(45deg)" },
  { util: "60", prop: "skewY(60deg)" },
  { util: "90", prop: "skewY(90deg)" },
  { util: "180", prop: "skewY(180deg)" },
];

var transitions = [{ util: "transition", prop: "transition-property" }];
var transitionsVariableList = [
  { util: "none", prop: "none" },
  { util: "all", prop: "all" },
  {
    util: "color",
    prop: "color , background-color , border-color , text-decoration-color , fill , stroke",
  },
  { util: "opacity", prop: "opacity" },
  { util: "shadow", prop: "box-shadow" },
  { util: "transform", prop: "transform" },
  { util: "scale", prop: "scale" },
  { util: "rotate", prop: "rorate" },
];

var transitionDurations = [{ util: "duration", prop: "transition-duration" }];
var transitionDurationsVariableList = [
  { util: "default", prop: "0.4s" },
  { util: "fast", prop: "0.2s" },
  { util: "slow", prop: "0.6s" },
];

var transitionFunctions = [{ util: "", prop: "transition-timing-function" }];
var transitionFunctionsVariableList = [
  { util: "ease", prop: "ease" },
  { util: "linear", prop: "linear" },
  { util: "ease-in", prop: "ease-in" },
  { util: "ease-out", prop: "ease-out" },
  { util: "ease-in-out", prop: "ease-in-out" },
  { util: "step-start", prop: "step-start" },
  { util: "step-end", prop: "step-end" },
];

var transitionDelays = [{ util: "delay", prop: "transition-delay" }];
var transitionDelaysVariableList = [
  { util: "default", prop: "0s" },
  { util: "fast", prop: "0.1s" },
  { util: "slow", prop: "0.4s" },
];

var aspectratios = [{ util: "aspect", prop: "aspect-ratio" }];
var aspectratiosVariableList = [
  { util: "auto", prop: "auto" },
  { util: "square", prop: "1" },
  { util: "16", prop: "16/9" },
  { util: "0", prop: "1/2" },
];

var boxDecorationBreaks = [{ util: "boxD", prop: "box-decoration-break" }];
var boxDecorationBreaksVariableList = [
  { util: "clone", prop: "clone" },
  { util: "slice", prop: "slice" },
];

var displays = [{ util: "display", prop: "display" }];
var displaysVariableList = [
  { util: "block", prop: "block" },
  { util: "inline-block", prop: "inline-block" },
  { util: "inline", prop: "inline" },
  { util: "flex", prop: "flex" },
  { util: "inline-flex", prop: "inline-flex" },
  { util: "table", prop: "table" },
  { util: "inline-table", prop: "inline-table" },
  { util: "table-caption", prop: "table-caption" },
  { util: "table-cell", prop: "table-cell" },
  { util: "table-column", prop: "table-column" },
  { util: "table-column-group", prop: "table-column-group" },
  { util: "table-footer-group", prop: "table-footer-group" },
  { util: "table-row", prop: "table-row" },
  { util: "table-root", prop: "table-root" },
  { util: "grid", prop: "grid" },
  { util: "inline-grid", prop: "inline-grid" },
  { util: "contents", prop: "contents" },
  { util: "list-item", prop: "list-item" },
  { util: "none", prop: "none" },
];

var floats = [{ util: "float", prop: "float" }];
var floatsVariableList = [
  { util: "left", prop: "left" },
  { util: "right", prop: "right" },
  { util: "none", prop: "none" },
];

var clears = [{ util: "clear", prop: "clear" }];
var clearsVariableList = [
  { util: "left", prop: "left" },
  { util: "right", prop: "right" },
  { util: "both", prop: "both" },
  { util: "none", prop: "none" },
];

var objectFits = [{ util: "objectF", prop: "object-fit" }];
var objectFitsVariableList = [
  { util: "fill", prop: "fill" },
  { util: "contain", prop: "contain" },
  { util: "cover", prop: "cover" },
  { util: "none", prop: "none" },
  { util: "scale-down", prop: "scale-down" },
];

var objectPositions = [{ util: "objectP", prop: "object-position" }];
var objectPositionsVariableList = [
  { util: "center", prop: "center" },
  { util: "top", prop: "top" },
  { util: "bottom", prop: "bottom" },
  { util: "left", prop: "left" },
  { util: "right", prop: "right" },
  { util: "left-bottom", prop: "left bottom" },
  { util: "left-top", prop: "left top" },
  { util: "right-bottom", prop: "right bottom" },
  { util: "right-top", prop: "right top" },
];

var overflows = [{ util: "overflow", prop: "overflow" }];
var overflowsVariableList = [
  { util: "auto", prop: "auto" },
  { util: "hidden", prop: "hidden" },
  { util: "scroll", prop: "scroll" },
  { util: "visible", prop: "visible" },
];

var overflowXs = [{ util: "overflowX", prop: "overflow-x" }];
var overflowYs = [{ util: "overflowY", prop: "overflow-y" }];
export const lineHeight = sizeGenerator(lineHeights, lineHeightVariableList);
export const listType = sizeGenerator(listTypes, listTypesVariableList);
export const listStylePosition = sizeGenerator(
  listStyPositions,
  listStyPositionsVariableList
);

var overScrollBehaviors = [{ util: "overscroll", prop: "overflow-behavior" }];
var overScrollBehaviorsVariableList = [
  { util: "auto", prop: "auto" },
  { util: "contain", prop: "contain" },
  { util: "none", prop: "none" },
];

var overScrollBehaviorXs = [
  { util: "overscrollX", prop: "overscroll-behavior-x" },
];
var overScrollBehaviorYs = [
  { util: "overscrollY", prop: "overscroll-behavior-y" },
];

var positions = [{ util: "position", prop: "position" }];
var positionsVariableList = [
  { util: "static", prop: "static" },
  { util: "relative", prop: "relative" },
  { util: "absolute", prop: "absolute" },
  { util: "fixed", prop: "fixed" },
  { util: "sticky", prop: "sticky" },
];

var tops = [{ util: "top", prop: "top" }];
var rights = [{ util: "right", prop: "right" }];
var bottoms = [{ util: "bottom", prop: "bottom" }];
var lefts = [{ util: "left", prop: "left" }];

var flexBasises = [{ util: "basis", prop: "flex-basis" }];

var flexDirections = [{ util: "flex", prop: "flex-direction" }];
var flexDirectionsVariableList = [
  { util: "row", prop: "row" },
  { util: "row-reverse", prop: "row-reverse" },
  { util: "column", prop: "column" },
  { util: "column-reverse", prop: "column-reverse" },
];

var flexWraps = [{ util: "flex", prop: "flex-wrap" }];
var flexWrapsVariableList = [
  { util: "nowrap", prop: "nowrap" },
  { util: "wrap", prop: "wrap" },
  { util: "wrap-reverse", prop: "wrap-reverse" },
];

var flexes = [{ util: "flex", prop: "flex" }];
var flexesVariableList = [
  { util: "auto", prop: "1 1 auto" },
  { util: "none", prop: "0 0 auto" },
  { util: "initial", prop: "0 1 auto" },
];

var flexGrows = [{ util: "grow", prop: "flex-grow" }];
var flexShrinks = [{ util: "shrink", prop: "flex-shrink" }];
var flexGrowsVariableList = [
  { util: "0", prop: "0" },
  { util: "1", prop: "1" },
];

var orders = [{ util: "order", prop: "order" }];
var ordersVariableList = [
  { util: "first", prop: "-9999" },
  { util: "last", prop: "9999" },
  { util: "none", prop: "0" },
  { util: "1", prop: "1" },
  { util: "2", prop: "2" },
  { util: "3", prop: "3" },
  { util: "4", prop: "4" },
  { util: "5", prop: "5" },
  { util: "6", prop: "6" },
  { util: "7", prop: "7" },
  { util: "8", prop: "8" },
  { util: "9", prop: "9" },
  { util: "10", prop: "10" },
  { util: "11", prop: "11" },
  { util: "12", prop: "12" },
  { util: "13", prop: "13" },
  { util: "14", prop: "14" },
  { util: "15", prop: "15" },
  { util: "16", prop: "16" },
];

export const textAlign = sizeGenerator(textAligns, textAlignsVariableList);
export const textColor = sizeGenerator(textColors, textColorsVariableList);
export const textDecoration = sizeGenerator(
  textDecorations,
  textDecorationsVariableList
);
export const textDecorationColor = sizeGenerator(
  textDecorationColors,
  textDecorationColorsVariableList
);
export const textDecorationStyles = sizeGenerator(
  decorationStyles,
  decorationStylesVariableList
);
export const textDecorationThickness = sizeGenerator(
  decorationThicknesses,
  decorationThicknessesVariableList
);

export const textUnderlineOffset = sizeGenerator(
  textUnderlineOffsets,
  textUnderlineOffsetsVariableList
);

export const textTransform = sizeGenerator(
  textTransforms,
  textTransformsVariableList
);
export const textOverflow = sizeGenerator(
  textOverflows,
  textOverflowsVariableList
);

export const indent = sizeGenerator(indents, remClasses);
export const verticalAlign = sizeGenerator(
  verticalAligns,
  verticalAlignsVariableList
);
export const whiteSpace = sizeGenerator(whiteSpaces, whiteSpacesVariableList);
export const wordBreak = sizeGenerator(wordBreaks, wordBreaksVariableList);

export const fontStyle = [
  {
    class: "italic",
    properties: "font-style : italic ;",
  },
  {
    class: "not-italic",
    properties: "font-style : normal ;",
  },
];

export const padding = sizeGenerator(paddings, remClasses);
export const horizontalPadding = sizeGenerator2(horizontalPaddings, remClasses);
export const verticalPadding = sizeGenerator2(verticalalPaddings, remClasses);
export const paddingTop = sizeGenerator(paddingsTop, remClasses);
export const paddingBottom = sizeGenerator(paddingsBottom, remClasses);
export const paddingRight = sizeGenerator(paddingsRight, remClasses);
export const paddingLeft = sizeGenerator(paddingsLeft, remClasses);

export const margin = sizeGenerator(margins, remClasses);
export const horizontalMargin = sizeGenerator2(horizontalMargins, remClasses);
export const verticalMargin = sizeGenerator2(verticalMargins, remClasses);
export const marginTop = sizeGenerator(marginsTop, remClasses);
export const marginBottom = sizeGenerator(marginsBottom, remClasses);
export const marginRight = sizeGenerator(marginsRight, remClasses);
export const marginLeft = sizeGenerator(marginsLeft, remClasses);

export const rounded = sizeGenerator(roundeds, roundedsVariableList);
export const roundedTop = sizeGenerator2(roundedTops, roundedsVariableList);
export const roundedBottom = sizeGenerator2(
  roundedBottoms,
  roundedsVariableList
);
export const roundedLeft = sizeGenerator2(roundedLefts, roundedsVariableList);
export const roundedRight = sizeGenerator2(roundedRights, roundedsVariableList);
export const roundedTopRight = sizeGenerator(
  roundedTopRights,
  roundedsVariableList
);
export const roundedTopLeft = sizeGenerator(
  roundedTopLefts,
  roundedsVariableList
);
export const roundedBottomRight = sizeGenerator(
  roundedBottomRights,
  remClasses
);
export const roundedBottomLeft = sizeGenerator(roundedBottomLefts, remClasses);

export const borderWidth = sizeGenerator(borderWidths, borderVariableList);
export const borderXWidth = sizeGenerator2(borderXWidths, borderVariableList);
export const borderYWidth = sizeGenerator2(borderYWidths, borderVariableList);
export const borderRightWidth = sizeGenerator(
  borderRightWidths,
  borderVariableList
);
export const borderLeftWidth = sizeGenerator(
  borderLeftWidths,
  borderVariableList
);
export const borderTopWidth = sizeGenerator(
  borderTopWidths,
  borderVariableList
);
export const borderBottomWidth = sizeGenerator(
  borderBottomWidths,
  borderVariableList
);

export const borderColor = sizeGenerator(borderColors, textColorsVariableList);
export const borderXColor = sizeGenerator2(
  borderXColors,
  textColorsVariableList
);
export const borderYColor = sizeGenerator2(
  borderYColors,
  textColorsVariableList
);
export const borderRightColor = sizeGenerator(
  borderRightColors,
  textColorsVariableList
);
export const borderLeftColor = sizeGenerator(
  borderLeftColors,
  textColorsVariableList
);
export const borderTopColor = sizeGenerator(
  borderTopColors,
  textColorsVariableList
);
export const borderBottomColor = sizeGenerator(
  borderBottomColors,
  textColorsVariableList
);
export const borderStyle = sizeGenerator(
  borderStyles,
  borderStylesVariableList
);
export const outlineStyle = sizeGenerator(
  outlineStyles,
  outlineStylesVariableList
);
export const outlineWidth = sizeGenerator(outlineWidths, borderVariableList);
export const outlineColor = sizeGenerator(
  outlineColors,
  textColorsVariableList
);
export const outlineOffset = sizeGenerator(
  outlineOffsets,
  outlineOffsetsVariableList
);

export const backgroundAttachment = sizeGenerator(
  backgroundAttachments,
  backgroundAttachmentsVariableList
);

export const backgroundClip = sizeGenerator(
  backgroundClips,
  backgroundClipsVariableList
);
export const backgroundColor = sizeGenerator(
  backgroundColors,
  textColorsVariableList
);

export const backgroundOrigin = sizeGenerator(
  backgroundOrigins,
  backgroundOriginsVariableList
);
export const backgroundPosition = sizeGenerator(
  backgroundPositions,
  backgroundPositionsVariableList
);
export const backgroundRepeat = sizeGenerator(
  backgroundRepeats,
  backgroundRepeatsVariableList
);

export const backgroundSize = sizeGenerator(
  backgroundSizes,
  backgroundSizesVariableList
);

export const backgroundImage = [
  {
    class: "gradient-none",
    properties: `background-image: none;`,
  },
  {
    class: "gradient-to-top",
    properties:
      "background-image: linear-gradient(to top,var(--firstColor),var(--secondColor));",
  },
  {
    class: "gradient-to-bottom",
    properties:
      "background-image: linear-gradient(to bottom,var(--firstColor),var(--secondColor));",
  },
  {
    class: "gradient-to-left",
    properties:
      "background-image: linear-gradient(to left,var(--firstColor),var(--secondColor));",
  },
  {
    class: "gradient-to-right",

    properties:
      "background-image: linear-gradient(to right,var(--firstColor),var(--secondColor));",
  },
  {
    class: "gradient-to-top-right",
    properties:
      "background-image: linear-gradient(to top right,var(--firstColor),var(--secondColor));",
  },
  {
    class: "gradient-to-top-left",
    properties:
      "background-image: linear-gradient(to top left,var(--firstColor),var(--secondColor));",
  },
  {
    class: "gradient-to-bottom-right",
    properties:
      "background-image: linear-gradient(to bottom right,var(--firstColor),var(--secondColor));",
  },
  {
    class: "gradient-to-bottom-left",
    properties:
      "background-image: linear-gradient(to bottom left,var(--firstColor),var(--secondColor));",
  },
];

export const fromGradient = sizeGenerator(
  fromGradients,
  textColorsVariableList
);
export const toGradient = sizeGenerator(toGradients, textColorsVariableList);

export const shadow = [
  { size: "sm", prop: "0 3px 15px 0" },
  { size: "md", prop: "0 6px 20px 0" },
  { size: "lg", prop: "0 10px 30px 0" },
  { size: "xl", prop: "0 20px 40px 0" },
  { size: "2xl", prop: "0 30px 50px 0" },
  { size: "3xl", prop: "0 40px 80px 0" },
].map((size) => {
  return textColorsVariableList.map((color) => {
    return {
      class: `shadow-${size.size}-${color.util}`,
      properties: `box-shadow: ${size.prop} ${color.prop};`,
    };
  });
});

export const opacity = sizeGenerator(opacities, opacitiesVariableList);
export const mixBlend = sizeGenerator(mixBlends, mixBlendsVariableList);
export const backgroundBlendMode = sizeGenerator(
  backgroundBlendModes,
  mixBlendsVariableList
);

export const blur = sizeGenerator(blurs, blursVariableList);
export const brightness = sizeGenerator(brightnesses, brightnessesVariableList);
export const contrast = sizeGenerator(contrasts, contrastsVariableList);
export const grayscale = sizeGenerator(grayscales, grayscalesVariableList);
export const hurRotate = sizeGenerator(hurRotates, hurRotatesVariableList);
export const invert = sizeGenerator(inverts, invertsVariableList);
export const saturate = sizeGenerator(saturates, saturatesVariableList);
export const scale = sizeGenerator(scales, scalesVariableList);
export const scaleX = sizeGenerator(scaleXs, scaleXsVariableList);
export const scaleY = sizeGenerator(scaleYs, scaleYsVariableList);
export const rotate = sizeGenerator(rotates, rotatesVariableList);
export const translateX = sizeGenerator(translateXs, translateXsVariableList);
export const translateY = sizeGenerator(translateYs, translateYsVariableList);
export const percentageTranslateX = sizeGenerator(
  translateXs,
  percentageTranslateXs
);
export const percentageTranslateY = sizeGenerator(
  translateYs,
  percentageTranslateYs
);

export const skewX = sizeGenerator(skewXs, skewXsVariableList);
export const skewY = sizeGenerator(skewYs, skewYsVariableList);
export const transition = sizeGenerator(transitions, transitionsVariableList);
export const transitionDuration = sizeGenerator(
  transitionDurations,
  transitionDurationsVariableList
);

export const transitionFunction = sizeGenerator(
  transitionFunctions,
  transitionFunctionsVariableList
);

export const transitionDelay = sizeGenerator(
  transitionDelays,
  transitionDelaysVariableList
);

export const animations = [
  {
    class: "bounce",
    propertie1: "bounce 2s cubic-bezier infinite;",
    propertie2: `@keyframes bounce {
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
}`,
  },
  {
    class: "flash",
    propertie1: "flash 2s infinite;",
    propertie2: `@keyframes flash {
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
}
`,
  },
];
export const aspectratio = sizeGenerator(
  aspectratios,
  aspectratiosVariableList
);
export const boxDecorationBreak = sizeGenerator(
  boxDecorationBreaks,
  boxDecorationBreaksVariableList
);
export const display = sizeGenerator(displays, displaysVariableList);
export const float = sizeGenerator(floats, floatsVariableList);
export const clear = sizeGenerator(clears, clearsVariableList);
export const objectFit = sizeGenerator(objectFits, objectFitsVariableList);
export const objectPosition = sizeGenerator(
  objectPositions,
  objectPositionsVariableList
);
export const overflow = sizeGenerator(overflows, overflowsVariableList);
export const overflowX = sizeGenerator(overflowXs, overflowsVariableList);
export const overflowY = sizeGenerator(overflowYs, overflowsVariableList);
export const overScrollBehavior = sizeGenerator(
  overScrollBehaviors,
  overScrollBehaviorsVariableList
);
export const overScrollBehaviorX = sizeGenerator(
  overScrollBehaviorXs,
  overScrollBehaviorsVariableList
);
export const overScrollBehaviorY = sizeGenerator(
  overScrollBehaviorYs,
  overScrollBehaviorsVariableList
);
export const position = sizeGenerator(positions, positionsVariableList);
export const top = sizeGenerator(tops, remClasses);
export const right = sizeGenerator(rights, remClasses);
export const left = sizeGenerator(lefts, remClasses);
export const bottom = sizeGenerator(bottoms, remClasses);
export const flexBasis = sizeGenerator(flexBasises, percentageClasses);
export const flexDirection = sizeGenerator(
  flexDirections,
  flexDirectionsVariableList
);
export const flexWrap = sizeGenerator(flexWraps, flexWrapsVariableList);
export const flex = sizeGenerator(flexes, flexesVariableList);
export const flexGrow = sizeGenerator(flexGrows, flexGrowsVariableList);
export const flexShrink = sizeGenerator(flexShrinks, flexGrowsVariableList);
export const order = sizeGenerator(orders, ordersVariableList);

export const gridTemplateColumn = sizeGenerator(
  gridTemplateColumns,
  gridTemplateColumnsVariableList
);

export const gridColumn = sizeGenerator(gridColumns, gridColumnsVariableList);
export const gridColumnStart = sizeGenerator(
  gridColumnStarts,
  gridColumnStartsVariableList
);
export const gridColumnEnd = sizeGenerator(
  gridColumnEnds,
  gridColumnEndsVariableList
);

export const gridtemplateRow = sizeGenerator(
  gridTemplateRows,
  gridTemplateRowsVariableList
);
export const gridRow = sizeGenerator(gridRows, gridRowsVariableList);
export const gridRowStart = sizeGenerator(
  gridRowStarts,
  gridRowStartsVariableList
);
export const gridRowEnd = sizeGenerator(gridRowEnds, gridRowEndsVariableList);
export const gridAutoFlow = sizeGenerator(
  gridAutoFlows,
  gridAutoFlowsVariableList
);

export const gap = sizeGenerator(gaps, remClasses);
export const columnGap = sizeGenerator(columnGaps, remClasses);
export const rowGap = sizeGenerator(rowGaps, remClasses);

export const justifyContent = sizeGenerator(
  justifyContents,
  justifyContentsVariableList
);
export const justifyItem = sizeGenerator(
  justifyItems,
  justifyItemsVariableList
);
export const justifySelf = sizeGenerator(
  justifySelfs,
  justifySelfsVariableList
);

export const alignContent = sizeGenerator(
  alignContents,
  justifyContentsVariableList
);
export const alignItem = sizeGenerator(alignItems, alignItemsVariableList);
export const alignSelf = sizeGenerator(alignSelfs, alignSelfsVariableList);

export const placeContent = sizeGenerator(
  placeContents,
  justifyContentsVariableList
);
export const placeItem = sizeGenerator(placeItems, justifyItemsVariableList);
export const placeSelf = sizeGenerator(placeSelfs, justifySelfsVariableList);
export const cursor = sizeGenerator(cursors, cursorsVariableList);
export const resize = sizeGenerator(resizes, resizesVariableList);
export const userSelect = sizeGenerator(userSelects, userSelectsVariableList);

export const scrollSnapType = sizeGenerator(
  scrollSnapTypes,
  scrollSnapTypesVariableList
);
export const HorizontalScrollSnapType = sizeGenerator(
  HorizontalScrollSnapTypes,
  HorizontalScrollSnapTypesVariableList
);
export const VerticalScrollSnapType = sizeGenerator(
  VerticalScrollSnapTypes,
  VerticalScrollSnapTypesVariableList
);
export const bothScrollSnapType = sizeGenerator(
  bothScrollSnapTypes,
  bothScrollSnapTypesVariableList
);
export const scrollSnapAlign = sizeGenerator(
  scrollSnapAligns,
  scrollSnapAlignsVariableList
);
export const scrollBehavior = sizeGenerator(
  scrollBehaviors,
  scrollBehaviorsVariableList
);

export const caretColor = sizeGenerator(caretColors, textColorsVariableList);
export const accentColor = sizeGenerator(accentColors, textColorsVariableList);

export const scrollMargin = sizeGenerator(scrollMargins, remClasses);
export const scrollMarginTop = sizeGenerator(scrollMarginTops, remClasses);
export const scrollMarginRight = sizeGenerator(scrollMarginRights, remClasses);
export const scrollMarginBottom = sizeGenerator(
  scrollMarginBottoms,
  remClasses
);
export const scrollMarginLeft = sizeGenerator(scrollMarginLefts, remClasses);
export const scrollPadding = sizeGenerator(scrollPaddings, remClasses);
export const scrollPaddingTop = sizeGenerator(scrollPaddingTops, remClasses);
export const scrollPaddingRight = sizeGenerator(
  scrollPaddingRights,
  remClasses
);
export const scrollPaddingBottom = sizeGenerator(
  scrollPaddingBottoms,
  remClasses
);
export const scrollPaddingLeft = sizeGenerator(scrollPaddingLefts, remClasses);
export const stroke = sizeGenerator(strokes, textColorsVariableList);
export const strokeWidth = sizeGenerator(
  strokeWidths,
  strokeWidthsVariableList
);

export const fill = sizeGenerator(fills, textColorsVariableList);

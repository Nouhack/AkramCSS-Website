import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import Introduction from "../Components/subComponents/Introduction";

type Props = {};

export default (props: Props) => {
  return (
    <>
      <Introduction
        id="installsasscompiler"
        title="Install sass compiler"
        description="all the work is done via sass files , so the first thing we need to do is install sass compiler or you can work with sass vscode plugin:"
      />

      <CopyBlock
        text={`npm install sass`}
        language={"bash"}
        theme={dracula}
        showLineNumbers={false}
        codeBlock
        wrapLines
      />
      <Introduction
        id="addvalue"
        title="Add value to AkramCSS"
        description="after creating a new style.scss file , now we can start working on adding new values to a sass map variable since all AkramCSS variables are stored in a map variable , for example we wanna add a new color to AkramCSS all we have to do is to follow this pattern :"
      />

      <CopyBlock
        text={`
@use "sass:map";

// import colorVariables where the colors are stored
@use "./node_modules/@nouhsa/akramcss/scss/Variables/colorVariables" as *;

// pushing the new color called jdida to the colors and colorpalette maps
$colors: map.deep-merge(
  $colors,
  (
    light: (
      "jdida": rgb(133, 255, 133),
    ),
    dark: (
      "jdida": green,
    ),
  )
);
$colorPalette: map.merge(
  $colorPalette,
  (
    "jdida": var(--jdida),
  )
);
//import all utility classes from AkramCSS
@use "./node_modules/@nouhsa/akramcss/scss/all";
            `}
        language={"sass"}
        theme={dracula}
        showLineNumbers={false}
        codeBlock
        wrapLines
      />

      <p>
        So the pattern for adding a new value is :
        <ul>
          <li className="font-semibold text-md ">import sass:map</li>
          <li className="font-semibold text-md ">
            import all variable values from the file wanted - please take a look
            at the architecture of AkramCSS sass variable folder
          </li>
          <li className="font-semibold text-md ">
            Push the new value to the map using map.merge
          </li>
          <li className="font-semibold text-md ">
            At the bottom dont forget to import all utility classes you want to
            use in our case is all (importing everything)
          </li>
        </ul>
      </p>
      <Introduction
        id="modifyvalue"
        title="Modify AkramCSS value"
        description="You can also modify a value in AkramCSS , for example if you want to change the senary color value , you can do it by following this pattern :"
      />

      <CopyBlock
        text={`
@use "sass:map";
//modify a value ex: $senary-light color
@use "./node_modules/@nouhsa/akramcss/scss/Variables/colorVariables" with (
  $senary-light: black
);
@use "./node_modules/@nouhsa/akramcss/scss/all";
            `}
        language={"jsx"}
        theme={dracula}
        showLineNumbers={false}
        codeBlock
        wrapLines
      />
      <p className="bg-senary font-semibold p-1">
        To get the name of variable you wanna modify please take a look at
        scss/variables
      </p>
      <Introduction
        id="important"
        title="Important"
        description="If you wanna add and modify values in the same style.scss file please make sure to start by modifying then you can add , ex : adding jdida new color and modifying senary value color for light mode :"
      />
      <CopyBlock
        text={`
@use "sass:map";
//modify a value ex: $senary-light color
@use "./node_modules/@nouhsa/akramcss/scss/Variables/colorVariables" with (
  $senary-light: black
);
// add a value to colors and color palette map
@use "./node_modules/@nouhsa/akramcss/scss/Variables/colorVariables" as *;

$colors: map.deep-merge(
  $colors,
  (
    light: (
      "jdida": rgb(133, 255, 133),
    ),
    dark: (
      "jdida": green,
    ),
  )
);
$colorPalette: map.merge(
  $colorPalette,
  (
    "jdida": var(--jdida),
  )
);

@use "./node_modules/@nouhsa/akramcss/scss/all";
            `}
        language={"jsx"}
        theme={dracula}
        showLineNumbers
        codeBlock
        wrapLines
      />
      <p className="font-semibold bg-senary p-1">
        {" "}
        because if you add value before altering another in the same variable
        file you&apos;ll get an error when compiling in scss{" "}
      </p>
      <Introduction
        id="compiling"
        title="Compiling"
        description="the last thing to do is to compile the style.scss file , for this we can use the command :"
      />
      <CopyBlock
        text={`sass style.scss style.css`}
        language={"bash"}
        theme={dracula}
        showLineNumbers
        codeBlock
        wrapLines
      />
      <p className="font-semibold bg-senary p-1">
        Dont forget to link the style.css to your html file
      </p>
      <Introduction
        id="advanced"
        title="Advanced"
        description="When customizing AkramCSS you'll lose some production optimizations , to bring it back before you compile your style.scss ( before running sass styles.scss styles.css ) you have first to install those libraries :"
      />
      <CopyBlock
        text={`npm i postcss-cli postcss-animation cssnano autoprefixer`}
        language={"bash"}
        theme={dracula}
        showLineNumbers
        codeBlock
        wrapLines
      />
      <p className="font-semibold ">
        Create postcss.config.js file in the root of your project and add
      </p>
      <CopyBlock
        text={`const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const animation = require("postcss-animation");
module.exports = {
  plugins: [
    animation,
    cssnano({
      preset: "default",
    }),
    autoprefixer,
  ],
};`}
        language={"javascript"}
        theme={dracula}
        showLineNumbers
        codeBlock
        wrapLines
      />
      <p className="font-semibold ">
        Create a script in you package.json file and add the following lines :
      </p>

      <CopyBlock
        text={`"scripts": {
    "build": "npm run build-sass && npm run build-postcss ",
    "build-postcss": "postcss styles.css -o styles.css",
    "build-sass": "sass styles.scss styles.css"
  },`}
        language={"javascript"}
        theme={dracula}
        showLineNumbers
        codeBlock
        wrapLines
      />
    </>
  );
};

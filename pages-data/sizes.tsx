import React from "react";
import Introduction from "../Components/subComponents/Introduction";
import UtilityTable from "../Components/subComponents/UtilityTable";
import { sizesGen } from "../data/utility";
import { CopyBlock, dracula } from "react-code-blocks";

type Props = {};

export default function sizes({}: Props) {
  return (
    <>
      <Introduction
        title="Width / Height"
        description="to use theming with AkramCSS it's very simple 
          by default the theme will be the same as your browser theme
          but if you wanna change is manually you just need to add dark-mode class name or 
         light-mode class name to the element you want to change the theme:"
      />
      <UtilityTable items={[].concat.apply([], sizesGen)} />

      <Introduction
        title="Usage"
        description="to use width and height usitity classes you should follow the pattern :"
      />
      <p className="font-bold">{`{ min | max | }-{w | h}-{percentage | rem sizes | viewport }`}</p>
      <CopyBlock
        text={`<div class="w-full bg-red">
        <p class="text-md font-medium">I Love AkramCSS theming</p>
        <p class="text-md font-medium">I use light Theme</p>
        <p class="text-md font-medium">I use dark Theme</p>
</div>`}
        language={"jsx"}
        theme={dracula}
        showLineNumbers={false}
        codeBlock
        wrapLines
      />
    </>
  );
}

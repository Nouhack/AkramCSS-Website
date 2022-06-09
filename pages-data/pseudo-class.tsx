import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import Introduction from "../Components/subComponents/Introduction";

type Props = {};

export default function pseudoclass({}: Props) {
  return (
    <>
      <Introduction
        title="Pseudo classes"
        description="For now AkramCSS provides one pseudo class wich is hover , it's used to add a hover effect to any element , but we will add more in the future."
      />

      <Introduction
        title="Usage"
        description="To change any of your style when hovering over it you should follow this pattern with any of AkramCSS utility classes :"
      />
      <p className="font-bold">{`{ ' ' | md | lg | xl} : {hover} : { any utility class ex : bg-akram | opacity-50 | w-100-100 | .... }`}</p>
      <CopyBlock
        text={`<div className="display-flex flex-row">
        <div className="bg-sissa-200 hover:rounded-lg p-1 hover:text-md dark-mode">
                  <p className="text-md font-medium">I use dark Theme</p>
        </div>  
        <div className="bg-sissa-200 md:hover:bg-sissa xl:rounded-lg p-1 ">
                  <p className="text-md font-medium">I use dark Theme</p>
        </div>  
        <div className="bg-sissa-200 lg:hover:rounded-lg p-1 md:text-md dark-mode">
                  <p className="text-md font-medium">I use dark Theme</p>
        </div>  
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

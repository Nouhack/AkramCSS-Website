import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import Introduction from "../Components/subComponents/Introduction";

type Props = {};

export default function theming({}: Props) {
  return (
    <>
      <Introduction
        title="How to use"
        description="to use theming with AkramCSS it's very simple 
          by default the theme will be the same as your browser theme
          but if you wanna change is manually you just need to add dark-mode class name or 
         light-mode class name to the element you want to change the theme:"
      />

      <CopyBlock
        text={`<div className="display-flex flex-row">
        <div className="bg-sissa-200 rounded-lg p-1 ">
                  <p className="text-md font-medium">I Love AkramCSS theming</p>
                  <p className="text-md font-medium">I use light Theme</p>
                  <p className="text-md font-medium">I use dark Theme</p>
        </div>  
        <div className="bg-sissa-200 rounded-lg p-1 dark-mode">
                  <p className="text-md font-medium">I Love AkramCSS theming</p>
                  <p className="text-md font-medium">I use light Theme</p>
                  <p className="text-md font-medium">I use dark Theme</p>
        </div>  
</div>`}
        language={"jsx"}
        theme={dracula}
        showLineNumbers={false}
        codeBlock
        wrapLines
      />
      <div className="display-flex flex-column lg:flex-row gap-1 mt-2 ">
        <div className="bg-akram text-inner rounded-sm p-1 light-mode grow-1">
          <p className="text-lg font-bold">light mode</p>
          <p className="text-md font-medium bg-base">
            light mode and base background
          </p>
          <p className="text-md font-medium bg-primary">
            light mode and primary background
          </p>
          <p className="text-md font-medium bg-secondary">
            light mode and secondary background
          </p>
          <p className="text-md font-medium bg-success">
            light mode and success background
          </p>
          <p className="text-md font-medium bg-info">
            light mode and info background
          </p>
          <p className="text-md font-medium bg-warning">
            light mode and warning background
          </p>
          <p className="text-md font-medium bg-danger">
            light mode and danger background
          </p>
          <p className="text-md font-medium bg-sissa">
            light mode and sissa background
          </p>
          <p className="text-md font-medium bg-maria">
            light mode and sissa background
          </p>
        </div>
        <div className="bg-akram text-inner rounded-sm p-1 dark-mode grow-1">
          <p className="text-lg font-bold">dark mode</p>
          <p className="text-md font-medium bg-base">
            dark mode and base background
          </p>
          <p className="text-md font-medium bg-primary">
            light mode and primary background
          </p>
          <p className="text-md font-medium bg-secondary">
            light mode and secondary background
          </p>
          <p className="text-md font-medium bg-success">
            light mode and success background
          </p>
          <p className="text-md font-medium bg-info">
            light mode and info background
          </p>
          <p className="text-md font-medium bg-warning">
            light mode and warning background
          </p>
          <p className="text-md font-medium bg-danger">
            light mode and danger background
          </p>
          <p className="text-md font-medium bg-sissa">
            dark mode and sissa background
          </p>
          <p className="text-md font-medium bg-maria">
            dark mode and sissa background
          </p>
        </div>
      </div>
      <Introduction
        title="Toggle theme manually"
        description="to toggle theme manually using vanilla js you can use the following code:"
      />
      <CopyBlock
        text={`var item = document.getElementById("yourElement");
item.classList.toggle("dark-mode");`}
        language={"javascript"}
        theme={dracula}
        showLineNumbers={false}
        codeBlock
        wrapLines
      />
    </>
  );
}

import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import Introduction from "../Components/subComponents/Introduction";

type Props = {};

export default function installations({}: Props) {
  return (
    <>
      <Introduction
        id="fromcdn"
        title="From CDN"
        description="The easiest way to try AkramCSS is from our cdn but we do not encourage you to use cdn in production:"
      />

      <CopyBlock
        text={`<!DOCTYPE html>
<html>
   <head>
      <meta charset = "utf-8">
      
      <!--responsive viewport meta tag-->
      <meta name = "viewport" content = "width = device-width, initial-scale = 1">
      <title> Bulma Example</title>
      
      <!--Akram CSS CDN-->
      <link rel = "stylesheet" href = "https://cdn.jsdelivr.net/npm/@nouhsa/akramcss@1.0.39/css/akramcss.min.css">
      
   </head>
   
   <body>
      <section class = "dark-mode">
         <div class = "bg-akram display-flex">
            <span class = "text-inner">
               Hello World... AkramCSS is Awesome !!!
            </span>
         </div>
      </section>
  </body>
</html>`}
        language={"bash"}
        theme={dracula}
        showLineNumbers={false}
        codeBlock
        wrapLines
      />
      <Introduction
        id="installation"
        title="Install AkramCSS"
        description="To install AkramCSS just run the following command :"
      />

      <CopyBlock
        text={`npm install @nouhsa/akramcss`}
        language={"bash"}
        theme={dracula}
        showLineNumbers={false}
        codeBlock
        wrapLines
      />

      <Introduction
        id="importakramcss"
        title="Import AkramCSS.min.css "
        description="import akramcss.min.css in your global css file :"
      />

      <CopyBlock
        text={`@import "../node_modules/@nouhsa/akramcss/css/akramcss.min.css"`}
        language={"jsx"}
        theme={dracula}
        showLineNumbers={false}
        codeBlock
        wrapLines
      />

      <Introduction
        id="congratulation"
        title="Congratulations now can use AkramCSS"
        description="Now you can use AkramCSS in your project (dont forget to import the global style), example :"
      />
      <CopyBlock
        text={`<div class="bg-primary">
     <div class="w-90-100 bg-akram font-bold text-base p-2 rounded-lg ls-wider" />
     <div class="w-90-100 bg-akram font-bold text-base p-2 rounded-lg ls-wider" />
</div>`}
        language={"jsx"}
        theme={dracula}
        showLineNumbers
        codeBlock
        wrapLines
      />
    </>
  );
}

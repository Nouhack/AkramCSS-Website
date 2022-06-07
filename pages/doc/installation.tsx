import type { NextPage } from "next";
import { CopyBlock, dracula } from "react-code-blocks";
import Head from "next/head";
import Introduction from "../../Components/subComponents/Introduction";
import ReferencesSideBar from "../../Components/ReferencesSideBar";
const Installation: NextPage = () => {
  const test = [
    { name: "FROM CDN", url: "#fromcdn" },
    { name: "Installation", url: "#installation" },
    { name: "Import AkramCSS.min.css", url: "#importakramcss" },
    { name: "Congratulations now can use AkramCSS", url: "#congratulation" },
  ];
  return (
    <div className="w-100-100 page px-0 overflowY-auto scroll-smooth">
      <Head>
        <title>Installation - AkramCSS</title>
        <meta
          name="description"
          content="
         AkramCSS installation guide , how to install AkramCSS , how to use AkramCSS , how to import AkramCSS. 
        "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="container" className="display-flex flex-row px-1 md:px-2 ">
        <div className="w-100-100 pb-3 md:px-1">
          <p className="text-4xl font-bold ls-tighter">Installation</p>
          <p className="text-lg lh-normal text-inner font-medium opacity-80">
            We assume you have already installed nodejs and npm , if you
            haven&apos;t installed it yet please do it before you continue.
          </p>

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
            text={`<div class="bg-senary">
     <div class="w-90-100 bg-akram font-bold text-base p-2 rounded-lg ls-wider" />
     <div class="w-90-100 bg-akram font-bold text-base p-2 rounded-lg ls-wider" />
</div>`}
            language={"jsx"}
            theme={dracula}
            showLineNumbers
            codeBlock
            wrapLines
          />
        </div>
        <ReferencesSideBar items={test} />
      </div>
    </div>
  );
};

export default Installation;

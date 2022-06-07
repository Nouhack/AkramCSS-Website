import Head from "next/head";
import { CopyBlock, dracula } from "react-code-blocks";
import Introduction from "../../Components/subComponents/Introduction";

type Props = {};

export default function Responsive({}: Props) {
  return (
    <div className="w-100-100 page px-1 md:px-5 overflowY-auto whitespace-nowrap">
      <Head>
        <title>Responsive - AkramCSS</title>
        <meta
          name="description"
          content="AkramCSS comes with 4 breakpoints for responsive design and it's mobile first , the breakpoints are : sm , md , lg , xl"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <p className="text-4xl font-bold ls-tighter">Responsive</p>

        <Introduction
          title="Breakpoints"
          description="AkramCSS comes with 4 breakpoints for responsive design and it's mobile first , the breakpoints are : sm , md , lg , xl"
        />
        <div className="display-flex flex-row  my-2 overflowX-auto">
          <div className="w-100-100 text-center">
            <p className="text-md font-medium">Breakpoint prefix</p>
            <div className="h-0.1 bg-inner w-100-100 opacity-50"></div>
            <p className="text-md font-medium">` `</p>
            <div className="h-0.1 bg-inner w-100-100 opacity-20"></div>
            <p className="text-md font-medium">md</p>
            <div className="h-0.1 bg-inner w-100-100 opacity-20"></div>
            <p className="text-md font-medium">lg</p>
            <div className="h-0.1 bg-inner w-100-100 opacity-20"></div>
            <p className="text-md font-medium">xl</p>
          </div>
          <div className="w-100-100 text-center">
            <p className="text-md font-medium">Minimum width</p>
            <div className="h-0.1 bg-inner w-100-100 opacity-50"></div>
            <p className="text-md font-medium">0px</p>
            <div className="h-0.1 bg-inner w-100-100 opacity-20"></div>
            <p className="text-md font-medium">768px</p>
            <div className="h-0.1 bg-inner w-100-100 opacity-20"></div>
            <p className="text-md font-medium">992px</p>
            <div className="h-0.1 bg-inner w-100-100 opacity-20"></div>
            <p className="text-md font-medium">1024px</p>
          </div>
          <div className="w-100-100 text-center">
            <p className="text-md font-medium">CSS</p>
            <div className="h-0.1 bg-inner w-100-100 opacity-50 "></div>
            <p className="text-md font-medium ">@media (min-width: 0px) {}</p>
            <div className="h-0.1 bg-inner w-100-100 opacity-20"></div>
            <p className="text-md font-medium">@media (min-width: 768px) {}</p>
            <div className="h-0.1 bg-inner w-100-100 opacity-20"></div>
            <p className="text-md font-medium">@media (min-width: 992px) {}</p>
            <div className="h-0.1 bg-inner w-100-100 opacity-20"></div>
            <p className="text-md font-medium">@media (min-width: 1024px) {}</p>
          </div>
        </div>

        <Introduction
          title="Usage"
          description="AkramCSS allows you to set the desired style on any screen using the breakpoint prefixes."
        />
        <p className="font-bold whitespace-pre-line">{`{ ' ' | md | lg | xl} : { any utility class ex : bg-akram | opacity-50 | w-100-100 | .... }`}</p>
        <CopyBlock
          text={`<div className="display-flex flex-row">
        <div className="bg-sissa-200 md:bg-sissa xl:rounded-lg p-1 ">
                  <p className="text-md font-medium">I use dark Theme</p>
        </div>  
        <div className="bg-sissa-200 lg:rounded-lg p-1 md:text-md dark-mode">
                  <p className="text-md font-medium">I use dark Theme</p>
        </div>  
</div>`}
          language={"jsx"}
          theme={dracula}
          showLineNumbers={false}
          codeBlock
          wrapLines
        />

        <div className="bg-sissa p-0.8 my-2 whitespace-pre-line">
          <p className="text-md lh-normal font-medium text-inner opacity-80 ">
            Note that AkramCSS is mobile first , what the hell is mobile first ?
            first mobile means the style is applied to the smallest screen , so
            when targeting mobile screens dont add a prefix and by doing that
            all screens from 0px and up will take that style except the screens
            that have a breakpoint prefix ex :
            <div className="bg-inner text-base">{`<div className=" bg-akram lg:bg-sissa "></div>`}</div>
            all screen above
            <span className="font-bold">{`lg <large screen>`}</span> will take
            the background color of akram , but the screens that have a size
            <span className="font-bold">{`lg <large screen>`}</span> and up will
            take the background color of sissa
          </p>
        </div>
      </div>
    </div>
  );
}

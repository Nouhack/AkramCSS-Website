import Head from "next/head";
import { CopyBlock, dracula } from "react-code-blocks";
import Introduction from "../../Components/subComponents/Introduction";

type Props = {};

export default function Theming({}: Props) {
  return (
    <div className="w-100-100 page px-1 md:px-5 overflowY-auto">
      <Head>
        <title>Theming - AkramCSS</title>
        <meta
          name="description"
          content="to use theming with AkramCSS it's very simple by default the theme will be the same as your browser theme but if you wanna change is manually you just need to add dark-mode class name or light-mode class name to the element you want to change the theme"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <p className="text-4xl font-bold ls-tighter">Theming</p>
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
            <p className="text-md font-medium bg-sissa">
              light mode and sissa background
            </p>
            <p className="text-md font-medium bg-maria">
              light mode and sissa background
            </p>
            <p className="text-md font-medium bg-senary">
              light mode and sissa background
            </p>
          </div>
          <div className="bg-akram text-inner rounded-sm p-1 dark-mode grow-1">
            <p className="text-lg font-bold">dark mode</p>
            <p className="text-md font-medium bg-base">
              dark mode and base background
            </p>
            <p className="text-md font-medium bg-sissa">
              dark mode and sissa background
            </p>
            <p className="text-md font-medium bg-maria">
              dark mode and sissa background
            </p>
            <p className="text-md font-medium bg-senary">
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

        <div className="bg-senary p-1 my-2">
          <p className="text-md lh-normal font-medium text-inner opacity-80">
            The idea is to add the class name to the element you want to change
            and if you want the browser theme add an empty string.
          </p>
        </div>
      </div>
    </div>
  );
}

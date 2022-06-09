import { CopyBlock, dracula } from "react-code-blocks";
import Introduction from "../Components/subComponents/Introduction";

type Props = {};

export default function responsives({}: Props) {
  return (
    <>
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
    </>
  );
}

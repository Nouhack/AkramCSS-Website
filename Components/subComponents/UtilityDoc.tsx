import React from "react";
import Introduction from "./Introduction";
import UtilityTable from "./UtilityTable";
import SpecialUtilityTable from "./SpecialUtilityTable";
import {
  CodeBlock,
  CopyBlock,
  solarizedDark,
  dracula,
  monokai,
  shadesOfPurple,
  monokaiSublime,
} from "react-code-blocks";

type Props = {
  id: string;
  items: Array<any>;
  mainTitle: string;
  mainDescription: string;
  usage: string;
  code: string;
  special?: boolean;
};

export default function UtilityDoc({
  id,
  items,
  mainTitle,
  mainDescription,
  usage,
  code,
  special,
}: Props) {
  return (
    <div id={id}>
      <Introduction title={mainTitle} description={mainDescription} />
      {special ? (
        <SpecialUtilityTable items={[].concat.apply([], items)} />
      ) : (
        <UtilityTable items={[].concat.apply([], items)} />
      )}
      <Introduction
        title="Usage"
        description={`to use ${mainTitle} utility classes you should follow this pattern :`}
      />
      <p className="font-bold">{usage}</p>
      <CopyBlock
        text={code}
        language={"jsx"}
        theme={dracula}
        showLineNumbers={false}
        codeBlock
        wrapLines
      />
    </div>
  );
}

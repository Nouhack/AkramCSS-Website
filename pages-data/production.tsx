import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import Introduction from "../Components/subComponents/Introduction";

type Props = {};

export default function production({}: Props) {
  return (
    <>
      <Introduction
        title="Install packages"
        description="whether you're building your web app with vanilla js or using any js framework the way of setting your environnement for generation the production build version is the same , all you have to modify is the entry points .
         fist you have to install those packages : 
          "
      />
      <CopyBlock
        text={`npm install -D @fullhuman/postcss-purgecss postcss-import postcss-cli`}
        language={"bash"}
        theme={dracula}
        showLineNumbers={false}
        codeBlock
        wrapLines
      />
      <Introduction
        title="Create postcss.config.js file"
        description="in your root directory create a postcss.config.js file , and paste the following code in it :"
      />
      <CopyBlock
        text={`module.exports = {
  plugins: [
    require("postcss-import"),
    require("@fullhuman/postcss-purgecss")({
      keyframes: true,
      content: ["./src/index.html"],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
  ],
};`}
        language={"javascript"}
        theme={dracula}
        showLineNumbers={false}
        codeBlock
        wrapLines
      />
      <div className="bg-primary p-1 my-2">
        <p className="text-md lh-normal font-medium text-base">
          when using any js framework like react js for example all you have to
          edit is the content array where you have to set the final build paths
          of files to be purged by the plugin , the idea is to build your final
          version with the framework normally then trigger the optimization
          build command , file when using reactJS will look like this:
        </p>
      </div>

      <CopyBlock
        text={`module.exports = {
  plugins: [
    require("postcss-import"),
    require("@fullhuman/postcss-purgecss")({
      keyframes: true,
      content: ["build/index.html", "build/static/js/*.js"],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
  ],
};`}
        language={"javascript"}
        theme={dracula}
        showLineNumbers={false}
        codeBlock
        wrapLines
      />

      <Introduction
        title="Add the build script command in package.json"
        description="add the following command in your package.json file scripts:"
      />
      <CopyBlock
        text={` "scripts": {
    "build:prod-css": "postcss ./src/style.css -d ./src/dis/purged.css "
	}`}
        language={"json"}
        theme={dracula}
        showLineNumbers={false}
        codeBlock
        wrapLines
      />
      <Introduction
        title="Generate the optimised production build version"
        description="now you can run the build script command in your package.json file :"
      />
      <CopyBlock
        text={`npm run build:prod-css`}
        language={"bash"}
        theme={dracula}
        showLineNumbers={false}
        codeBlock
        wrapLines
      />

      <p className="text-md lh-normal font-medium text-inner opacity-80">
        when using any js framework you have to combine the 2 build , the build
        of the framework and the optimisation build of the AkramCSS wich is
        (build:prod-css) , the final build will look like this for reactJS :
      </p>

      <CopyBlock
        text={`npm run build && npm run build:prod-css`}
        language={"bash"}
        theme={dracula}
        showLineNumbers={false}
        codeBlock
        wrapLines
      />
    </>
  );
}

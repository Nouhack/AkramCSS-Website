import React from "react";
import Head from "next/head";
import UtilityDoc from "../../Components/subComponents/UtilityDoc";
import ReferencesSideBar from "../../Components/ReferencesSideBar";
import { animations } from "../../data/utility";

type Props = {};

export default function Animations({}: Props) {
  const test = [{ name: "bounce / flash", url: "#animations" }];
  return (
    <div className="w-100-100 page px-1 md:px-0 overflowY-auto scroll-smooth ">
      <Head>
        <title>Animations - AkramCSS</title>
        <meta
          name="description"
          content="Animations page presents all the animation utility classes of AkramCSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="container" className="display-flex flex-row w-100-100">
        <div className="md:px-2 max-w-100-100 pb-4 ">
          <p id="nouhack" className="text-4xl font-bold ls-tighter">
            Animations
          </p>

          <UtilityDoc
            special={true}
            id="animations"
            mainTitle="bounce / flash"
            mainDescription="The animation shorthand CSS property applies an animation between styles. It is a shorthand for animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction, animation-fill-mode, and animation-play-state."
            items={animations}
            usage={`{ bounce | flash }`}
            code={`<div class="bg-akram w-100-100">
            <button class="bounce">FIRST</button>
            <button class="flash">SECODN</button>
</div>`}
          />
        </div>
        <ReferencesSideBar items={test} />
      </div>
    </div>
  );
}

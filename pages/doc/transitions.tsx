import React from "react";
import Head from "next/head";
import UtilityDoc from "../../Components/subComponents/UtilityDoc";
import ReferencesSideBar from "../../Components/ReferencesSideBar";
import {
  transition,
  transitionDuration,
  transitionFunction,
  transitionDelay,
} from "../../data/utility";

type Props = {};

export default function Transitions({}: Props) {
  const test = [
    { name: "Transition property", url: "#transition" },
    { name: "Transition duration", url: "#duration" },
    { name: "Transition function", url: "#function" },
    { name: "Transition delay", url: "#delay" },
  ];
  return (
    <div className="w-100-100 page px-1 md:px-0 overflowY-auto scroll-smooth ">
      <Head>
        <title>Transitions - AkramCSS</title>
        <meta
          name="description"
          content="Transitions page presents all the transition utility classes of AkramCSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="container" className="display-flex flex-row w-100-100">
        <div className="md:px-2 max-w-100-100 pb-4 ">
          <p id="nouhack" className="text-4xl font-bold ls-tighter">
            Transitions
          </p>

          <UtilityDoc
            id="transition"
            mainTitle="Transition property"
            mainDescription="The transition-property CSS property sets the CSS properties to which a transition effect should be applied."
            items={transition}
            usage={`{ transition }-{ none | all | color | opacity | shadow | transform | scale | rotate }`}
            code={`<div class="bg-akram w-100-100">
            <button class="transition-all">FIRST</button>
            <button class="transition-opacity">SECODN</button>
            <button class="transition-scale">THIRD</button>
</div>`}
          />
          <UtilityDoc
            id="duration"
            mainTitle="Transition duration"
            mainDescription="The transition-duration CSS property sets the length of time a transition animation should take to complete. By default, the value is 0s, meaning that no animation will occur."
            items={transitionDuration}
            usage={`{ duration }-{ default | fast | slow }`}
            code={`<div class="bg-maria display-flex flex-row">
            <img class="transition-all duration-fast"/>
            <img class="transition-color duration-slow"/>
            <img class="transition-shadow duration-default"/>
</div>`}
          />

          <UtilityDoc
            id="function"
            mainTitle="Transition function"
            mainDescription="The transition-timing-function CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect."
            items={transitionFunction}
            usage={`{ ease | linear | ease-in | ease-out | ease-in-out | step-start | step-end }`}
            code={`<div class="bg-maria display-flex flex-row">
            <img class="transition-all duration-fast ease"/>
            <img class="transition-color duration-slow ease-in-out"/>
            <img class="transition-shadow duration-default etep-end"/>
</div>`}
          />
          <UtilityDoc
            id="delay"
            mainTitle="Transition delay"
            mainDescription="The transition-delay CSS property specifies the duration to wait before starting a property's transition effect when its value changes."
            items={transitionDelay}
            usage={`{ delay }-{ default | fast | slow }`}
            code={`<div class="bg-primary">
            <img class="transition-all duration-fast ease delay-default"/>
            <img class="transition-color duration-slow ease-in-out delay-fase"/>
            <img class="transition-shadow duration-default etep-end delay-fase"/>
</div>`}
          />
        </div>
        <ReferencesSideBar items={test} />
      </div>
    </div>
  );
}

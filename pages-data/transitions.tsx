import React from "react";
import UtilityDoc from "../Components/subComponents/UtilityDoc";
import {
  transition,
  transitionDuration,
  transitionFunction,
  transitionDelay,
} from "../data/utility";

type Props = {};

export default function transitions({}: Props) {
  return (
    <>
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
    </>
  );
}

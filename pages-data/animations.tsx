import React from "react";
import UtilityDoc from "../Components/subComponents/UtilityDoc";
import { animations } from "../data/utility";

type Props = {};

export default function animationsPage({}: Props) {
  return (
    <>
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
    </>
  );
}

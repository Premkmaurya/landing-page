import React from "react";
import Video from "./Video";

function HomeHeroText() {
  return (
    <div className="font-[font-v-2] uppercase mt-[12vw] text-[12vw] md:text-[8.5vw] leading-[9.5vw] font-extralight text-center">
      <div>L'étincelle</div>
      <div className="flex items-center justify-center">
        qui
        <div className="w-[20vw] h-[10vh] md:h-[12vh] md:w-[16vw] rounded-full -pt-5 overflow-hidden">
          <Video />
        </div>
        génère
      </div>
      <div className="flex ml-7 items-center justify-center">
        la
        <div className="relative">
          créativité
        </div>
      </div>
    </div>
  );
}

export default HomeHeroText;

import React from "react";

import Counter from "@/app/_animations/Counter";
import Heading from "../_animations/Heading";

export default function OurResources() {
  return (
    <div className="bg-[#f9f9f9] w-full flex flex-col justify-center items-center gap-5 p-5">
      <Heading
        title={"Our Resources"}
        line1={"We Live & Work Globally"}
        line2={""}
      />
      <div>
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center border-b p-3">
            <p>
              <Counter targetNumber={100} />
            </p>
            <p>LAWYERS ACROSS OUR GLOBAL PLATFORM</p>
          </div>
          <div className="flex flex-col items-center border-x border-b p-3">
            <p>
              <Counter targetNumber={100} />
            </p>
            <p>LAWYERS ACROSS OUR GLOBAL PLATFORM</p>
          </div>
          <div className="flex flex-col items-center border-b p-3">
            <p>
              <Counter targetNumber={100} />
            </p>
            <p>LAWYERS ACROSS OUR GLOBAL PLATFORM</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center p-3">
            <p>
              <Counter targetNumber={100} />
            </p>
            <p>LAWYERS ACROSS OUR GLOBAL PLATFORM</p>
          </div>
          <div className="flex flex-col items-center border-x p-3">
            <p>
              <Counter targetNumber={100} />
            </p>
            <p>LAWYERS ACROSS OUR GLOBAL PLATFORM</p>
          </div>
          <div className="flex flex-col items-center p-3">
            <p>
              <Counter targetNumber={100} />
            </p>
            <p>LAWYERS ACROSS OUR GLOBAL PLATFORM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

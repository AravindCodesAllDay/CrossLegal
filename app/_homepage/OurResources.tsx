import React from "react";

import Counter from "@/app/_animations/Counter";

export default function OurResources() {
  return (
    <div className="bg-[#f9f9f9] w-full flex flex-col justify-center items-center gap-5 p-5">
      <h3 className="flex items-center gap-3 text-2xl text-secondary">
        <div className="h-3 w-5 bg-gradient-to-r from-secondary rounded-tl-md rounded-br-md"></div>
        Our Resources
        <div className="h-3 w-5 bg-gradient-to-l from-secondary rounded-tl-md rounded-br-md"></div>
      </h3>
      <p className="text-primary text-4xl font-bold">We Live & Work Globally</p>
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

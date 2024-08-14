import React from "react";
import Counter from "@/app/_animations/Counter";
import Heading from "../_animations/Heading";

export default function OurResources() {
  return (
    <div className="bg-[#f9f9f9] w-full flex flex-col justify-center items-center gap-5 p-16">
      <Heading
        title={"Our Resources"}
        line1={"We Live & Work Globally"}
        line2={""}
      />
      <div className="w-full max-w-screen-lg">
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center justify-center border-b p-3 h-full">
            <p className="text-6xl text-secondary font-bold">
              <Counter start={0} count={100} targetNumber={1000} />+
            </p>
            <p className="text-center">LAWYERS ACROSS OUR GLOBAL PLATFORM</p>
          </div>
          <div className="flex flex-col items-center justify-center border-x border-b p-3 h-full">
            <p className="text-6xl text-secondary font-bold">
              <Counter start={0} count={10} targetNumber={100} />%
            </p>
            <p className="text-center">
              ON HUMAN RIGHTS CAMPAIGN FOUNDATION&apos;S 2023
            </p>
          </div>
          <div className="flex flex-col items-center justify-center border-b p-3 h-full">
            <p className="text-6xl text-secondary font-bold">
              <Counter start={0} count={10} targetNumber={92} />%
            </p>
            <p className="text-center">
              LATHAM LAWYERS PARTICIPATE IN PRO BONO WORK
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="flex flex-col items-center justify-center p-3 h-full">
            <p className="text-6xl text-secondary font-bold">
              <Counter start={0} count={8} targetNumber={80} />+
            </p>
            <p className="text-center">
              Number of Native Speakers LANGUAGES SPOKEN
            </p>
          </div>
          <div className="flex flex-col items-center justify-center border-x p-3 h-full">
            <p className="text-6xl text-secondary font-bold">
              <Counter start={0} count={32} targetNumber={320} />k
            </p>
            <p className="text-center">
              Encourages lawyers to engage in at least 50 hours
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-3 h-full">
            <p className="text-6xl text-secondary font-bold">
              <Counter start={0} count={2} targetNumber={20} />+
            </p>
            <p className="text-center">COUNTRIES IN WHICH THE FIRM OPERATES</p>
          </div>
        </div>
      </div>
    </div>
  );
}

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
      <div className="w-full max-w-screen-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex flex-col items-center justify-center p-3 h-full">
          <p className="text-6xl text-secondary font-bold">
            <Counter start={0} count={5} targetNumber={500} />+
          </p>
          <p className="text-center">Clients Across our Global Platform</p>
        </div>
        <div className="flex flex-col items-center justify-center p-3 h-full">
          <p className="text-6xl text-secondary font-bold">
            <Counter start={0} count={1} targetNumber={100} />%
          </p>
          <p className="text-center">Committed towards Work Ethics</p>
        </div>
        <div className="flex flex-col items-center justify-center p-3 h-full">
          <p className="text-6xl text-secondary font-bold">
            <Counter start={0} count={1} targetNumber={100} />%
          </p>
          <p className="text-center">
            Crozz Legal Layers Participate in Pro Bono work
          </p>
        </div>
        <div className="flex flex-col items-center justify-center p-3 h-full">
          <p className="text-6xl text-secondary font-bold">
            <Counter start={0} count={1} targetNumber={10} />+
          </p>
          <p className="text-center">
            Number of Native speakers Languages-spoken
          </p>
        </div>
      </div>
    </div>
  );
}

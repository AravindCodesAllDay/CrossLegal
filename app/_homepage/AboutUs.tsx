import Image from "next/image";
import React from "react";

import women from "@/app/_assets/women.jpg";
import team from "@/app/_assets/team.jpg";

export default function AboutUs() {
  return (
    <div className="relative h-[700px] w-full flex justify-around">
      <div className="h-1/2 w-full bg-[#f9f9f9] absolute -z-20"></div>

      <div>
        <Image
          src={women}
          alt="women"
          className="rounded-tl-3xl rounded-br-3xl"
        />
      </div>
      <div className="w-2/5 flex flex-col gap-8">
        <div>
          <h3 className="flex items-center gap-3 text-2xl text-secondary">
            <div className="h-3 w-5 bg-gradient-to-r from-secondary rounded-tl-md rounded-br-md"></div>
            About Us
            <div className="h-3 w-5 bg-gradient-to-l from-secondary rounded-tl-md rounded-br-md"></div>
          </h3>
          <p className="flex flex-col text-4xl font-bold">
            <span>We’re Advocates for</span>
            <span>Justice and Right</span>
          </p>
          <p>
            All the Lorem Ipsum generators on the Internet tend to predefined
            chunks as necessary, making this the first true generator on net.
            Uses a dictionary of over always true latin words.
          </p>
        </div>
        <div>
          <Image src={team} alt="team" />
        </div>
      </div>
    </div>
  );
}

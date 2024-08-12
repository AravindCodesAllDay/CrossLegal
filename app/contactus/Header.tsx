import React from "react";
import Image from "next/image";

import team from "@/app/_assets/abtHeader.jpg";

export default function Header() {
  return (
    <div className="relative h-[400px] overflow-clip bg-[#15171f]">
      <Image
        src={team}
        alt="Team Image"
        className="w-full h-[60vh] opacity-10"
      />
      <div className="absolute z-10 top-2/4 left-[45%]">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-marcellus text-zinc-100">Contact</h1>
          <div className="flex text-zinc-50 text-sm py-5 items-center list-none">
            <li className="px-2 hover:text-secondary">
              <a href="/">Home</a>
            </li>
            <span>
              <div className="h-3 w-3 bg-[#65554d] mt-0.5 rounded-tl-md rounded-br-md"></div>
            </span>
            <li className="px-2">
              <a href="">Contact</a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

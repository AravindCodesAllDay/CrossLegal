import React from "react";
import Image, { StaticImageData } from "next/image";

interface HeaderProps {
  title: string;
  photo: StaticImageData;
}

export default function Header({ title, photo }: HeaderProps) {
  return (
    <div className="relative h-[300px] sm:h-[350px] md:h-[400px] overflow-clip bg-[#15171f]">
      <Image
        src={photo}
        alt="Team Image"
        className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] opacity-10 object-cover"
      />
      <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-marcellus text-zinc-100">
            {title}
          </h1>
          <div className="flex text-zinc-50 text-xs sm:text-sm md:text-base py-3 sm:py-4 md:py-5 items-center list-none">
            <li className="px-1 sm:px-2 hover:text-secondary">
              <a href="/">Home</a>
            </li>
            <span className="mx-1 sm:mx-2">
              <div className="h-2 w-2 sm:h-3 sm:w-3 bg-[#65554d] rounded-tl-md rounded-br-md"></div>
            </span>
            <li className="px-1 sm:px-2 text-secondary">{title}</li>
          </div>
        </div>
      </div>
    </div>
  );
}

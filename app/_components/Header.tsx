import React from "react";
import Image, { StaticImageData } from "next/image";

interface HeaderProps {
  title: string;
  header: string;
  photo: StaticImageData;
}

export default function Header({ title, header, photo }: HeaderProps) {
  return (
    <div className="relative flex justify-center items-center h-[400px] overflow-clip bg-[#15171f]">
      <Image
        src={photo}
        alt="Team Image"
        placeholder="blur"
        className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] opacity-10 object-cover"
      />
      <div className="absolute translate-y-12">
        <div className="flex flex-col p-6 md:p-12 items-center">
          <h1 className="text-2xl md:text-5xl font-marcellus text-zinc-100">
            {title}
          </h1>
          <div className="flex text-zinc-50 text-sm py-5 items-center list-none">
            <li className="px-2 hover:text-secondary">
              <a href="/">Home</a>
            </li>
            <span className="mx-1 sm:mx-2">
              <div className="h-2 w-2 sm:h-3 sm:w-3 bg-[#65554d] rounded-tl-md rounded-br-md"></div>
            </span>
            <li className="px-2 text-secondary">{header}</li>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

import { profile } from "@/lib/profile";
import Heading from "../_animations/Heading";
import globe from "@/app/_assets/map.png";

export default function OurLawyers() {
  const profiles = profile();

  return (
    <div className="flex flex-col gap-8 justify-center items-center p-4 relative">
      <Heading
        title={"Our Lawyers"}
        line1={"A Passion For Justice, Our"}
        line2={"Practice Areas"}
      />
      <div className="flex flex-wrap justify-center w-full gap-5">
        {profiles.slice(0, 5).map((bio, index) => (
          <Link href={`/${bio.id}`} className="w-full max-w-96" key={index}>
            <div className="flex-shrink-0 w-full max-w-96 p-3 flex flex-col items-center gap-4 group transition-transform duration-500 ease-in-out transform">
              <div className="w-11/12 h-1/2 rounded-b-full bg-gradient-to-b from-secondary opacity-40 -z-20 absolute top-0"></div>

              <div className="flex flex-col items-center">
                <h6 className="text-lg md:text-xl">{bio.name}</h6>
                <p className="text-secondary text-sm md:text-base">
                  {bio.position}
                </p>
              </div>
              <Image
                src={bio.photo}
                alt="profile"
                placeholder="blur"
                className="size-40 sm:size-44 md:size-48 rounded-full border-2 border-dashed border-secondary p-2 group-hover:scale-95 transition-all ease-in-out duration-200"
              />
              <div className="w-11/12 h-1/2 rounded-t-full -z-20 bg-gradient-to-t from-secondary opacity-40 absolute bottom-0"></div>
            </div>
          </Link>
        ))}
      </div>
      <Image
        src={globe}
        alt="bg-globe"
        className="absolute -z-20 opacity-10"
        placeholder="blur"
      />
    </div>
  );
}

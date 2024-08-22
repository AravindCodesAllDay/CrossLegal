"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";

import { profile } from "@/lib/profile";
import Heading from "../_animations/Heading";
import globe from "@/app/_assets/map.png";

export default function OurLawyers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [profilesPerSlide, setProfilesPerSlide] = useState(1);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const updateProfilesPerSlide = () => {
      if (window.innerWidth >= 1024) {
        setProfilesPerSlide(3);
      } else if (window.innerWidth >= 640) {
        setProfilesPerSlide(2);
      } else {
        setProfilesPerSlide(1);
      }
    };

    updateProfilesPerSlide();
    window.addEventListener("resize", updateProfilesPerSlide);

    return () => {
      window.removeEventListener("resize", updateProfilesPerSlide);
    };
  }, []);

  const totalSlides = Math.ceil(profile().length / profilesPerSlide);

  return (
    <div className="flex flex-col gap-8 justify-center items-center p-4">
      <Heading
        title={"Our Lawyers"}
        line1={"A Passion For Justice, Our"}
        line2={"Practice Areas"}
      />
      <div className="relative w-full md:w-4/5 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {profile().map((bio, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-3 group transition-transform duration-500 ease-in-out transform"
            >
              <Link
                href={`/${bio.id}`}
                className="w-full max-w-96 flex flex-col items-center gap-4"
              >
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
              </Link>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: totalSlides }, (_, index) => (
            <div
              key={index}
              className={`w-4 h-3 rounded-tl-md rounded-br-md cursor-pointer transition-all duration-300 ${
                currentIndex === index
                  ? "bg-secondary transform scale-125"
                  : "bg-gray-300"
              }`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
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

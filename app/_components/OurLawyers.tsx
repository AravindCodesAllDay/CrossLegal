"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

import Heading from "../_animations/Heading";
import { profile } from "@/lib/profile";

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
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-3 flex flex-col items-center gap-4 group transition-transform duration-500 ease-in-out transform"
            >
              <div className="w-11/12 h-1/2 rounded-b-full bg-gradient-to-t from-secondary opacity-25 -z-20 absolute top-0"></div>
              <a href={`/${bio.id}`}>
                <div className="flex flex-col items-center">
                  <h6 className="text-xl md:text-2xl">{bio.name}</h6>
                  <p className="text-secondary text-sm md:text-base">
                    {bio.position}
                  </p>
                </div>
              </a>
              <a href={`/${bio.id}`}>
                <Image
                  src={bio.photo}
                  alt="profile"
                  className="size-56 rounded-full border-2 border-dashed border-secondary p-2 group-hover:scale-95 transition-all ease-in-out duration-200"
                />
              </a>
              <ul className="flex gap-5 mt-4">
                <li className="rounded-full p-1 bg-secondary">
                  <a href="https://www.facebook.com/" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-facebook size-8 stroke-white"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                    </svg>
                  </a>
                </li>
                <li className="rounded-full p-1 bg-secondary">
                  <a href="https://www.linkedin.com/" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-linkedin size-8 stroke-white"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                      <path d="M8 11l0 5" />
                      <path d="M8 8l0 .01" />
                      <path d="M12 16l0 -5" />
                      <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                    </svg>
                  </a>
                </li>
                <li className="rounded-full p-1 bg-secondary">
                  <a href="https://www.instagram.com/" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-instagram size-8 stroke-white"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                      <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                      <path d="M16.5 7.5l0 .01" />
                    </svg>
                  </a>
                </li>
              </ul>
              <div className="w-11/12 h-1/2 rounded-t-full -z-20 bg-gradient-to-b from-secondary opacity-25 absolute bottom-0"></div>
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
    </div>
  );
}

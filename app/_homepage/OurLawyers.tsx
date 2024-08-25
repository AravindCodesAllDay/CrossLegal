"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

import { profile } from "@/lib/profile";
import Heading from "../_animations/Heading";
import globe from "@/public/assets/map.png";

export default function OurLawyers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [profilesPerSlide, setProfilesPerSlide] = useState(1);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const startXRef = useRef<number | null>(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Math.ceil(profile().length / profilesPerSlide) - 1
        ? 0
        : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.ceil(profile().length / profilesPerSlide) - 1
        : prevIndex - 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    startXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (startXRef.current !== null) {
      const endX = e.changedTouches[0].clientX;
      if (startXRef.current - endX > 50) {
        handleNext();
      } else if (endX - startXRef.current > 50) {
        handlePrev();
      }
      startXRef.current = null;
    }
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

  return (
    <div className="flex flex-col gap-8 justify-center items-center p-4 relative">
      <Heading
        title={"Our Lawyers"}
        line1={"A Passion For Justice, Our"}
        line2={"Practice Areas"}
      />
      <div
        className="relative w-full md:w-4/5 overflow-hidden"
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {profile().map((bio, index) => (
            <div
              key={index}
              className="flex-shrink-0 justify-center items-center w-full sm:w-1/2 lg:w-1/3 p-3 group transition-transform duration-500 ease-in-out transform"
            >
              <Link
                href={`/${bio.id}`}
                className="w-full max-w-96 h-full min-h-80 flex flex-col justify-center items-center gap-4"
              >
                <div className="w-11/12 h-1/2 rounded-b-full bg-gradient-to-b from-secondary opacity-40 -z-20 absolute top-0"></div>

                <div className="flex flex-col items-center">
                  <h6 className="text-lg text-center md:text-xl">{bio.name}</h6>
                  <p className="text-secondary text-sm md:text-base">
                    {bio.position}
                  </p>
                </div>
                <Image
                  src={bio.photo}
                  alt="profile"
                  placeholder="blur"
                  className="size-48 rounded-full border-2 border-dashed border-secondary p-2 group-hover:scale-95 transition-all ease-in-out duration-200"
                />
                <div className="w-11/12 h-1/2 rounded-t-full -z-20 bg-gradient-to-t from-secondary opacity-40 absolute bottom-0"></div>
              </Link>
            </div>
          ))}
        </div>
        <button
          onClick={handlePrev}
          className="absolute top-1/2 transform h-1/3 w-10 -translate-y-1/2 left-0 bg-secondary text-white p-2 rounded-lg shadow-lg bg-opacity-40 hover:bg-opacity-75 transition-all"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 transform h-1/3 w-10 -translate-y-1/2 right-0 bg-secondary text-white p-2 rounded-lg shadow-lg bg-opacity-40 hover:bg-opacity-75 transition-all"
        >
          &gt;
        </button>
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

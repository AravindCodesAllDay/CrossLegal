"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Heading from "../_animations/Heading";

import Button from "../_animations/Button";
import { practices } from "@/lib/practices";
import Link from "next/link";

export default function WhatWeDo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonialsPerSlide, setTestimonialsPerSlide] = useState(1);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const updateTestimonialsPerSlide = () => {
      if (window.innerWidth >= 1024) {
        setTestimonialsPerSlide(3);
      } else if (window.innerWidth >= 640) {
        setTestimonialsPerSlide(2);
      } else {
        setTestimonialsPerSlide(1);
      }
    };

    updateTestimonialsPerSlide();
    window.addEventListener("resize", updateTestimonialsPerSlide);

    return () => {
      window.removeEventListener("resize", updateTestimonialsPerSlide);
    };
  }, []);

  return (
    <div className="p-5 flex flex-col gap-8">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <Heading
          title="What We Do"
          line1="A Passion For Justice,"
          line2="Our Practice Areas"
        />

        <Button left="" right="Learn More" linkTo="/practices" />
      </div>
      <div className="relative mx-auto w-full md:w-11/12 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {practices().map((data) => (
            <div
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-3 flex flex-col items-center gap-4 group transition-transform duration-500 ease-in-out transform"
              key={data.id}
            >
              <Link href={`/practices/${data.id}`}>
                <div className="flex justify-between w-full">
                  <Image
                    src={data.photo}
                    alt="photo"
                    className="size-14 group-hover:animate-pulse"
                  />
                  <div className="h-20 w-8 rounded-bl-full ml-auto opacity-25 transition-all duration-150 ease-in-out group-hover:opacity-55 bg-gradient-to-l from-secondary"></div>
                </div>
                <div className="flex flex-col gap-3 p-3">
                  <h3 className="text-xl md:text-3xl line-clamp-1">
                    {data.header}
                  </h3>
                  <p className="text-secondary line-clamp-2">{data.text}</p>
                </div>
                <div className="relative">
                  <Image
                    src={data.figure}
                    alt="card"
                    className="w-full"
                    placeholder="blur"
                  />
                  <p className="bg-secondary rounded-lg absolute m-2 p-1 text-xs text-white bottom-0 right-0 transition-all duration-150 ease-in-out group-hover:scale-110">
                    to learn more
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {Array.from(
            { length: Math.ceil(practices().length / testimonialsPerSlide) },
            (_, index) => (
              <div
                key={index}
                className={`w-4 h-3 rounded-tl-md rounded-br-md cursor-pointer transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-secondary transform scale-125"
                    : "bg-gray-300"
                }`}
                onClick={() => handleDotClick(index)}
              ></div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

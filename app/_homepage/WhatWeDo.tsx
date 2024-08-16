"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Heading from "../_animations/Heading";

import img1 from "@/app/_assets/whatWeDo/1.png";
import img2 from "@/app/_assets/whatWeDo/2.png";
import img3 from "@/app/_assets/whatWeDo/3.png";
import img4 from "@/app/_assets/whatWeDo/4.png";
import img5 from "@/app/_assets/whatWeDo/5.png";

import photo1 from "@/app/_assets/whatWeDo/1.jpg";
import photo2 from "@/app/_assets/whatWeDo/2.jpg";
import photo3 from "@/app/_assets/whatWeDo/3.jpg";
import photo4 from "@/app/_assets/whatWeDo/4.jpg";
import photo5 from "@/app/_assets/whatWeDo/5.jpg";

export default function WhatWeDo() {
  const testimonials = [
    {
      id: 1,
      photo: img1,
      figure: photo1,
      header: "Car Accidents",
      text: "Awesome Services Grow Your Business Value There are many variations..",
    },
    {
      id: 2,
      photo: img4,
      figure: photo2,
      header: "Health Care Law",
      text: "Awesome Services Grow Your Business Value There are many variations..",
    },
    {
      id: 3,
      photo: img3,
      figure: photo3,
      header: "Insurance Law",
      text: "Awesome Services Grow Your Business Value There are many variations..",
    },
    {
      id: 4,
      photo: img2,
      figure: photo4,
      header: "Family Violence",
      text: "Awesome Services Grow Your Business Value There are many variations..",
    },
    {
      id: 5,
      photo: img5,
      figure: photo5,
      header: "Domestic Violence",
      text: "Awesome Services Grow Your Business Value There are many variations..",
    },
  ];

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
    <div className="p-5 flex flex-col gap-5">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="flex flex-col gap-3">
          <Heading
            title="What We Do"
            line1="A Passion For Justice,"
            line2="Our Practice Areas"
          />
        </div>
        <button className="flex justify-center items-center group">
          <div className="p-2 bg-[#00192c] transform transition-transform duration-500 group-hover:bg-secondary rounded-tl-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-plus size-6 transform transition-transform duration-300 group-hover:rotate-90"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 5l0 14" />
              <path d="M5 12l14 0" />
            </svg>
          </div>
          <div className="bg-secondary transform transition-transform duration-500 group-hover:bg-[#00192c] rounded-br-lg p-2 text-white font-semibold">
            Learn More
          </div>
        </button>
      </div>
      <div className="relative mx-auto w-full md:w-4/5 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((data, index) => (
            <div
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-3 flex flex-col items-center gap-4 group transition-transform duration-500 ease-in-out transform"
              key={data.id}
            >
              <div className="flex justify-between w-full">
                <Image src={data.photo} alt="photo" className="w-1/4 h-20" />
                <div className="h-20 w-8 rounded-bl-full ml-auto opacity-25 group-hover:opacity-55 bg-gradient-to-l from-secondary"></div>
              </div>
              <div className="flex flex-col gap-3 p-3">
                <h3 className="text-xl md:text-3xl">{data.header}</h3>
                <p className="text-secondary line-clamp-2">{data.text}</p>
              </div>
              <Image src={data.figure} alt="card" className="w-full" />
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {Array.from(
            { length: Math.ceil(testimonials.length / testimonialsPerSlide) },
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

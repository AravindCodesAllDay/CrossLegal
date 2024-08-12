"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import ladyJustice from "@/app/_assets/ladyJustice.jpeg";
import officeTable from "@/app/_assets/justice.jpeg";

const Carousel = () => {
  const slides = [
    { image: ladyJustice, text: "LEAVE COURT TO US" },
    { image: officeTable, text: "WELCOME TO CROSS LEGAL" },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePointerClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-screen h-[100vh] max-w-full mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full flex-shrink-0 h-full">
            <Image
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center p-6 z-10 bg-black bg-opacity-40">
              <h2 className="text-white text-4xl font-bold text-shadow-md">
                {slide.text}
              </h2>
              <a href="contactus">
                <button className="flex justify-center items-center mt-4">
                  <div className="p-2 bg-white rounded-tl-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-plus size-6"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="#b9967e"
                      fill="none"
                      stroke-linecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 5l0 14" />
                      <path d="M5 12l14 0" />
                    </svg>
                  </div>
                  <div className="bg-secondary rounded-br-lg p-2 text-white font-semibold">
                    Contact Us
                  </div>
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-start p-8">
        {slides.map((_, pointerIndex) => (
          <button
            key={pointerIndex}
            onClick={() => handlePointerClick(pointerIndex)}
            className={`w-3 h-3 mx-2 rounded-full border-2 ${
              pointerIndex === currentIndex
                ? "bg-white border-white"
                : "border-white"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

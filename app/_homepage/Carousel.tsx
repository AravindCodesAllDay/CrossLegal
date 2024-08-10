"use client";
import { useState } from "react";
import Image from "next/image";

import ladyJustice from "@/app/_assets/ladyJustice.jpeg";
import officeTable from "@/app/_assets/justice.jpeg";

const Carousel = () => {
  const slides = [
    { image: ladyJustice, text: "Justice for All" },
    { image: officeTable, text: "Workspace Excellence" },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

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
          <div key={index} className="relative w-full flex-shrink-0">
            <Image
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute left-0 top-0 h-full w-1/3  bg-opacity-50 flex flex-col justify-between p-6">
              <div className="flex-1 flex items-center">
                <h2 className="text-white text-3xl font-bold">{slide.text}</h2>
              </div>
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

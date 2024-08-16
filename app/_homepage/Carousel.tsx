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
  const [animate, setAnimate] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
      setTimeout(() => setAnimate(true), 50);
    }, 15000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePointerClick = (index: number) => {
    setAnimate(false);
    setCurrentIndex(index);
    setTimeout(() => setAnimate(true), 50);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className={`flex transition-transform duration-700 ease-in-out h-full ${
          animate ? "animate-slide" : ""
        }`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`relative w-full flex-shrink-0 h-full flex items-center justify-center bg-black bg-opacity-40`}
          >
            <Image
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
              layout="fill"
            />
            <div
              className={`absolute inset-0 flex flex-col gap-5 justify-center p-3 md:p-16 z-10 ${
                animate ? "block" : "hidden"
              }`}
            >
              <h2
                className={`text-secondary text-xs md:text-lg font-bold text-shadow-md ${
                  animate ? "slide-in delay-300" : "hidden"
                }`}
              >
                {slide.text}
              </h2>
              <div className="text-white text-2xl md:text-7xl">
                <p className={`${animate ? "slide-in delay-500" : "hidden"}`}>
                  The Legal Advice is
                </p>
                <p className={`${animate ? "slide-in delay-500" : "hidden"}`}>
                  Just{" "}
                  <span className="text-transparent font-bold font-outline-2">
                    ONE CALL
                  </span>
                </p>
                <div className="flex gap-3 items-center">
                  <p className={`${animate ? "slide-in delay-500" : "hidden"}`}>
                    Away
                  </p>
                  <div className="border-l-2 border-secondary text-xs md:text-lg pl-3">
                    <p
                      className={`${animate ? "slide-in delay-800" : "hidden"}`}
                    >
                      Don&apos;t Take any
                    </p>
                    <p
                      className={`${animate ? "slide-in delay-800" : "hidden"}`}
                    >
                      Second chances
                    </p>
                  </div>
                </div>
              </div>
              <a
                href="contactus"
                className={`${animate ? "slide-in delay-1100" : "hidden"}`}
              >
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
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute gap-3 bottom-4 right-0 flex justify-center p-8">
        {slides.map((_, pointerIndex) => (
          <button
            key={pointerIndex}
            onClick={() => handlePointerClick(pointerIndex)}
            className={`w-4 h-3 rounded-tl-md rounded-br-md border-2 border-secondary ${
              pointerIndex === currentIndex ? "bg-secondary" : ""
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

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
    <div className="relative w-screen h-[100vh] max-w-full mx-auto overflow-hidden">
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
              className="w-full h-full object-cover -z-20"
              layout="fill"
            />
            <div
              className={`absolute inset-0 flex flex-col gap-3 justify-center p-6 z-10 ml-24 ${
                animate ? "block" : "hidden"
              }`}
            >
              <h2
                className={`text-secondary text-lg font-bold text-shadow-md ${
                  animate ? "slide-in delay-300" : "hidden"
                }`}
              >
                {slide.text}
              </h2>
              <div className="text-white text-6xl">
                <p className={`${animate ? "slide-in delay-500" : "hidden"}`}>
                  The Legal Advice
                </p>
                <p className={`${animate ? "slide-in delay-500" : "hidden"}`}>
                  Need{" "}
                  <span className="text-transparent font-bold font-outline-2">
                    Phone Call
                  </span>
                </p>
                <div className="flex gap-3 items-center mt-4">
                  <p className={`${animate ? "slide-in delay-500" : "hidden"}`}>
                    Away
                  </p>
                  <div className="border-l-2 border-secondary text-base pl-3">
                    <p
                      className={`${animate ? "slide-in delay-800" : "hidden"}`}
                    >
                      Lorem ipsum dolor sit amet consectetur,
                    </p>
                    <p
                      className={`${animate ? "slide-in delay-800" : "hidden"}`}
                    >
                      adipisicing elit. Odit, voluptates.
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
        <svg
          viewBox="0 0 1024 1024"
          className="icon size-20 opacity-20 absolute bottom-0 right-12 -z-10"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M450.72 418.17c-42.29-21.86-144.5-220-171.65-198.22s-40.59 114.28 0.29 171.31 132 97 153.52 129.58 18.45 57.07 13.36 63.2S262.49 462 217.66 485.53s-28.41 84.69 17.56 132.54S427 651.39 455.57 672.76s32.72 55 20.49 55-145.88-32.38-192.77-24.15-68.25 39.89 0.12 73.42 180.26 8.87 199.28 28.21 6.8 28.54-7.47 29.58-110.14-4.91-143.78 0.24 6.21 56.07 23.57 69.3 80.59 19.24 98.94 16.15 36.67-26.58 51-20.48 3.14 45.88 8.25 53 46.92 9.1 53-0.09-10.26-37.71-0.09-51 32.65 11.16 66.28-1.13 109-70.55 111-104.2-132.52 27.76-167.19 26.8c-24.48-4-34.71-21.36-19.43-30.56s228.33-55.45 244.57-96.27 4-34.68-21.47-34.63S605.6 724.45 590.26 700 791 610 813.3 555.9s29.37-119.36-0.22-127.47-147.62 137.92-194.54 130.86-1.06-21.41 19.29-48 132.36-120.51 133.32-154.16 10.08-67.32-27.65-71.33-129.27 135.84-149.69 123.63 52.89-78.61 64-143.89S632.09 133 611.7 137.14s-19.37 4.11-19.34 22.47 10.33 79.52-1.85 114.21-13.14 60.18-23.35 54.08-10.27-43.83-4.2-73.41 23.3-92.83 13.07-112.19S545.27 48.53 467.8 68s-72.25 89.86-65 136.75 27.67 83.57 45.09 128.41 21.71 94.77 2.83 85.01z"
            fill="#5AB286"
          />
        </svg>
      </div>
    </div>
  );
};

export default Carousel;

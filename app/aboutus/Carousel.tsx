"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import testiOne from "@/app/_assets/testiOne.jpg";
import testiTwo from "@/app/_assets/testiTwo.jpg";

export default function Carousel() {
  const slides = [
    {
      imgSrc: testiOne,
      text: "This is a sample paragraph content. Add your content here. It will be displayed on the right side of the image.",
    },
    {
      imgSrc: testiTwo,
      text: "Another sample paragraph content. Add your content here. It will be displayed on the right side of the image.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-96 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center gap-4 p-4 md:p-8">
            <div className="flex-shrink-0">
              <div className="rounded-full border-4 border-dotted border-gray-300 overflow-hidden">
                <Image
                  src={slide.imgSrc}
                  alt={`Slide ${index + 1}`}
                  width={150}
                  height={150}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="max-w-md text-center md:text-left">
              <p className="text-zinc-50 text-sm md:text-base lg:text-lg">
                {slide.text}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

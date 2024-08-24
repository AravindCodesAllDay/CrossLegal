"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import Heading from "../_animations/Heading";

import profile1 from "@/app/_assets/ourTestimonials/1.jpg";
import profile2 from "@/app/_assets/ourTestimonials/2.jpg";
import profile3 from "@/app/_assets/ourTestimonials/3.jpg";

const testimonials = [
  {
    id: 1,
    photo: profile1,
    text: "I had an exceptional experience working with this firm. They handled my case with professionalism and attention to detail. Their legal expertise and client-focused approach made all the difference.",
    name: "Jackin Martinez",
    role: "Business Law Client",
  },
  {
    id: 2,
    photo: profile2,
    text: "The support I received was beyond my expectations. The team was compassionate and knowledgeable, guiding me through every step of the process with confidence and care.",
    name: "Karla Clinton",
    role: "Family Law Client",
  },
  {
    id: 3,
    photo: profile3,
    text: "Their expertise in real estate law helped me navigate a complex situation seamlessly. I highly recommend their services to anyone in need of reliable legal counsel.",
    name: "Kourtney Holland",
    role: "Real Estate Client",
  },
];

export default function OurTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col items-center gap-3 p-5">
      <Heading
        title={"Our Testimonials"}
        line1={"What They Are Talking"}
        line2={"About Igual"}
      />
      <div className="relative w-full max-w-[900px]">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`flex gap-5 items-center cursor-pointer transition-transform duration-500 ease-in-out transform ${
              index === currentIndex ? "translate-x-0" : "translate-x-full"
            }`}
            style={{ display: index === currentIndex ? "flex" : "none" }}
          >
            <Image
              src={testimonial.photo}
              alt="profile"
              className="size-24 sm:size-44 rounded-full border-dashed border p-1"
            />

            <div className="flex flex-col">
              <p className="text-sm sm:text-lg text-[#f8f8f8] line-clamp-3 mb-2">
                {testimonial.text}
              </p>
              <p className="text-lg sm:text-xl text-secondary">
                {testimonial.name}
              </p>
              <p className="text-sm text-[#f8f8f8] sm:text-base">
                {testimonial.role}
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-quote w-8 h-8 sm:w-12 sm:h-12"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#b9967e"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" />
              <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" />
            </svg>
          </div>
        ))}
        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, index) => (
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

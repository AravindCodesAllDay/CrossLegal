"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import profile from "@/app/_assets/statue.jpg";
import Heading from "../_animations/Heading";

const testimonials = [
  {
    id: 1,
    photo: profile,
    text: "rem ipsum dolor sit amet consectetur adipisicing elit. Tempora veritatis magnam et ex laudantium nihil adipisci delectus quis, atque pariatur voluptatem magni dolorum iure quaerat soluta eum placeat saepe deserunt!",
  },
  {
    id: 2,
    photo: profile,
    text: "orem ipsum dolor sit amet consectetur adipisicing elit. Tempora veritatis magnam et ex laudantium nihil adipisci delectus quis, atque pariatur voluptatem magni dolorum iure quaerat soluta eum placeat saepe deserunt!",
  },
  {
    id: 3,
    photo: profile,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora veritatis magnam et ex laudantium nihil adipisci delectus quis, atque pariatur voluptatem magni dolorum iure quaerat soluta eum placeat saepe deserunt!",
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
    <div className="flex flex-col justify-center items-center gap-3 p-5">
      <Heading
        title={"Our Testimonials"}
        line1={"What They Are Talking"}
        line2={"About Igual"}
      />

      <div className="relative w-full max-w-[900px]">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`flex gap-3 items-center transition-transform duration-500 ease-in-out transform ${
              index === currentIndex ? "translate-x-0" : "translate-x-full"
            }`}
            style={{ display: index === currentIndex ? "flex" : "none" }}
          >
            <Image
              src={testimonial.photo}
              alt="profile"
              className="size-24 rounded-full"
            />
            <p className="text-xl">{testimonial.text}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-quote size-36"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#b9967e"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
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
              className={`w-4 h-3 rounded-tl-md rounded-br-md  cursor-pointer transition-all duration-300 ${
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

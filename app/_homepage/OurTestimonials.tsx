"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import profile from "@/app/_assets/statue.jpg";

const testimonials = [
  {
    id: 1,
    text: "rem ipsum dolor sit amet consectetur adipisicing elit. Tempora veritatis magnam et ex laudantium nihil adipisci delectus quis, atque pariatur voluptatem magni dolorum iure quaerat soluta eum placeat saepe deserunt!",
  },
  {
    id: 2,
    text: "orem ipsum dolor sit amet consectetur adipisicing elit. Tempora veritatis magnam et ex laudantium nihil adipisci delectus quis, atque pariatur voluptatem magni dolorum iure quaerat soluta eum placeat saepe deserunt!",
  },
  {
    id: 3,
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

  return (
    <div className="flex flex-col justify-center items-center gap-3 p-5">
      <h3 className="flex items-center gap-3 text-2xl text-secondary">
        <div className="h-3 w-5 bg-gradient-to-r from-secondary rounded-tl-md rounded-br-md"></div>
        Our Testimonials
        <div className="h-3 w-5 bg-gradient-to-l from-secondary rounded-tl-md rounded-br-md"></div>
      </h3>
      <p className="flex flex-col text-primary text-4xl font-bold">
        <span>What They Are Talking</span>
        <span>About Igual</span>
      </p>
      <div className="relative w-full max-w-[900px]">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`flex items-center transition-transform duration-500 ease-in-out transform ${
              index === currentIndex ? "translate-x-0" : "translate-x-full"
            }`}
            style={{ display: index === currentIndex ? "flex" : "none" }}
          >
            <Image
              src={profile}
              alt="profile"
              className="size-24 rounded-full"
            />
            <p className="text-xl">{testimonial.text}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-quote"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
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
      </div>
    </div>
  );
}

"use client";
import React, { useState } from "react";
import Image from "next/image";

import card from "@/app/_assets/card.jpg";
import Heading from "../_animations/Heading";

import img1 from "@/app/_assets/whatWeDo/1.png";
import img2 from "@/app/_assets/whatWeDo/2.png";
import img3 from "@/app/_assets/whatWeDo/3.png";
import img4 from "@/app/_assets/whatWeDo/4.png";
import img5 from "@/app/_assets/whatWeDo/5.png";

export default function WhatWeDo() {
  const testimonials = [
    {
      id: 1,
      photo: img1,
      header: "Insurance Law1",
      text: "Awesome Services Grow Your Business Value There are many variations..",
    },
    {
      id: 2,
      photo: img2,
      header: "Insurance Law2",
      text: "Awesome Services Grow Your Business Value There are many variations..",
    },
    {
      id: 3,
      photo: img3,
      header: "Insurance Law3",
      text: "Awesome Services Grow Your Business Value There are many variations..",
    },
    {
      id: 4,
      photo: img4,
      header: "Insurance Law4",
      text: "Awesome Services Grow Your Business Value There are many variations..",
    },
    {
      id: 5,
      photo: img5,
      header: "Insurance Law5",
      text: "Awesome Services Grow Your Business Value There are many variations..",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= testimonials.length ? 0 : prevIndex + 3
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 3
    );
  };

  return (
    <div className="p-5 flex flex-col gap-5">
      <div className="flex items-center justify-center gap-10">
        <div className="flex flex-col gap-3">
          <Heading
            title={"What We Do"}
            line1={"A Passion For Justice,"}
            line2={"Our Practice Areas"}
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
      <div className="flex justify-around">
        {testimonials.slice(currentIndex, currentIndex + 3).map((data) => (
          <div
            className="flex flex-col gap-3 max-w-96 group hover:shadow-xl"
            key={data.id}
          >
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-file-spreadsheet size-12 ml-3"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#b9967e"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                <path d="M8 11h8v7h-8z" />
                <path d="M8 15h8" />
                <path d="M11 11v7" />
              </svg>
              <div className="h-20 w-8 rounded-bl-full ml-auto opacity-25 group-hover:opacity-55 bg-gradient-to-l from-secondary"></div>
            </div>
            <div className="flex flex-col gap-3 p-3">
              <h3 className="text-3xl">{data.header}</h3>
              <p className="text-secondary line-clamp-2">{data.text}</p>
            </div>
            <Image src={card} alt="card" />
          </div>
        ))}
      </div>
      <div className="flex gap-4 ml-auto">
        <button
          onClick={handlePrev}
          className="px-3 py-1 bg-secondary rounded-tl-3xl rounded-br-3xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-arrow-badge-left-filled size-10"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#fff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 6h-6a1 1 0 0 0 -.78 .375l-4 5a1 1 0 0 0 0 1.25l4 5a1 1 0 0 0 .78 .375h6l.112 -.006a1 1 0 0 0 .669 -1.619l-3.501 -4.375l3.5 -4.375a1 1 0 0 0 -.78 -1.625z"
              stroke-width="0"
              fill="#fff"
            />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="px-3 py-1 bg-secondary rounded-tl-3xl rounded-br-3xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-arrow-badge-right-filled size-10"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#fff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M7 6l-.112 .006a1 1 0 0 0 -.669 1.619l3.501 4.375l-3.5 4.375a1 1 0 0 0 .78 1.625h6a1 1 0 0 0 .78 -.375l4 -5a1 1 0 0 0 0 -1.25l-4 -5a1 1 0 0 0 -.78 -.375h-6z"
              stroke-width="0"
              fill="#fff"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

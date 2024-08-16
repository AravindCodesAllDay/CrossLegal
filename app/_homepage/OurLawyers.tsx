"use client";
import Image from "next/image";
import React, { useState } from "react";

import profile from "@/app/_assets/statue.jpg";
import Heading from "../_animations/Heading";

const profiles = [
  { name: "James Garcia", specialty: "Real Estate Law", image: profile },
  { name: "Jane Doe", specialty: "Corporate Law", image: profile },
  { name: "John Smith", specialty: "Criminal Law", image: profile },
  { name: "Anna Taylor", specialty: "Family Law", image: profile },
  { name: "Michael Brown", specialty: "Immigration Law", image: profile },
  { name: "Emily White", specialty: "Intellectual Property", image: profile },
];

export default function OurLawyers() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < profiles.length - 3) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <Heading
        title={"Our Lawyers"}
        line1={"A Passion For Justice, Our"}
        line2={"Practice Areas"}
      />

      <div className="flex justify-around w-full">
        {profiles
          .slice(currentIndex, currentIndex + 3)
          .map((profile, index) => (
            <div
              key={index}
              className="w-96 h-96 relative items-center flex flex-col justify-around"
            >
              <div className="w-full h-1/2 rounded-b-full bg-secondary opacity-15 absolute top-0"></div>
              <div className="flex flex-col items-center">
                <h6 className="text-2xl">{profile.name}</h6>
                <p className="text-secondary">{profile.specialty}</p>
              </div>
              <Image
                src={profile.image}
                alt="profile"
                className="size-56 rounded-full border-2 border-secondary p-2"
              />
              <ul className="flex gap-5">
                <li className="rounded-full p-1 bg-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-facebook  size-8 stroke-white"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                  </svg>
                </li>
                <li className="rounded-full p-1 bg-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-linkedin size-8"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#fff"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                    <path d="M8 11l0 5" />
                    <path d="M8 8l0 .01" />
                    <path d="M12 16l0 -5" />
                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                  </svg>
                </li>
                <li className="rounded-full p-1 bg-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-instagram size-8"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#fff"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M16.5 7.5l0 .01" />
                  </svg>
                </li>
              </ul>
              <div className="w-full h-1/2 rounded-t-full bg-secondary opacity-25 absolute bottom-0"></div>
            </div>
          ))}
      </div>

      <div className="flex gap-5 mt-5">
        <button
          onClick={handlePrev}
          className="px-3 py-1 bg-secondary rounded-tl-3xl rounded-br-3xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-arrow-badge-left-filled size-10"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#fff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 6h-6a1 1 0 0 0 -.78 .375l-4 5a1 1 0 0 0 0 1.25l4 5a1 1 0 0 0 .78 .375h6l.112 -.006a1 1 0 0 0 .669 -1.619l-3.501 -4.375l3.5 -4.375a1 1 0 0 0 -.78 -1.625z"
              strokeWidth="0"
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
            strokeWidth="1.5"
            stroke="#fff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M7 6l-.112 .006a1 1 0 0 0 -.669 1.619l3.501 4.375l-3.5 4.375a1 1 0 0 0 .78 1.625h6a1 1 0 0 0 .78 -.375l4 -5a1 1 0 0 0 0 -1.25l-4 -5a1 1 0 0 0 -.78 -.375h-6z"
              strokeWidth="0"
              fill="#fff"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

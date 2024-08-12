"use client";
import Image from "next/image";
import React, { useState } from "react";

import profile from "@/app/_assets/statue.jpg";

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
      <h3 className="flex items-center gap-3 text-2xl text-secondary">
        <div className="h-3 w-5 bg-gradient-to-r from-secondary rounded-tl-md rounded-br-md"></div>
        Our Lawyers
        <div className="h-3 w-5 bg-gradient-to-l from-secondary rounded-tl-md rounded-br-md"></div>
      </h3>
      <p className="flex flex-col text-primary text-4xl font-bold">
        <span>A Passion For Justice, Our</span>
        <span>Practice Areas</span>
      </p>

      <div className="flex justify-around w-full">
        {profiles
          .slice(currentIndex, currentIndex + 3)
          .map((profile, index) => (
            <div
              key={index}
              className="w-96 h-96 relative items-center flex flex-col justify-around"
            >
              <div className="w-full h-1/2 rounded-b-full bg-secondary opacity-15 absolute top-0"></div>
              <h6 className="text-2xl">{profile.name}</h6>
              <p className="text-secondary">{profile.specialty}</p>
              <Image
                src={profile.image}
                alt="profile"
                className="size-56 rounded-full border-2 border-secondary p-2"
              />
              <ul className="flex justify-around w-full">
                <li className="rounded-full p-2 bg-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-facebook-filled size-8 text-white"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#fff"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M18 2a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -.883 .993l-.117 .007h-3v1h3a1 1 0 0 1 .991 1.131l-.02 .112l-1 4a1 1 0 0 1 -.858 .75l-.113 .007h-2v6a1 1 0 0 1 -.883 .993l-.117 .007h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-6h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-4a1 1 0 0 1 .883 -.993l.117 -.007h2v-1a6 6 0 0 1 5.775 -5.996l.225 -.004h3z"
                      stroke-width="0"
                      fill="currentColor"
                    />
                  </svg>
                </li>
                <li className="rounded-full p-2 bg-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-linkedin size-8"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#fff"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                    <path d="M8 11l0 5" />
                    <path d="M8 8l0 .01" />
                    <path d="M12 16l0 -5" />
                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                  </svg>
                </li>
                <li className="rounded-full p-2 bg-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-instagram size-8"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#fff"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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

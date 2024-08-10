"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import team from "@/assets/abtHeader.jpg";
import lawyer from "@/assets/lawyerAbt.jpg";
import justice from "@/assets/justice.svg";
import Navbar from "@/app/_components/Navbar";

export default function page() {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNumber((prevNumber) => {
        if (prevNumber < 3200) {
          return prevNumber + 32;
        } else {
          clearInterval(interval);
          return prevNumber;
        }
      });
    }, 35);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <Navbar />

        <div className="relative h-96 overflow-clip bg-[#15171f]">
          <Image
            src={team}
            alt="Team Image"
            className="w-full h-[60vh] opacity-10"
          />
          <div className="absolute top-1/3  right-3/4">
            <div className="flex flex-col items-center">
              <h1 className="text-5xl font-marcellus text-zinc-100">
                About Us
              </h1>
              <div className="flex text-zinc-50 text-sm py-5 items-center list-none">
                <li className="px-2 hover:text-secondary">
                  <a href="/">Home</a>
                </li>
                <span>
                  <div className="h-3 w-3 bg-[#65554d] mt-0.5 rounded-tl-md rounded-br-md"></div>
                </span>
                <li className="px-2">
                  <a href="">About Us</a>
                </li>
              </div>
            </div>
          </div>
        </div>

        <div className="relative p-24">
          <div className="flex flex-wrap ">
            <div className="relative">
              <Image
                src={lawyer}
                alt="Lawyer"
                className="w-[150%] rounded-tr-[50px] rounded-bl-[50px] ml-0 md:ml-20"
              />
              <div className="absolute top-96  flex items-center justify-center">
                <div className="w-[320px] bg-secondary p-8 text-center text-zinc-50 rounded-bl-[50px]">
                  <p className="text-[56px] font-marcellus">{currentNumber}+</p>
                  <p className="text-[14.5px] font-semibold">
                    LAWYERS ACROSS OUR GLOBAL PLATFORM
                  </p>
                </div>
                <div className="absolute z-10 w-[30%] h-[30%] opacity-25 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Image src={justice} alt="Justice Icon" />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-24 p-10 h-0">
              <div className="flex">
                <div className="h-3.5 w-6 bg-gradient-to-r from-secondary to-white rounded-tr-md rounded-bl-md"></div>
                <p className="text-secondary text-sm px-2 font-[550] -mt-0.5">
                  ABOUT US
                </p>
                <div className="h-3.5 w-6 bg-gradient-to-r from-white to-secondary rounded-tr-md rounded-bl-md"></div>
              </div>
              <div className="h-2/4 flex flex-wrap">
                <p className="font-marcellus text-xl">
                  We’re Advocates for People Justice and Right
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

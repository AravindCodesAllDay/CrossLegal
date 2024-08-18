"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

import lawyer from "@/app/_assets/lawyerAbt.jpg";
import justice from "@/app/_assets/justice.svg";
import quote from "@/app/_assets/leftQuote.png";
import Counter from "../_animations/Counter";

export default function AboutUs() {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className="relative h-[700px] p-6 sm:p-12 md:p-24 w-full flex flex-col md:flex-row justify-around"
    >
      <div
        className={`flex flex-col gap-20 md:flex-row transform duration-500 ease-in ${
          isInView ? "translate-y-0" : "translate-y-full opacity-0"
        }`}
      >
        <div className="relative w-full md:w-2/4 mb-8 md:mb-0">
          <Image
            src={lawyer}
            alt="Lawyer"
            className="w-full rounded-tr-[20px] sm:rounded-tr-[40px] md:rounded-tr-[50px] rounded-bl-[20px] sm:rounded-bl-[40px] md:rounded-bl-[50px] ml-0 md:ml-20"
          />
          <div className="absolute top-[350px] sm:top-[460px] md:top-[510px] flex items-center justify-center">
            <div className="w-[240px] sm:w-[280px] md:w-[320px] bg-secondary p-6 sm:p-7 md:p-8 text-center text-zinc-50 rounded-bl-[20px] sm:rounded-bl-[40px] md:rounded-bl-[50px]">
              <p className="text-[28px] sm:text-[46px] md:text-[56px] font-marcellus">
                <Counter start={1000} count={200} targetNumber={3200} />+
              </p>
              <p className="text-[12px] sm:text-[13.5px] md:text-[14.5px] font-semibold">
                LAWYERS ACROSS OUR GLOBAL PLATFORM
              </p>
            </div>
            <div className="absolute z-10 w-[20%] sm:w-[25%] md:w-[30%] h-[20%] sm:h-[25%] md:h-[30%] opacity-25 top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2">
              <Image src={justice} alt="Justice Icon" />
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3 flex flex-col gap-4 md:gap-5 p-4 sm:p-6 md:p-10">
          <div className="flex justify-center md:justify-start">
            <div className="h-3.5 w-6 bg-gradient-to-r from-secondary to-white rounded-tr-md rounded-bl-md"></div>
            <p className="text-secondary text-xs sm:text-sm px-2 font-[550] -mt-0.5">
              ABOUT US
            </p>
            <div className="h-3.5 w-6 bg-gradient-to-r from-white to-secondary rounded-tr-md rounded-bl-md"></div>
          </div>
          <div className="w-full text-center md:text-left">
            <p className="font-marcellus font-light leading-[35px] sm:leading-[45px] md:leading-[55px] text-[1.8em] sm:text-[2.4em] md:text-[2.8em] text-[#1e1e1e]">
              We&apos;re Advocates for People&apos;s Justice and Right
            </p>
            <div className="w-[40%] sm:w-[18%] mt-2 sm:mt-3 md:mt-4 h-0.5 bg-gradient-to-r from-secondary to-white mx-auto md:mx-0"></div>
          </div>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] py-4 sm:py-5 md:py-6 leading-loose text-gray-500 text-center md:text-left">
            Welcome to Cross Legal, where we understand the unique legal needs
            of Non-Resident Indians (NRIs) across the globe. Our team of skilled
            NRI lawyers specializes in providing comprehensive legal solutions
            tailored to the specific challenges faced by individuals, families,
            and businesses with ties to India but residing abroad.
          </p>
          <div className="relative flex flex-col items-center md:items-start gap-3 sm:gap-4 md:gap-5">
            <div className="flex items-center">
              <Image
                className="w-[35px] sm:w-[45px] md:w-[55px] h-[35px] sm:h-[45px] md:h-[55px]"
                src={quote}
                alt="Left Quote"
              />
              <p className="leading-loose italic font-marcellus font-[500] text-base sm:text-lg md:text-xl text-[#1e1e1e] ml-2">
                We believe everyone deserves affordable and simple access to
                legal services and helping people.
              </p>
            </div>
            <a href="contactus" className="group">
              <button className="flex justify-center items-center mx-auto md:mx-0">
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
                <div className="bg-secondary transform transition-transform duration-500 group-hover:bg-[#00192c] rounded-br-lg p-2 text-white font-semibold text-sm sm:text-base">
                  Learn More
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

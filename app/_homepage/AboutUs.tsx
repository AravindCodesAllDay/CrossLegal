"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

import women from "@/app/_assets/women.jpg";
import team from "@/app/_assets/team.jpg";
import Heading from "../_animations/Heading";

export default function AboutUs() {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = elementRef.current;

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

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      className="relative w-full flex flex-col md:flex-row items-center justify-around my-12"
      ref={elementRef}
    >
      <div className="h-1/2 w-full bg-[#f9f9f9] absolute -z-20"></div>

      <Image
        src={women}
        alt="women"
        className="rounded-tl-[100px] w-full p-6 md:w-2/5 rounded-br-[100px] "
      />

      <div className={`w-full md:w-2/5 flex flex-col gap-8 p-6`}>
        <div className="h-1/2 flex flex-col justify-center gap-3">
          <Heading
            title={"About Firm"}
            line1={"We're Advocates for"}
            line2={"Justice and Right"}
          />
          <div
            className={`transform transition-transform duration-1000 ease-out ${
              isInView ? "translate-y-0" : "translate-y-32 opacity-0"
            }`}
          >
            <p>
              With a deep understanding of both Indian law and the legal
              frameworks of other jurisdictions, our NRI lawyers offer a unique
              perspective that transcends borders.
            </p>
          </div>
        </div>

        <div className="relative flex justify-center h-1/2">
          <Image src={team} alt="team" />
          <div
            className={`absolute flex flex-col gap-3 bottom-0 bg-white p-3 rounded-tl-3xl rounded-br-3xl shadow-xl transform transition-transform duration-1000 ease-out ${
              isInView ? "translate-y-0" : "translate-y-32 opacity-0"
            }`}
          >
            <h3 className="flex items-center gap-3 text-lg md:text-2xl text-secondary">
              <div className="h-3 w-5 bg-gradient-to-r from-secondary rounded-tl-md rounded-br-md"></div>
              Ask a Lawyer
              <div className="h-3 w-5 bg-gradient-to-l from-secondary rounded-tl-md rounded-br-md"></div>
            </h3>
            <p className="flex flex-col text-2xl md:text-3xl font-bold">
              <span>We Provide Solid Law</span>
              <span>Practice</span>
            </p>
            <a href="contactus">
              <button className="flex justify-center items-center group text-sm md:text-lg">
                <div className="p-3 bg-[#00192c] text-white transform transition-transform duration-500 group-hover:bg-secondary rounded-tl-lg">
                  Call Us
                </div>
                <div className="bg-secondary transform transition-transform duration-500 group-hover:bg-[#00192c] rounded-br-lg p-3 text-white font-semibold">
                  +(91) XXXXX XXXXX
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

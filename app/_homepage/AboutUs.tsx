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

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full flex justify-around" ref={elementRef}>
      <div className="h-1/2 w-full bg-[#f9f9f9] absolute -z-20"></div>

      <Image
        src={women}
        alt="women"
        className="rounded-tl-3xl rounded-br-3xl"
      />

      <div className={`w-2/5 flex flex-col gap-8 `}>
        <div className="h-1/2 flex flex-col justify-center gap-3">
          <Heading
            title={"About Us"}
            line1={"We're Advocates for"}
            line2={"Justice and Right"}
          />
          <div
            className={`transform transition-transform duration-1000 ease-out ${
              isInView ? "translate-y-0" : "translate-y-32 opacity-0"
            }`}
          >
            <p>
              All the Lorem Ipsum generators on the Internet tend to predefined
              chunks as necessary, making this the first true generator on net.
              Uses a dictionary of over always true latin words.
            </p>
          </div>
        </div>

        <div className="relative flex justify-center h-1/2">
          <Image src={team} alt="team" className="-translate-y-20" />
          <div
            className={`absolute flex flex-col gap-3 bottom-0 bg-white p-5 rounded-tl-3xl rounded-br-3xl shadow-xl transform transition-transform duration-1000 ease-out ${
              isInView ? "translate-y-0" : "translate-y-32 opacity-0"
            }`}
          >
            <h3 className="flex items-center gap-3 text-2xl text-secondary">
              <div className="h-3 w-5 bg-gradient-to-r from-secondary rounded-tl-md rounded-br-md"></div>
              About Us
              <div className="h-3 w-5 bg-gradient-to-l from-secondary rounded-tl-md rounded-br-md"></div>
            </h3>
            <p className="flex flex-col text-4xl font-bold">
              <span>We’re Advocates for</span>
              <span>Justice and Right</span>
            </p>
            <a href="contactus">
              <button className="flex justify-center items-center">
                <div className="p-4 bg-primary text-white rounded-tl-lg">
                  Call Us
                </div>
                <div className="bg-secondary rounded-br-lg p-4 text-white font-semibold">
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

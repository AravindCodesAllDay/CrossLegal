"use client";
import React, { useState, useEffect, useRef } from "react";

export default function Poster02() {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentElement = elementRef.current;

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
      className={`w-4/5 bg-primary text-white -z-20 flex justify-between items-center mx-auto overflow-hidden`}
      ref={elementRef}
    >
      <div
        className="hidden relative md:block w-1/6 pb-[25%] overflow-hidden"
        style={{
          transformOrigin: "0 100%",
          transform: "skewX(30deg) translateZ(1px)",
        }}
      >
        <div
          className="absolute w-[100%] h-full bg-center bg-cover bg-gradient-to-b from-secondary"
          style={{
            transformOrigin: "inherit",
            transform: "skewX(-30deg)",
          }}
        ></div>
      </div>
      <div className="hidden relative md:block w-1/5 pb-[25%] overflow-hidden">
        <div
          className="absolute w-[100%] h-full bg-center bg-cover"
          style={{
            backgroundImage: "url('/poster.webp')",
          }}
        ></div>
      </div>
      <div
        className="hidden relative md:block -z-10 w-1/6 pb-[25%] overflow-hidden"
        style={{
          transformOrigin: "0 100%",
          transform: "skewX(30deg) translateZ(1px)",
        }}
      >
        <div
          className="absolute w-[190%] h-full bg-center bg-cover bg-gradient-to-t  from-secondary"
          style={{
            transformOrigin: "inherit",
            transform: "skewX(30deg)",
          }}
        ></div>
      </div>
      <div
        className={`flex flex-col gap-5 p-5 transform transition-transform duration-1000 ease-out ${
          isInView ? "translate-y-0" : "translate-y-32 opacity-0"
        }`}
      >
        <h3 className="flex items-center gap-2 text-2xl text-secondary">
          <div className="h-3 w-5 bg-gradient-to-r from-secondary rounded-tl-md rounded-br-md"></div>
          Contact
          <div className="h-3 w-5 bg-gradient-to-l from-secondary rounded-tl-md rounded-br-md"></div>
        </h3>
        <p className="flex flex-col text-4xl font-bold">
          <span>Are You Looking for Help</span>
          <span>From a Lawyer?</span>
        </p>
        <a href="contactus">
          <button className="flex justify-center items-center group">
            <div className="p-2 bg-white transform transition-transform duration-500 group-hover:bg-secondary rounded-tl-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-plus size-6 transform transition-transform duration-300 group-hover:rotate-90 stroke-primary"
                viewBox="0 0 24 24"
                strokeWidth="2"
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
              Contact Us
            </div>
          </button>
        </a>
      </div>
    </div>
  );
}

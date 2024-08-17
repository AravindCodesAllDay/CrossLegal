"use client";
import React, { useState, useEffect, useRef } from "react";
import StarRating from "../_animations/StarRating";

export default function Poster01() {
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
      className={`w-4/5 bg-primary text-white flex flex-col md:flex-row justify-between items-center mx-auto overflow-hidden`}
      ref={elementRef}
    >
      <div
        className={`p-5 transform transition-transform duration-1000 ease-out ${
          isInView ? "translate-y-0" : "translate-y-32 opacity-0"
        }`}
      >
        <h3 className="flex items-center gap-3 text-xl text-secondary mb-2">
          <div className="h-3 w-5 bg-gradient-to-r from-secondary rounded-tl-md rounded-br-md"></div>
          Any Property Issues?
          <div className="h-3 w-5 bg-gradient-to-l from-secondary rounded-tl-md rounded-br-md"></div>
        </h3>
        <p className="flex flex-col text-4xl font-marcellus mb-4">
          <span>Get into Few Steps,</span>
          <span>Start Easily..</span>
        </p>
        <div className="flex flex-col md:flex-row gap-3">
          <p>Trust Score 4.6 (Based on 1,200 reviews)</p>
          <StarRating rating={4.6} />
        </div>
      </div>
      <div
        className="hidden relative md:block w-full md:w-1/6 pb-[25%] overflow-hidden"
        style={{
          transformOrigin: "0 100%",
          transform: "skewX(-30deg) translateZ(1px)",
        }}
      >
        <div
          className="absolute w-[190%] h-full bg-center bg-cover bg-gradient-to-b from-secondary"
          style={{
            transformOrigin: "inherit",
            transform: "skewX(30deg)",
          }}
        ></div>
      </div>
      <div
        className="hidden relative md:block w-full md:w-1/5 pb-[25%] overflow-hidden"
        style={{
          transformOrigin: "0 100%",
          transform: "skewX(-30deg) translateZ(1px)",
        }}
      >
        <div
          className="absolute w-[175%] h-full bg-center bg-cover"
          style={{
            backgroundImage: "url('/justice.jpg')",
            transformOrigin: "inherit",
            transform: "skewX(30deg)",
          }}
        ></div>
      </div>
      <div
        className="hidden relative md:block w-full md:w-1/6 pb-[25%] overflow-hidden"
        style={{
          transformOrigin: "0 100%",
          transform: "skewX(-30deg) translateZ(1px)",
        }}
      >
        <div
          className="absolute w-[100%] h-full bg-center bg-cover bg-gradient-to-t from-secondary"
          style={{
            transformOrigin: "inherit",
            transform: "skewX(30deg)",
          }}
        ></div>
      </div>
    </div>
  );
}

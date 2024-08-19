"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

import Heading from "../_animations/Heading";

import blog1 from "@/app/_assets/articles/1.jpg";
import blog2 from "@/app/_assets/articles/2.jpg";
import blog3 from "@/app/_assets/articles/3.jpg";
import blog4 from "@/app/_assets/articles/4.jpg";

const articles = [
  {
    id: 1,
    date: "1st August",
    category: "Family, Lawyer",
    title: ["A World Class Packaging Team,", "Built for You"],
    image: blog1,
  },
  {
    id: 2,
    date: "2nd August",
    category: "Technology, Innovation",
    title: ["Innovative Solutions for", "Modern Problems"],
    image: blog2,
  },
  {
    id: 3,
    date: "3rd August",
    category: "Business, Growth",
    title: ["Strategies for Business", "Growth in 2024"],
    image: blog3,
  },
  {
    id: 4,
    date: "4th August",
    category: "Health, Wellness",
    title: ["Tips for a Healthier", "Lifestyle"],
    image: blog4,
  },
];

export default function RecentArticles() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [articlesPerSlide, setArticlesPerSlide] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setTranslateX(-index * 100);
  };

  useEffect(() => {
    const updateArticlesPerSlide = () => {
      if (window.innerWidth >= 1024) {
        setArticlesPerSlide(3);
      } else if (window.innerWidth >= 640) {
        setArticlesPerSlide(2);
      } else {
        setArticlesPerSlide(1);
      }
    };

    updateArticlesPerSlide();
    window.addEventListener("resize", updateArticlesPerSlide);

    return () => {
      window.removeEventListener("resize", updateArticlesPerSlide);
    };
  }, []);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    setStartX(
      e.type === "touchstart"
        ? (e as React.TouchEvent).touches[0].clientX
        : (e as React.MouseEvent).clientX
    );
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const currentX =
      e.type === "touchmove"
        ? (e as React.TouchEvent).touches[0].clientX
        : (e as React.MouseEvent).clientX;
    const diff = currentX - startX;

    // Limit translateX to the first and last slides
    const maxTranslateX = 0;
    const minTranslateX =
      -(Math.ceil(articles.length / articlesPerSlide) - 1) * 100;

    setTranslateX((prevTranslateX) =>
      Math.max(
        Math.min(
          -currentIndex * 100 +
            (diff / containerRef.current!.offsetWidth) * 100,
          maxTranslateX
        ),
        minTranslateX
      )
    );
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    const currentX =
      e.type === "touchend"
        ? (e as React.TouchEvent).changedTouches[0].clientX
        : (e as React.MouseEvent).clientX;
    const diff = currentX - startX;

    if (diff > 50 && currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else if (
      diff < -50 &&
      currentIndex < Math.ceil(articles.length / articlesPerSlide) - 1
    ) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
    setTranslateX(-currentIndex * 100);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-8 p-5">
      <Heading
        title={"Recent Articles"}
        line1={"What News Do We Have"}
        line2={"Today, Latest Blog"}
      />
      <div
        className="relative w-full overflow-hidden cursor-grab"
        ref={containerRef}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
        onMouseLeave={() => isDragging && setIsDragging(false)}
      >
        <div
          className={`flex transition-transform duration-500 ease-in-out`}
          style={{ transform: `translateX(${translateX}%)` }}
        >
          {articles.map((article) => (
            <div
              key={article.id}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-4 flex flex-col items-center group transition-transform duration-500 ease-in-out transform"
            >
              <div className="relative max-w-full select-none">
                <Image
                  src={article.image}
                  alt="blog"
                  className="w-full h-auto"
                />
                <div className="h-full w-full top-0 absolute group-hover:bg-primary group-hover:opacity-45 transition-colors ease-in-out duration-200"></div>
                <div className="bg-white w-4/5 absolute bottom-0 left-0 p-2">
                  <div className="absolute right-0 translate-x-8 -translate-y-8 rounded-tl-xl rounded-br-xl bg-secondary size-16 text-white p-1 text-center font-semibold">
                    {article.date}
                  </div>
                  <p className="text-secondary">{article.category}</p>
                  <h5 className="flex flex-col text-lg md:text-xl lg:text-2xl">
                    {article.title.map((line, i) => (
                      <span key={i}>{line}</span>
                    ))}
                  </h5>
                  <button className="text-secondary">Learn More +</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {Array.from(
            { length: Math.ceil(articles.length / articlesPerSlide) },
            (_, index) => (
              <div
                key={index}
                className={`w-4 h-3 rounded-tl-md rounded-br-md cursor-pointer transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-secondary transform scale-125"
                    : "bg-gray-300"
                }`}
                onClick={() => handleDotClick(index)}
              ></div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

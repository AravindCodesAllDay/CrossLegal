"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

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

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
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

  return (
    <div className="flex flex-col justify-center items-center gap-3 p-5">
      <Heading
        title={"Recent Articles"}
        line1={"What News Do We Have"}
        line2={"Today, Latest Blog"}
      />
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {articles.map((article, index) => (
            <div
              key={article.id}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-4 flex flex-col items-center group transition-transform duration-500 ease-in-out transform"
            >
              <div className="relative max-w-full">
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

"use client";
import Image from "next/image";
import React, { useState } from "react";

import blog from "@/app/_assets/blog.jpg";
import Heading from "../_animations/Heading";

const articles = [
  {
    id: 1,
    date: "1st August",
    category: "Family, Lawyer",
    title: ["A World Class Packaging Team,", "Built for You"],
    image: blog,
  },
  {
    id: 2,
    date: "2nd August",
    category: "Technology, Innovation",
    title: ["Innovative Solutions for", "Modern Problems"],
    image: blog,
  },
  {
    id: 3,
    date: "3rd August",
    category: "Business, Growth",
    title: ["Strategies for Business", "Growth in 2024"],
    image: blog,
  },
  {
    id: 4,
    date: "4th August",
    category: "Health, Wellness",
    title: ["Tips for a Healthier", "Lifestyle"],
    image: blog,
  },
];

export default function RecentArticles() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-3 p-5">
      <Heading
        title={"Recent Articles"}
        line1={"What News Do We Have"}
        line2={"Today, Latest Blog"}
      />
      <div className="relative w-full max-w-[900px]">
        <div className="flex flex-wrap justify-between">
          {articles.slice(currentIndex, currentIndex + 2).map((article) => (
            <div
              key={article.id}
              className="flex flex-col items-center transition-transform duration-500 ease-in-out transform"
              style={{ flexBasis: "45%" }}
            >
              <div className="relative max-w-[600px]">
                <Image src={article.image} alt="blog" />
                <div className="bg-white w-4/5 absolute bottom-0 left-0 p-2">
                  <div className="absolute right-0 translate-x-8 -translate-y-8 rounded-tl-xl rounded-br-xl bg-secondary size-16 text-white p-1 text-center font-semibold">
                    {article.date}
                  </div>
                  <p className="text-secondary">{article.category}</p>
                  <h5 className="flex flex-col text-3xl">
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
            { length: Math.ceil(articles.length / 2) },
            (_, index) => (
              <div
                key={index}
                className={`w-4 h-3 rounded-tl-md rounded-br-md cursor-pointer transition-all duration-300 ${
                  currentIndex === index * 2
                    ? "bg-secondary transform scale-125"
                    : "bg-gray-300"
                }`}
                onClick={() => handleDotClick(index * 2)}
              ></div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

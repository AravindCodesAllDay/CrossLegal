import Image from "next/image";
import React from "react";

import blog from "@/app/_assets/blog.jpg";

export default function RecentArticles() {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <h3 className="flex items-center gap-3 text-2xl text-secondary">
        <div className="h-3 w-5 bg-gradient-to-r from-secondary rounded-tl-md rounded-br-md"></div>
        Recent Articles
        <div className="h-3 w-5 bg-gradient-to-l from-secondary rounded-tl-md rounded-br-md"></div>
      </h3>
      <p className="flex flex-col text-primary text-4xl font-bold">
        <span>What News Do We Have</span>
        <span>Today, Latest Blog</span>
      </p>
      <div className="flex w-full justify-around">
        <div className="relative max-w-[600px]">
          <Image src={blog} alt="blog" />
          <div className="bg-white w-4/5 absolute bottom-0 left-0 p-2">
            <div className="absolute right-0 translate-x-8 -translate-y-8 rounded-tl-xl rounded-br-xl bg-secondary size-16 text-white p-1 text-center font-semibold">
              1st August
            </div>
            <p className="text-secondary">Family, Lawyer</p>
            <h5 className="flex flex-col text-3xl">
              <span>A World Class Packaging Team,</span>
              <span>Built for You</span>
            </h5>
            <button className="text-secondary">Learn More +</button>
          </div>
        </div>
        <div className="relative max-w-[600px]">
          <Image src={blog} alt="blog" />
          <div className="bg-white w-4/5 absolute bottom-0 left-0 p-2">
            <div className="absolute right-0 translate-x-8 -translate-y-8 rounded-tl-xl rounded-br-xl bg-secondary size-16 text-white p-1 text-center font-semibold">
              1st August
            </div>
            <p className="text-secondary">Family, Lawyer</p>
            <h5 className="flex flex-col text-3xl">
              <span>A World Class Packaging Team,</span>
              <span>Built for You</span>
            </h5>
            <button className="text-secondary">Learn More +</button>
          </div>
        </div>
      </div>
    </div>
  );
}

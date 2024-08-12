import React from "react";

export default function Poster01() {
  return (
    <div className="w-4/5 bg-primary text-white h-96 flex justify-between items-center mx-auto overflow-hidden">
      <div className="p-5">
        <h3 className="flex items-center gap-3 text-2xl text-secondary">
          <div className="h-3 w-5 bg-gradient-to-r from-secondary rounded-tl-md rounded-br-md"></div>
          Any Property Issues?
          <div className="h-3 w-5 bg-gradient-to-l from-secondary rounded-tl-md rounded-br-md"></div>
        </h3>
        <p className="flex flex-col text-4xl font-bold">
          <span>Start the App Few Steps,</span>
          <span>Download Easily..</span>
        </p>
        <p>rust Score 4.5 (Based on 1,200 reviews)</p>
      </div>
      <div
        className="relative block w-1/6 pb-[25%] overflow-hidden"
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
        className="relative block w-1/5 pb-[25%] overflow-hidden"
        style={{
          transformOrigin: "0 100%",
          transform: "skewX(-30deg) translateZ(1px)",
        }}
      >
        <div
          className="absolute w-[175%] h-full bg-center bg-cover"
          style={{
            backgroundImage: "url('http://i.imgur.com/kreZqnx.jpg')",
            transformOrigin: "inherit",
            transform: "skewX(30deg)",
          }}
        ></div>
      </div>
      <div
        className="relative block w-1/6 pb-[25%] overflow-hidden"
        style={{
          transformOrigin: "0 100%",
          transform: "skewX(-30deg) translateZ(1px)",
        }}
      >
        <div
          className="absolute w-[85%] h-full bg-center bg-cover bg-gradient-to-t from-secondary"
          style={{
            transformOrigin: "inherit",
            transform: "skewX(30deg)",
          }}
        ></div>
      </div>
    </div>
  );
}

import React from "react";

export default function Header() {
  return (
    <div className="h-[500px] w-full bg-primary text-white flex gap-5 justify-around overflow-hidden items-center">
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
      <div>
        <h2 className="text-6xl font-bold">Contact Us</h2>
        <p className="flex gap-3 items-center">
          <a href="/">Home</a>
          <span className="size-4 rounded-tl-lg rounded-br-lg bg-gradient-to-l from-secondary"></span>
          Contact Us
        </p>
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
    </div>
  );
}

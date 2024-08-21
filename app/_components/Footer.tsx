import React from "react";

import { phoneNo } from "@/lib/contacts";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col gap-5 sm:flex-row w-full justify-around relative bg-primary text-white border-b border-secondary p-3">
        <div className=" md:my-8">
          <h3 className="flex items-center gap-3 md:text-2xl text-secondary">
            <div className="h-3 w-5 bg-gradient-to-r from-secondary rounded-tl-md rounded-br-md"></div>
            Get In Touch
            <div className="h-3 w-5 bg-gradient-to-l from-secondary rounded-tl-md rounded-br-md"></div>
          </h3>
          <p className="flex flex-col text-xl md:text-4xl font-bold">
            <span>Let&apos;s Get Started With Us, Further</span>
            <span>Info & Support Team</span>
          </p>
        </div>
        <div className="bg-gradient-to-r from-secondary rounded-tl-3xl rounded-br-3xl p-4 flex flex-col items-center justify-center md:my-8">
          <p className="text-lg md:text-3xl">+(91) {phoneNo()}</p>
          <p>FEEL FREE TO CALL US</p>
        </div>
      </div>
      <div className="flex w-full justify-center bg-primary text-xs md:text-base text-white p-4">
        <p>
          ©Copyright 2024. All rights reserved-CrossLegal. Designed by TACSS
        </p>
      </div>
    </>
  );
}

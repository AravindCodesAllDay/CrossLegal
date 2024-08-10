import React from "react";

export default function Footer() {
  return (
    <>
      <div className="flex w-full justify-around relative bg-primary text-white border-b-2 border-secondary">
        <svg
          className="absolute left-0 h-full"
          viewBox="0 0 37 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M36.146 20.2856C36.1461 19.3672 35.9095 18.4643 35.4589 17.6641C35.0084 16.8638 34.3591 16.1932 33.5738 15.717L8.75599 0.84863C7.94852 0.376358 7.03119 0.124388 6.09576 0.117925C5.16034 0.111463 4.23961 0.350733 3.42568 0.811804C2.61176 1.27287 1.93316 1.93958 1.45778 2.74523C0.982401 3.55088 0.726896 4.46724 0.716827 5.40263L0.716827 35.1485C0.72342 36.083 0.975069 36.9995 1.44665 37.8064C1.91823 38.6133 2.59323 39.2824 3.40427 39.7468C4.2153 40.2112 5.13397 40.4548 6.06857 40.4531C7.00316 40.4514 7.92096 40.2046 8.73033 39.7373L33.5647 24.858C34.3518 24.3822 35.0029 23.7114 35.4551 22.9104C35.9073 22.1095 36.1453 21.2054 36.146 20.2856Z"
            fill="#b9967e"
          />
        </svg>
        <div className="my-8">
          <h3 className="flex items-center gap-3 text-2xl text-secondary">
            <div className="h-3 w-5 bg-gradient-to-r from-secondary rounded-tl-md rounded-br-md"></div>
            Get In Touch
            <div className="h-3 w-5 bg-gradient-to-l from-secondary rounded-tl-md rounded-br-md"></div>
          </h3>
          <p className="flex flex-col text-4xl font-bold">
            <span>Let&apos;s Get Started With Us, Further</span>
            <span>Info & Support Team</span>
          </p>
        </div>
        <div className="bg-gradient-to-r from-secondary rounded-tl-3xl rounded-br-3xl p-4 flex flex-col items-center justify-center my-8">
          <p className="text-3xl">+(91) XXXXX XXXXX</p>
          <p>FEEL FREE TO CALL US</p>
        </div>
      </div>
      <div className="flex w-full justify-around bg-primary text-white p-4">
        <p>
          © Copyright 2024. All rights reserved. CrossLegal. Designed by Halt-O
        </p>
        <ul>
          <li>facebook</li>
        </ul>
      </div>
    </>
  );
}

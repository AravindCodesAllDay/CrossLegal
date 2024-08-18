import React from "react";
import Image from "next/image";

import lookingFor from "@/app/_assets/lookingFor.jpg";

export default function Looking4Lawyer() {
  return (
    <div className="flex flex-col mt-72">
      <div className="flex w-full justify-center p-2">
        <div className="h-4/6 flex flex-col md:flex-row bg-white p-5 -mt-40 shadow-xl">
          <Image
            src={lookingFor}
            className="w-full md:w-1/2 h-auto"
            alt="lookingFor"
          />
          <div className="flex flex-col items-center justify-center gap-5 mt-5 md:mt-0">
            <div className="flex">
              <div className="h-3.5 w-6 bg-gradient-to-r from-secondary to-white rounded-tr-md rounded-bl-md"></div>
              <p className="text-secondary text-sm px-2 font-[550] -mt-0.5">
                ARE YOU LOOKING FOR HELP FROM A LAWYER?
              </p>
              <div className="h-3.5 w-6 bg-gradient-to-r from-white to-secondary rounded-tr-md rounded-bl-md"></div>
            </div>
            <p className="text-center text-sm font-[350] leading-7 p-3 text-black">
              If you need someone on your side who knows your rights and has the
              training to help you navigate the law, contact us today.
            </p>
            <a href="contactus" className="group">
              <button className="flex justify-center items-center mx-auto md:mx-0">
                <div className="p-2 bg-[#00192c] transform transition-transform duration-500 group-hover:bg-secondary rounded-tl-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-plus size-6 transform transition-transform duration-300 group-hover:rotate-90"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="#ffffff"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 5l0 14" />
                    <path d="M5 12l14 0" />
                  </svg>
                </div>
                <div className="bg-secondary transform transition-transform duration-500 group-hover:bg-[#00192c] rounded-br-lg p-2 text-white font-semibold text-sm sm:text-base">
                  Contact Us
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

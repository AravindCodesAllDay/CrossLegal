import React from "react";
import Image from "next/image";
import getOne from "@/app/_assets/getOne.jpg";
import getTwo from "@/app/_assets/getTwo.jpg";
import getThree from "@/app/_assets/getThree.jpg";
import getFour from "@/app/_assets/getFour.jpg";

export default function GetInTouch() {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-neutral-50 p-6 md:p-12">
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          <div className="w-full h-36">
            <Image src={getOne} alt="image1" />
          </div>
          <div className="w-full h-36">
            <Image src={getTwo} alt="image2" />
          </div>
          <div className="w-full h-36">
            <Image src={getThree} alt="image3" />
          </div>
          <div className="w-full h-36">
            <Image src={getFour} alt="image4" />
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col justify-center p-6">
          <div className="flex">
            <div className="h-3.5 w-6 bg-gradient-to-r from-secondary to-white rounded-tr-md rounded-bl-md"></div>
            <p className="text-secondary text-sm px-2 font-[550] -mt-0.5">
              GET IN TOUCH
            </p>
            <div className="h-3.5 w-6 bg-gradient-to-r from-white to-secondary rounded-tr-md rounded-bl-md"></div>
          </div>
          <h1 className="text-4xl  font-marcellus text-[#1e1e1e] mb-4">
            Work With Us. Lets Make Great Together.
          </h1>
          <div className="text-lg text-gray-500 mb-6">
            Our Best Skilled Attorneys, Trust Score 4.5
            <span className="text-amber-600"> ★★★★★</span>
          </div>
          <a href="contactus" className="group">
            <button className="flex justify-center items-center">
              <div className="p-2 bg-[#00192c] transform transition-transform duration-500 group-hover:bg-secondary rounded-tl-lg">
                <svg
                  className="w-6 h-6"
                  fill="white"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h12M9 6v8m8 8h-8l-4-4h-4v-4l4-4V5a2 2 0 012-2h8a2 2 0 012 2v14z"
                  />
                </svg>
              </div>
              <div className="bg-secondary transform transition-transform duration-500 group-hover:bg-[#00192c] rounded-br-lg p-2 text-white font-semibold">
                +(528) 456-7592
              </div>
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

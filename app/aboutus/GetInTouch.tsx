import React from "react";
import Image from "next/image";
import getOne from "@/app/_assets/getOne.jpg";
import getTwo from "@/app/_assets/getTwo.jpg";
import getThree from "@/app/_assets/getThree.jpg";
import getFour from "@/app/_assets/getFour.jpg";
import StarRating from "../_animations/StarRating";
import Heading from "../_animations/Heading";
import { phoneNo } from "@/lib/contacts";

export default function GetInTouch() {
  return (
    <div className="flex flex-col w-fit lg:flex-row m-3 md:m-10 bg-secondary bg-opacity-10 p-5">
      <div className="w-full xl:w-1/2 flex flex-col gap-3">
        <div className="w-full flex flex-col sm:flex-row gap-3">
          <Image
            src={getOne}
            alt="image1"
            className="hover:scale-105 transition-all duration-150 ease-in-out hover:rounded-lg"
          />
          <Image
            src={getTwo}
            alt="image2"
            className="hover:scale-105 transition-all duration-150 ease-in-out hover:rounded-lg"
          />
        </div>
        <div className="w-full flex flex-col sm:flex-row gap-3">
          <Image
            src={getThree}
            alt="image3"
            className="hover:scale-105 transition-all duration-150 ease-in-out hover:rounded-lg"
          />
          <Image
            src={getFour}
            alt="image4"
            className="hover:scale-105 transition-all duration-150 ease-in-out hover:rounded-lg"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-5 justify-center items-center p-3 mt-6 lg:mt-0">
        <Heading
          title="GET IN TOUCH"
          line1="Work With Us. Let's Make Great"
          line2="Together."
        />
        <div className="text-base md:text-lg flex flex-col sm:flex-row gap-3 text-secondary">
          Our Best Skilled Attorneys, Trust Score 4.6
          <StarRating rating={4.6} />
        </div>
        <a href="contactus" className="group">
          <button className="flex justify-center items-center mx-auto">
            <div className="p-2 bg-[#00192c] transform transition-transform duration-500 group-hover:bg-secondary rounded-tl-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-plus size-4 sm:size-6 transform transition-transform duration-300 group-hover:rotate-90"
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
            <div className="bg-secondary transform transition-transform duration-500 group-hover:bg-[#00192c] rounded-br-lg p-2 text-white font-semibold text-xs sm:text-base">
              {phoneNo()}
            </div>
          </button>
        </a>
      </div>
    </div>
  );
}

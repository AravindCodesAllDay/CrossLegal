import React from "react";
import Image from "next/image";
import getOne from "@/app/_assets/getOne.jpg";
import getTwo from "@/app/_assets/getTwo.jpg";
import getThree from "@/app/_assets/getThree.jpg";
import getFour from "@/app/_assets/getFour.jpg";
import StarRating from "../_animations/StarRating";
import Heading from "../_animations/Heading";

export default function GetInTouch() {
  return (
    <>
      <div className="flex flex-col lg:flex-row m-3 md:m-10 bg-secondary bg-opacity-10 p-3">
        <div className="lg:w-1/2 flex flex-col gap-3">
          <div className="w-full flex flex-col md:flex-row gap-3">
            <Image src={getOne} alt="image1" className="w-full" />
            <Image src={getTwo} alt="image2" className="w-full" />
          </div>
          <div className="w-full flex flex-col md:flex-row gap-3">
            <Image src={getThree} alt="image3" className="w-full" />
            <Image src={getFour} alt="image4" className="w-full" />
          </div>
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center items-center p-3">
          <Heading
            title="GET IN TOUCH"
            line1="Work With Us. Lets Make Great"
            line2="Together."
          />
          <h1 className="text-4xl font-marcellus text-[#1e1e1e] mb-4"></h1>
          <div className="text-base md:text-lg flex flex-col sm:flex-row gap-3 text-secondary mb-6">
            Our Best Skilled Attorneys, Trust Score 4.6
            <StarRating rating={4.6} />
          </div>
          <a href="contactus" className="group flex items-center">
            <button className="flex items-center p-2 bg-[#00192c] transform transition-transform duration-500 group-hover:bg-secondary rounded-tl-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-plus size-6 transform transition-transform duration-300 group-hover:rotate-90 stroke-white"
                viewBox="0 0 24 24"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 5l0 14" />
                <path d="M5 12l14 0" />
              </svg>
              <span className="bg-secondary transform transition-transform duration-500 group-hover:bg-[#00192c] rounded-br-lg p-2 text-white font-semibold ml-2">
                (528) 456-7592
              </span>
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

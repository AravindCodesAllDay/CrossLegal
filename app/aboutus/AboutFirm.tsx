import React from "react";
import Image from "next/image";

import lookingFor from "@/app/_assets/3.jpg";

export default function AboutFirm() {
  return (
    <div className="flex flex-col" id="aboutfirm">
      <div className="flex w-full justify-center p-2">
        <div className="flex flex-col md:flex-row bg-white p-5 shadow-xl">
          <Image
            src={lookingFor}
            className="w-full md:w-1/3"
            alt="lookingFor"
            placeholder="blur"
          />
          <div className="flex flex-col items-center justify-center  w-full md:w-2/3 gap-3 sm:gap-5 mt-5 md:mt-0 p-4">
            <div className="flex items-center">
              <div className="h-2 w-4 sm:h-3.5 sm:w-6 bg-gradient-to-r from-secondary to-white rounded-tr-md rounded-bl-md"></div>
              <p className="text-lg md:text-2xl text-secondary px-2 font-[550]">
                About Firm
              </p>
              <div className="h-2 w-4 sm:h-3.5 sm:w-6 bg-gradient-to-r from-white to-secondary rounded-tr-md rounded-bl-md"></div>
            </div>
            <div className="flex flex-col gap-3 text-xs sm:text-base font-[350] leading-5 sm:leading-7 p-2 sm:p-3 text-black">
              <p>
                With a deep understanding of both Indian law and the legal
                frameworks of other jurisdictions, our lawyers offer a unique
                perspective that transcends borders. Whether you&apos;re
                navigating property disputes, inheritance issues, family
                matters, or business transactions, we are committed to providing
                you with effective legal representation and strategic guidance
                every step of the way.
              </p>
              <ul className="font-semibold list-disc">
                <li>Legal Advice </li>
                <li>Litigation</li>
              </ul>
              <p>
                With a reputation for excellence and a track record of success,
                our lawyers are trusted advocates and reliable partners for
                clients around the world. We pride ourselves on delivering
                high-quality legal services with integrity, professionalism, and
                a commitment to achieving results.
              </p>
            </div>
            <a href="contactus" className="group">
              <button className="flex justify-center items-center mx-auto md:mx-0">
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

import React from "react";
import Image from "next/image";

import lookingFor from "@/app/_assets/lookingFor.jpg";

export default function Looking4Lawyer() {
  return (
    <div className="flex flex-col mt-72">
      <div className="flex w-full justify-center p-2">
        <div className=" h-4/6 flex bg-white p-5 -mt-40 shadow-xl dro">
          <Image src={lookingFor} className="w-1/2 h-1/2 " alt="lookingFor" />
          <div className="flex flex-col items-center justify-center gap-5">
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
            <a href="contactus">
              <button className="p-3 w-[170px] rounded-br-[15px] rounded-tr-[15px] bg-secondary hover:bg-[#00192c] transform transition-colors duration-300 text-white">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

import lawfirm from "@/app/_assets/6.jpg";
import team from "@/app/_assets/8.jpg";
import Heading from "../_animations/Heading";
import { phoneNo } from "@/lib/contacts";
import Button from "../_animations/Button";

export default function AboutUs() {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = elementRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      className="relative w-full flex flex-col lg:flex-row items-center justify-around my-12"
      ref={elementRef}
    >
      <div className="relative w-full sm:w-4/5 lg:w-2/6 p-6">
        <Image
          src={lawfirm}
          alt="women"
          placeholder="blur"
          className="relative rounded-tl-[100px] w-full rounded-br-[100px]"
        />
        <div className="absolute inset-0 flex items-end p-12 justify-center">
          <Button left="" right="Learn More" linkTo="/aboutus" />
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-8 p-6">
        <div className="lg:h-1/2 flex flex-col justify-center gap-5">
          <Heading
            title={"About Us"}
            line1={"We're Advocates for"}
            line2={"Justice and Right"}
          />
          <div
            className={`transform transition-transform duration-1000 ease-out ${
              isInView ? "translate-y-0" : "translate-y-32 opacity-0"
            }`}
          >
            <p className="text-base">
              With a reputation for excellence and a track record of success,
              our lawyers are trusted advocates and reliable partners for
              clients around the world. We pride ourselves on delivering
              high-quality legal services with integrity, professionalism, and a
              commitment to achieving results.
            </p>
          </div>
        </div>

        <div className="relative flex flex-col items-center justify-center lg:h-1/2">
          <Image src={team} alt="team" placeholder="blur" />
          <div
            className={`lg:absolute flex flex-col m-2 justify-center items-center gap-3 w-full sm:w-3/5 lg:w-2/3 bottom-0 bg-white p-3 rounded-tl-3xl rounded-br-3xl shadow-xl transform transition-transform duration-1000 ease-out ${
              isInView ? "translate-y-0" : "translate-y-32 opacity-0"
            }`}
          >
            <div>
              <h3 className="flex items-center gap-3 text-lg md:text-2xl text-secondary">
                <div className="h-3 w-5 bg-gradient-to-r from-secondary rounded-tl-md rounded-br-md"></div>
                Ask a Lawyer
                <div className="h-3 w-5 bg-gradient-to-l from-secondary rounded-tl-md rounded-br-md"></div>
              </h3>
              <p className="flex flex-col text-primary text-xl md:text-2xl font-bold">
                <span>We Provide Solid Law</span>
                <span>Practice</span>
              </p>
              <a href="contactus">
                <button className="flex justify-center items-center group text-sm md:text-base">
                  <div className="p-3 bg-[#00192c] text-white transform transition-transform duration-500 group-hover:bg-secondary rounded-tl-lg">
                    Call Us
                  </div>
                  <div className="bg-secondary transform transition-transform duration-500 group-hover:bg-[#00192c] rounded-br-lg p-3 text-white font-semibold">
                    +(91) {phoneNo()}
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

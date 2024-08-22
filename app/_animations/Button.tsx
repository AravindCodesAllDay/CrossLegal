"use client";
import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface ButtonProps {
  left: string;
  right: string;
  linkTo: string;
}

export default function Button({ left, right, linkTo }: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const controls = useAnimation();

  useEffect(() => {
    const currentButtonRef = buttonRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start({ scale: 1, opacity: 1 });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (currentButtonRef) {
      observer.observe(currentButtonRef);
    }

    return () => {
      if (currentButtonRef) {
        observer.unobserve(currentButtonRef);
      }
    };
  }, [controls]);

  return (
    <motion.button
      ref={buttonRef}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <a href={linkTo} className="flex justify-center items-center group">
        <div className="p-2 bg-[#00192c] transform transition-transform duration-500 group-hover:bg-secondary rounded-tl-lg">
          {left === "" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-plus size-6 md:size-7 transform transition-transform duration-300 group-hover:rotate-90"
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
          ) : (
            left
          )}
        </div>
        <div className="bg-secondary transform transition-transform duration-500 group-hover:bg-[#00192c] rounded-br-lg p-2 text-base md:text-xl text-white font-semibold">
          {right}
        </div>
      </a>
    </motion.button>
  );
}

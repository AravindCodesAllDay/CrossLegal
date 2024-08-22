"use client";
import React, { useEffect, useRef, useState } from "react";

interface HeadingProps {
  title: string;
  line1: string;
  line2: string;
}

const Heading: React.FC<HeadingProps> = ({ title, line1, line2 }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
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
      ref={ref}
      className={`transition-transform duration-1000 ease-out ${
        isVisible
          ? "transform translate-y-0 opacity-100"
          : "transform translate-y-32 opacity-0"
      }`}
    >
      <h3 className="flex items-center gap-3 text-lg md:text-2xl text-secondary">
        <div className="h-3 w-5 bg-gradient-to-r from-secondary rounded-tl-md rounded-br-md"></div>
        {title}
        <div className="h-3 w-5 bg-gradient-to-l from-secondary rounded-tl-md rounded-br-md"></div>
      </h3>
      <p className="flex flex-col text-xl md:text-4xl font-bold text-primary">
        <span>{line1}</span>
        <span>{line2}</span>
      </p>
    </div>
  );
};

export default Heading;

"use client";
import React, { useState, useEffect, useRef } from "react";

interface CounterProps {
  targetNumber: number;
}

export default function Counter({ targetNumber }: CounterProps) {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (hasStarted) {
      let interval = setInterval(() => {
        setCurrentNumber((prevNumber) => {
          if (prevNumber < targetNumber) {
            return prevNumber + 1;
          } else {
            clearInterval(interval);
            return prevNumber;
          }
        });
      }, 20);

      return () => clearInterval(interval);
    }
  }, [targetNumber, hasStarted]);

  return (
    <span
      ref={counterRef}
      className="text-6xl text-secondary font-bold transition-all duration-1000 ease-out opacity-100"
    >
      {currentNumber}
    </span>
  );
}

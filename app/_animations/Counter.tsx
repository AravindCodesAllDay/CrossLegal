"use client";
import React, { useState, useEffect, useRef } from "react";

interface CounterProps {
  start: number;
  targetNumber: number;
  count: number;
}

export default function Counter({ start, targetNumber, count }: CounterProps) {
  const [currentNumber, setCurrentNumber] = useState(start);
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
            return prevNumber + count;
          } else {
            clearInterval(interval);
            return prevNumber;
          }
        });
      }, 60);

      return () => clearInterval(interval);
    }
  }, [targetNumber, hasStarted]);

  return (
    <span
      ref={counterRef}
      className="transition-all duration-1000 ease-out opacity-100"
    >
      {currentNumber}
    </span>
  );
}

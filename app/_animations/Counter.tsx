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

    const currentRef = counterRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
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
      }, 30);

      return () => clearInterval(interval);
    }
  }, [targetNumber, count, hasStarted]);

  return (
    <span
      ref={counterRef}
      className="transition-all duration-1000 ease-out opacity-100"
    >
      {currentNumber}
    </span>
  );
}

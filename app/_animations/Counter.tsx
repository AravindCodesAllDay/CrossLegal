"use client";
import React, { useState, useEffect } from "react";

interface CounterProps {
  targetNumber: number;
}

export default function Counter({ targetNumber }: CounterProps) {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
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
  }, [targetNumber]);

  return (
    <span className="text-6xl text-secondary font-bold transition-all duration-1000 ease-out opacity-100">
      {currentNumber}
    </span>
  );
}

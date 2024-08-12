import React from "react";

interface StarRatingProps {
  rating: number;
}

export default function StarRating({ rating }: StarRatingProps) {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div className="flex">
      {stars.map((star) => (
        <svg
          key={star}
          xmlns="http://www.w3.org/2000/svg"
          fill={star <= rating ? "currentColor" : "#fff"}
          viewBox="0 0 24 24"
          className="size-6 text-yellow-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 17.27l5.18 3.73-1.64-5.81L21 10.24l-5.9-.51L12 4.5 8.9 9.73 3 10.24l4.46 4.95L5.82 21z"
          />
        </svg>
      ))}
    </div>
  );
}

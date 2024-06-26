import { IIconProps } from "@/lib/types";
import React from "react";

const HeavyRainIcon = ({width, height}: IIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "48"}
      height={height ?? "48"}
      viewBox="0 0 48 48"
    >
      <path
        fill="#BBDEFB"
        d="M29.5 5A8.5 8.5 0 1 0 29.5 22A8.5 8.5 0 1 0 29.5 5Z"
      />
      <path
        fill="#BBDEFB"
        d="M37 14.893A7 7 0 1 0 37 28.893 7 7 0 1 0 37 14.893zM11 15A7 7 0 1 0 11 29 7 7 0 1 0 11 15z"
      />
      <path
        fill="#BBDEFB"
        d="M17.5 8A6.5 6.5 0 1 0 17.5 21A6.5 6.5 0 1 0 17.5 8Z"
      />
      <path
        fill="#BBDEFB"
        d="M25 12.893A7 7 0 1 0 25 26.893A7 7 0 1 0 25 12.893Z"
      />
      <path
        fill="#BBDEFB"
        d="M7,25c0,2.209,1.791,4,4,4h25c2.209,0,4-1.791,4-4v-1c0-2.209-1.791-4-4-4H11c-2.209,0-4,1.791-4,4V25z"
      />
      <g>
        <path
          fill="#2196F3"
          d="M20 29A1 1 0 1 0 20 31 1 1 0 1 0 20 29zM34 29A1 1 0 1 0 34 31 1 1 0 1 0 34 29zM19 32A1 1 0 1 0 19 34 1 1 0 1 0 19 32zM18 35A1 1 0 1 0 18 37 1 1 0 1 0 18 35zM17 38A1 1 0 1 0 17 40 1 1 0 1 0 17 38zM33 32A1 1 0 1 0 33 34 1 1 0 1 0 33 32zM32 35A1 1 0 1 0 32 37 1 1 0 1 0 32 35zM31 38A1 1 0 1 0 31 40 1 1 0 1 0 31 38zM16 41A1 1 0 1 0 16 43 1 1 0 1 0 16 41zM30 41A1 1 0 1 0 30 43 1 1 0 1 0 30 41zM12 32A1 1 0 1 0 12 34 1 1 0 1 0 12 32zM11 35A1 1 0 1 0 11 37 1 1 0 1 0 11 35zM26 32A1 1 0 1 0 26 34 1 1 0 1 0 26 32zM25 35A1 1 0 1 0 25 37 1 1 0 1 0 25 35zM10 38A1 1 0 1 0 10 40 1 1 0 1 0 10 38zM24 38A1 1 0 1 0 24 40 1 1 0 1 0 24 38zM27 29A1 1 0 1 0 27 31 1 1 0 1 0 27 29zM13 29A1 1 0 1 0 13 31 1 1 0 1 0 13 29z"
        />
      </g>
    </svg>
  );
};

export default HeavyRainIcon;

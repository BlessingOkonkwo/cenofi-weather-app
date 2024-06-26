import { IIconProps } from "@/lib/types";
import React from "react";

const PartlyCloudyIcon = ({width, height}: IIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "48"}
      height={height ?? "48"}
      viewBox="0 0 48 48"
    >
      <path fill="#FF9800" d="M8 10.001H25V27.000999999999998H8z" />
      <path
        fill="#FF9800"
        d="M7.661 9.661H25.339V27.339H7.661z"
        transform="rotate(-45.001 16.5 18.5)"
      />
      <path
        fill="#FFEB3B"
        d="M10,18.5c0,3.591,2.909,6.5,6.5,6.5s6.5-2.909,6.5-6.5S20.091,12,16.5,12S10,14.909,10,18.5"
      />
      <g>
        <path
          fill="#BBDEFB"
          d="M29.5 17A8.5 8.5 0 1 0 29.5 34A8.5 8.5 0 1 0 29.5 17Z"
        />
        <path
          fill="#BBDEFB"
          d="M37 26.893A7 7 0 1 0 37 40.893 7 7 0 1 0 37 26.893zM11 27A7 7 0 1 0 11 41 7 7 0 1 0 11 27z"
        />
        <path
          fill="#BBDEFB"
          d="M17.5 20A6.5 6.5 0 1 0 17.5 33A6.5 6.5 0 1 0 17.5 20Z"
        />
        <path
          fill="#BBDEFB"
          d="M25 24.893A7 7 0 1 0 25 38.893A7 7 0 1 0 25 24.893Z"
        />
        <path
          fill="#BBDEFB"
          d="M7,37c0,2.209,1.791,4,4,4h25c2.209,0,4-1.791,4-4v-1c0-2.209-1.791-4-4-4H11c-2.209,0-4,1.791-4,4V37z"
        />
      </g>
    </svg>
  );
};

export default PartlyCloudyIcon;

import React from "react";
import { IIconProps } from "@/lib/types";

const CloudyIcon = ({width, height}: IIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "48"}
      height={height ?? "48"}
      viewBox="0 0 48 48"
    >
      <path
        fill="#BBDEFB"
        d="M29.5 12A8.5 8.5 0 1 0 29.5 29A8.5 8.5 0 1 0 29.5 12Z"
      />
      <path
        fill="#BBDEFB"
        d="M37 21.893A7 7 0 1 0 37 35.893 7 7 0 1 0 37 21.893zM11 22A7 7 0 1 0 11 36 7 7 0 1 0 11 22z"
      />
      <path
        fill="#BBDEFB"
        d="M17.5 15A6.5 6.5 0 1 0 17.5 28A6.5 6.5 0 1 0 17.5 15Z"
      />
      <path
        fill="#BBDEFB"
        d="M25 19.893A7 7 0 1 0 25 33.893A7 7 0 1 0 25 19.893Z"
      />
      <path
        fill="#BBDEFB"
        d="M7,32c0,2.209,1.791,4,4,4h25c2.209,0,4-1.791,4-4v-1c0-2.209-1.791-4-4-4H11c-2.209,0-4,1.791-4,4V32z"
      />
    </svg>
  );
};

export default CloudyIcon;

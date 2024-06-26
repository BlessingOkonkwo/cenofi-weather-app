import { IIconProps } from "@/lib/types";
import React from "react";

const SnowIcon = ({width, height}: IIconProps) => {
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
        <path fill="#2196F3" d="M23 34H25V43H23z" />
        <path
          fill="#2196F3"
          d="M23 33.999H25V42.999H23z"
          transform="rotate(120.471 24 38.499)"
        />
        <path
          fill="#2196F3"
          d="M23.001 34H24.999000000000002V43H23.001z"
          transform="rotate(60.679 24 38.5)"
        />
        <path fill="#2196F3" d="M10 31H12V40H10z" />
        <path
          fill="#2196F3"
          d="M10 30.999H12V39.998999999999995H10z"
          transform="rotate(120.444 11 35.5)"
        />
        <path
          fill="#2196F3"
          d="M10.001 31H11.998999999999999V40H10.001z"
          transform="rotate(60.679 11 35.5)"
        />
        <path fill="#2196F3" d="M36 31H38V40H36z" />
        <path
          fill="#2196F3"
          d="M35.999 30.998H37.999V39.998000000000005H35.999z"
          transform="rotate(120.458 36.999 35.5)"
        />
        <path
          fill="#2196F3"
          d="M36 31H37.998V40.001H36z"
          transform="rotate(60.679 36.999 35.5)"
        />
      </g>
    </svg>
  );
};

export default SnowIcon;

import { IIconProps } from "@/lib/types";
import React from "react";

const SleetIcon = ({width, height}: IIconProps) => {
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
          d="M35.95 37.15c-1.132 1.133-2.968 1.133-4.101 0-1.134-1.131-1.133-2.969 0-4.1C32.982 31.917 38 31 38 31S37.082 36.02 35.95 37.15zM14.95 37.15c-1.132 1.133-2.968 1.133-4.101 0-1.133-1.131-1.132-2.969 0-4.1 1.132-1.133 6.151-2.05 6.151-2.05S16.082 36.02 14.95 37.15zM23 34H25V43H23z"
        />
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
      </g>
    </svg>
  );
};

export default SleetIcon;

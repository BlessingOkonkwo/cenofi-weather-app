import { IIconProps } from "@/lib/types";
import React from "react";

const ThunderstormIcon = ({width, height}: IIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "48"}
      height={height ?? "48"}
      viewBox="0 0 48 48"
    >
      <path
        fill="#BBDEFB"
        d="M18.5 4A8.5 8.5 0 1 0 18.5 21A8.5 8.5 0 1 0 18.5 4Z"
      />
      <path fill="#BBDEFB" d="M19 20A7 7 0 1 0 19 34A7 7 0 1 0 19 20Z" />
      <path
        fill="#BBDEFB"
        d="M11 14A7 7 0 1 0 11 28 7 7 0 1 0 11 14zM38 14A6 6 0 1 0 38 26 6 6 0 1 0 38 14z"
      />
      <path fill="#BBDEFB" d="M30 19A6 6 0 1 0 30 31A6 6 0 1 0 30 19Z" />
      <path
        fill="#BBDEFB"
        d="M30.5 7A6.5 6.5 0 1 0 30.5 20A6.5 6.5 0 1 0 30.5 7Z"
      />
      <path fill="#BBDEFB" d="M23 12A7 7 0 1 0 23 26A7 7 0 1 0 23 12Z" />
      <g>
        <path
          fill="#D500F9"
          d="M22 44l2-7h-3l4-8h4l-3.594 6H29L22 44zM32.594 39l2-7h-3l4-8h4L36 30h3.594L32.594 39z"
        />
      </g>
    </svg>
  );
};

export default ThunderstormIcon;

import React from "react";
import Temperature from "../atoms/temperature";

interface IProps {
  icon: any;
  temp: number;
}

const WeatherDegree = ({ icon, temp }: IProps) => {
  return (
    <div className="flex items-center gap-3">
      {icon}
      <div className="text-[rgb(58,134,202)] font-semibold text-xl">
        <Temperature value={temp} />
        <sup>&deg;</sup>
      </div>
    </div>
  );
};

export default WeatherDegree;

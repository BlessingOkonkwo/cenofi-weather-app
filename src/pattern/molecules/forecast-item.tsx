import React from "react";
import Temperature from "@/pattern/atoms/temperature";
import WeatherIcon from "@/pattern/atoms/weather-icon";

interface IForecastItemProps {
  day: string;
  weatherCode: number;
  high: number;
  low: number;
  main: string;
}
const ForecastItem: React.FC<IForecastItemProps> = (props) => {
  return (
    <div>
      <h6 className="text-[rgb(69,129,197)] font-semibold text-xl">
        {props.day}
      </h6>
      <WeatherIcon code={props.weatherCode} />
      <p className="text-[rgb(74,111,161)] font-semibold text-lg">{props.main}</p>
      <span className="text-[rgb(74,111,161)] font-medium">
        <Temperature value={props.high} />
        <sup>&deg;</sup>
        <small>/</small>
        <Temperature value={props.low} />
        <sup>&deg;</sup>
      </span>
    </div>
  );
};

export default ForecastItem;

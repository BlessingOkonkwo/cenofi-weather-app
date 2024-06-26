import React from "react";
import Temperature from "../atoms/temperature";
import WeatherIcon from "../atoms/weather-icon";

interface IProps {
  city: string;
  weatherID: number;
  mainTemp: number;
  weatherDescription: string;
}

const CurrentWeatherStatus = ({
  city,
  weatherID,
  mainTemp,
  weatherDescription,
}: IProps) => {
  return (
    <div className="space-y-4 flex flex-col items-center">
      <h4 className="text-lg font-semibold text-primary md:self-start">{city}</h4>
      <div className="flex gap-3 items-center md:items-end md:self-start">
        <WeatherIcon code={weatherID} big />
        <span className="text-6xl md:text-[100px] text-[rgb(58,134,202)]">
          <Temperature value={mainTemp} />
          <sup>&deg;</sup>
        </span>
      </div>
      <p className="capitalize font-semibold text-2xl text-[rgb(74,111,161)] md:self-start">{weatherDescription}</p>
    </div>
  );
};

export default CurrentWeatherStatus;

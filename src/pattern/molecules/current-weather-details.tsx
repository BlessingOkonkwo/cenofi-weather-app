import React from "react";
import Temperature from "../atoms/temperature";
import {
  ArrowBigDown,
  ArrowBigUp,
  Droplets,
  Wind,
  CircleGauge,
  Circle,
} from "lucide-react";
import WeatherInfoRow from "./weather-info-row";
import WeatherDegree from "./weather-degree";

interface IProps {
  feelsLike: number;
  tempMax: number;
  tempMin: number;
  humidity: number;
  windSpeed: number;
  pressure: number;
}

const CurrentWeatherDetails = ({
  feelsLike,
  tempMax,
  tempMin,
  humidity,
  windSpeed,
  pressure,
}: IProps) => {
  return (
    <div className="space-y-4">
      <div className="text-xl text-[rgb(58,134,202)] font-semibold">
        <span className="text-xl font-medium text-[rgb(74,111,161)] inline-block mr-2">
          Feels like
        </span>{" "}
        <Temperature value={feelsLike} />
        <sup>&deg;</sup>
      </div>
      <div className="flex items-center gap-6">
        <WeatherDegree
          icon={<ArrowBigUp color="rgb(161,185,206)" size={40} />}
          temp={tempMax}
        />
        <WeatherDegree
          icon={<ArrowBigDown color="rgb(161,185,206)" size={40} />}
          temp={tempMin}
        />
      </div>

      <WeatherInfoRow
        icon={<Droplets color="rgb(161,185,206)" size={40} />}
        value={humidity}
        label="Humidity"
        suffix="%"
      />

      <WeatherInfoRow
        icon={<Wind color="rgb(161,185,206)" size={40} />}
        value={windSpeed}
        label="Wind"
        suffix="kph"
      />

      <WeatherInfoRow
        icon={<CircleGauge color="rgb(161,185,206)" size={40} />}
        value={pressure}
        label="Pressure"
        suffix="hpa"
      />
    </div>
  );
};

export default CurrentWeatherDetails;

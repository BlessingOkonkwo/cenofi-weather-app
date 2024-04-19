import React, { useState } from "react";
import UnitSwitch from "../atoms/unit-switch";
import CurrentWeatherDetails from "../molecules/current-weather-details";
import CurrentWeatherStatus from "../molecules/current-weather-status";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { round } from "@/lib/utils";
import History from "./history-section";

interface IProps {}

const CurrentWeather = ({}: IProps) => {
  const { place, weather } = useSelector((state: RootState) => state.weather);

  console.log("place: ", place);
  return (
    <div className="w-full space-y-6 bg-[rgb(255,255,255,.8)] py-12 px-16 border border-border rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-medium text-[hsla(216,10%,48%,1)]">
          Current Weather
        </p>
        <UnitSwitch />
      </div>

      {weather && weather.weather && (
        <div className="space-y-4 w-full grid grid-cols-1 lg:grid-cols-3 flex-col md:flex-row items-center md:items-start justify-between gap-3">
          <div className="flex-1">
            <CurrentWeatherStatus
              city={place}
              weatherID={weather?.weather[0].id}
              mainTemp={Math.round(weather?.main?.temp)}
              weatherDescription={
                weather.weather && weather?.weather[0]?.description
              }
            />
          </div>

          <div className="flex-1">
            <CurrentWeatherDetails
              feelsLike={Math.round(weather.main.feels_like)}
              tempMax={Math.round(weather.main.temp_max)}
              tempMin={Math.round(weather.main.temp_min)}
              humidity={weather.main.humidity}
              windSpeed={weather.wind.speed}
              pressure={weather.main.pressure}
            />
          </div>

          <div className="flex-1">
            <History />
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrentWeather;

import React, { useState } from "react";
import UnitSwitch from "../atoms/unit-switch";
import CurrentWeatherDetails from "../molecules/current-weather-details";
import CurrentWeatherStatus from "../molecules/current-weather-status";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import History from "./history-section";

interface IProps {}

const CurrentWeather = ({}: IProps) => {
  const { place, weather } = useSelector((state: RootState) => state.weather);

  return (
    <div className="w-full space-y-6 bg-[rgb(255,255,255,.8)] py-6 md:py-12 px-8 md:px-16 border border-border rounded-lg shadow-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-2">
        <p className="text-2xl font-medium text-[hsla(216,10%,48%,1)]">
          Current Weather
        </p>
        <UnitSwitch />
      </div>

      {weather && weather.weather && (
        <div className="space-y-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center md:items-start justify-between gap-6">
          <CurrentWeatherStatus
            city={place}
            weatherID={weather?.weather[0].id}
            mainTemp={Math.round(weather?.main?.temp)}
            weatherDescription={
              weather.weather && weather?.weather[0]?.description
            }
          />

          <CurrentWeatherDetails
            feelsLike={Math.round(weather.main.feels_like)}
            tempMax={Math.round(weather.main.temp_max)}
            tempMin={Math.round(weather.main.temp_min)}
            humidity={weather.main.humidity}
            windSpeed={weather.wind.speed}
            pressure={weather.main.pressure}
          />

          <div className="md:col-span-2 xl:col-span-1">
            <History />
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrentWeather;

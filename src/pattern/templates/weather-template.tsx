import React from "react";
import SearchSection from "../organisms/search-section";
import CurrentWeather from "../organisms/current-weather";
import WeatherForecast from "../organisms/weather-forecast";
import History from "../organisms/history-section";

const WeatherTemplate = () => {
  return (
    <div className="w-full flex flex-col items-center space-y-10">
      <SearchSection />
      <CurrentWeather />
      <WeatherForecast />
      {/* <History /> */}
    </div>
  );
};

export default WeatherTemplate;

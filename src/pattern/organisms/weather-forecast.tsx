import React, { useEffect, useState } from "react";
import ForecastItem from "@/pattern/molecules/forecast-item";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useGetForecastWeatherQuery } from "@/redux/services/get-weather.api-slice";
import moment from "moment";
import { setForecast } from "@/redux/slices/weather-slice";

const WeatherForecast: React.FC = () => {
  // const [forecast, setForecast] = useState<any[]>([]);

  const dispatch = useDispatch();
  const { lat, long } = useSelector((state: RootState) => state.weather);

  const {
    data: weatherData,
    isLoading: isWeatherLoading,
    isSuccess: isWeatherSuccess,
    isError: isWeatherError,
  } = useGetForecastWeatherQuery({ lat, long });

  useEffect(() => {
    if (weatherData) {
      let id = `${weatherData.city.id}`;
      dispatch(setForecast({ id, weather: weatherData }));
    }
  }, [weatherData, dispatch, lat, long]);

  return (
    <div className="w-full space-y-4 bg-[rgb(255,255,255,0.6)] py-6 md:py-12 px-8 md:px-16 border border-border rounded-lg shadow-md">
      <p className="text-2xl font-medium text-[hsla(216,10%,48%,1)]">
        Extended Forecast
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center justify-between gap-4">
        {weatherData?.list?.map((item, idx) => {
          if (item.dt_txt.includes("12:00:00")) {
            return (
              <ForecastItem
                key={idx}
                day={moment(item.dt * 1000).format("dddd")}
                high={item.main.temp_max}
                low={item.main.temp_min}
                weatherCode={item.weather[0].id}
                main={item.weather[0].main}
              />
            );
          } else {
            return null; // Skip rendering for items whose dt_txt does not contain "12:00:00"
          }
        })}
      </div>
    </div>
  );
};

export default WeatherForecast;

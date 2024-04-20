"use client";
import WeatherTemplate from "@/pattern/templates/weather-template";
import { RootState } from "@/redux/store";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setLocation,
  setWeather,
  setImage,
  setNameImageOptional,
  setPlace,
} from "@/redux/slices/weather-slice";
import { setPlaces } from "@/redux/slices/history-slice";
import { useGetLatLongQuery } from "@/redux/services/get-location.api-slice";
import { useGetCurrentWeatherQuery } from "@/redux/services/get-weather.api-slice";
import { round } from "@/lib/utils";
import Spinner from "@/pattern/atoms/icons/spinner";

export default function Home() {
  const dispatch = useDispatch();
  const { lat, long } = useSelector(
    (state: RootState) => state.weather
  );

  const {
    data: location,
    isLoading,
    isSuccess,
    isError,
  } = useGetLatLongQuery({
    lat,
    long,
  });

  const {
    data: weatherData,
    isLoading: isWeatherLoading,
    isSuccess: isWeatherSuccess,
    isError: isWeatherError,
  } = useGetCurrentWeatherQuery({ lat, long });

  useEffect(() => {
    if (!lat && !long) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          dispatch(
            setLocation({
              lat: position.coords.latitude,
              long: position.coords.longitude,
            })
          );
        },
        function (error) {
          // abuja added by default
          dispatch(setLocation({ lat: 9.0570752, long: 7.4514432 }));
        }
      );
    }
    if (weatherData) {
      let id = `${weatherData.id}/${round(lat)}/${round(long)}`;
      dispatch(setWeather({ id, weather: weatherData }));
      dispatch(setPlaces({ id, lat, long, name: weatherData.name }));
    }
    if (location && location.length > 0) {
      dispatch(
        setPlace(
          `${location[0].name}, ${location[0].state}, ${location[0].country}`
        )
      );
    }
  }, [lat, long, dispatch, weatherData, location]);

  return (
    <main className="p-">
      {isWeatherLoading ? (
        <div className="fixed top-0 left-0 w-full h-full bg-[rgb(0,0,0,.5)] flex flex-col justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <WeatherTemplate />
      )}
    </main>
  );
}

import { baseApiSlice } from "@/redux/api/base-api";

export interface IWeatherPayload {
  lat: string | number;
  long: string | number;
}

export const currentWeatherApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentWeather: builder.query<ICurrentWeatherResponse, IWeatherPayload>({
      query: ({ lat, long }) => ({
        url: `data/2.5/weather?lat=${lat}&lon=${long}&units=metric&APPID=df6f9a236d84c5b2f976f705c93bb999`,
        method: "GET",
      }),
    }),
    getForecastWeather: builder.query<IForecastWeatherResponse, IWeatherPayload>({
      query: ({ lat, long }) => ({
        url: `data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&APPID=df6f9a236d84c5b2f976f705c93bb999`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCurrentWeatherQuery, useGetForecastWeatherQuery } =
  currentWeatherApiSlice;

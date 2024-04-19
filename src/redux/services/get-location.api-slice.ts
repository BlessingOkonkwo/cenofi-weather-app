import { baseApiSlice } from "@/redux/api/base-api";

export interface IWeatherPayload {
  lat: string | number;
  long: string | number;
}

export interface ILocation {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state: string;
};

export const locationApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // getCurrentWeather: builder.query<Location[], IWeatherPayload>({
    //   query: ({ lat, long }) => ({
    //     url: `/geo/1.0/reverse?lat=${lat}&lon=${long}&limit=1`,
    //     method: "GET",
    //   }),
    // }),
    getLatLong: builder.query<ILocation[], IWeatherPayload>({
      query: ({ lat, long }) => ({
        url: `/geo/1.0/reverse?lat=${lat}&lon=${long}&limit=1&appid=df6f9a236d84c5b2f976f705c93bb999`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  // useGetCurrentWeatherQuery,
  useGetLatLongQuery,
} = locationApiSlice;

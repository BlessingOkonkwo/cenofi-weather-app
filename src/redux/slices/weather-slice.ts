/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IWeatherSlice {
  id: string;
  lat: number;
  long: number;
  place: string;
  weather: ICurrentWeatherResponse;
  forecast: IForecastWeatherResponse;
  userLocation: string;
}

const initialState: IWeatherSlice = {
  id: "",
  lat: 0,
  long: 0,
  place: "",
  weather: {} as ICurrentWeatherResponse,
  forecast: {} as IForecastWeatherResponse,
  userLocation: ""
};

export const weatherSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    setLocation: (
      state,
      action: PayloadAction<{ lat: number; long: number }>
    ) => {
      state.lat = action.payload.lat;
      state.long = action.payload.long;
    },
    setPlace: (state, action) => {
      state.place = action.payload;
    },
    setWeather: (
      state,
      action: PayloadAction<{ id: string; weather: ICurrentWeatherResponse }>
    ) => {
      state.id = action.payload.id;
      state.weather = action.payload.weather;
    },
    setForecast: (
      state,
      action: PayloadAction<{ id: string; weather: IForecastWeatherResponse }>
    ) => {
      state.id = action.payload.id;
      state.forecast = action.payload.weather;
    },
    setUserLocation: (state, action) =>{
      state.userLocation = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setLocation,
  setPlace,
  setWeather,
  setForecast,
  setUserLocation
} = weatherSlice.actions;

export default weatherSlice.reducer;

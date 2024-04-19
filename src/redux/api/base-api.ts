import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define custom headers
const headers = new Headers();
// Add a Content-Type header
headers.append("Content-Type", "application/json; charset=UTF-8");

const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.openweathermap.org/",
  // credentials: "same-origin",
  // credentials: "include",
  mode: "cors",
  // prepareHeaders: (headers, {}) => {
  //   headers.set("Accept", "application/json");
  //   headers.set("Content-Type", "application/json; charset=UTF-8");

  //   return headers;
  // },
});


const mapboxBaseQuery = fetchBaseQuery({
  baseUrl: "https://api.mapbox.com/geocoding/v5/mapbox.places/",
  // credentials: "same-origin",
  // credentials: "include",
  mode: "cors",
  // prepareHeaders: (headers, {}) => {
  //   headers.set("Accept", "application/json");
  //   headers.set("Content-Type", "application/json; charset=UTF-8");

  //   return headers;
  // },
});



// All we've done so far is good, Now we will create a base apiSlice for our entire app.
// This will keep our ApiSlices modular.
export const baseApiSlice = createApi({
  reducerPath: "baseApi",
  tagTypes: [],
  baseQuery: baseQuery,
  refetchOnReconnect: true,
  endpoints: () => ({}),
});

export const mapboxBaseApiSlice = createApi({
  reducerPath: "mapboxBaseApi",
  tagTypes: [],
  baseQuery: mapboxBaseQuery,
  refetchOnReconnect: true,
  endpoints: () => ({}),
});

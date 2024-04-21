/* eslint-disable no-param-reassign */
import { setHistoryDetails } from "@/lib/helpers/session-manager";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IPlace {
  id: string;
  lat: number;
  long: number;
  name: string;
}

export interface IPlaces {
  places: IPlace[];
}

const initialState: IPlaces = {
  places: [],
};

export const placesHistorySlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    setPlaces: (
      state,
      action: PayloadAction<{
        id: string;
        lat: number;
        long: number;
        name: string;
      }>
    ) => {
      const { id, lat, long, name } = action.payload;

      const exist = new Set(state.places.map((place) => place.id)).has(id);

      if (exist) {
        return state; // No need to return a new state object since there's no change
      } else {
        let newPlaces = [...state.places.slice(-4), { id, lat, long, name }];

        state.places = newPlaces;

        setHistoryDetails(newPlaces);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPlaces } = placesHistorySlice.actions;

export default placesHistorySlice.reducer;

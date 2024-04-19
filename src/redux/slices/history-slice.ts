/* eslint-disable no-param-reassign */
import LocalStore, { setHistoryDetails } from "@/lib/helpers/session-manager";
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

      // const exist = state.places.some((place) => place.id === id);

      // if (exist) {
      //   return { places: [...state.places] };
      // }

      // let newPlaces = [...state.places, { id, lat, long, name }];
      // if (newPlaces.length > 3) {
      //   newPlaces = newPlaces.slice(-3);
      // }

      const exist = new Set(state.places.map((place) => place.id)).has(id);

      if (exist) {
        return state; // No need to return a new state object since there's no change
      }

      let newPlaces = [...state.places, { id, lat, long, name }];
      if (newPlaces.length > 3) {
        newPlaces = newPlaces.slice(-3);
      }

      // return { ...state, places: newPlaces };

      state.places = newPlaces;

      setHistoryDetails(newPlaces);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPlaces } = placesHistorySlice.actions;

export default placesHistorySlice.reducer;

"use client";
import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TempUnit } from "@/lib/helpers/unitConversion";

export interface IGlobalState {
  isPaginationClicked?: boolean;
  tempUnit: "C" | "F";
  darkMode: boolean;
}

const initialState: IGlobalState = {
  isPaginationClicked: false,
  tempUnit: "C",
  darkMode: false,
};

export const globalStateSlice = createSlice({
  name: "globalState",
  initialState,
  reducers: {
    setPaginationClicked: (state, action: PayloadAction<boolean>) => {
      state.isPaginationClicked = action.payload;
      return state;
    },
    changeTempUnit: (state) => {
      state.tempUnit = state.tempUnit === "C" ? "F" : "C";
    },
  },
});

export const { setPaginationClicked, changeTempUnit } =
  globalStateSlice.actions;

export default globalStateSlice.reducer;

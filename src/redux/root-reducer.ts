import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
// slices
import { baseApiSlice, mapboxBaseApiSlice } from "./api/base-api";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";

import globalStateReducers from "./slices/global";
import weatherSliceReducer from "./slices/weather-slice";
import placesHistorySliceReducer from "./slices/history-slice";

export const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
  stateReconciler: hardSet,
};

const rootReducer = combineReducers({
  [baseApiSlice.reducerPath]: baseApiSlice.reducer,
  [mapboxBaseApiSlice.reducerPath]: mapboxBaseApiSlice.reducer,
  globalState: globalStateReducers,
  weather: weatherSliceReducer,
  history: placesHistorySliceReducer,
});

export default rootReducer;

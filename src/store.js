import { configureStore } from "@reduxjs/toolkit";
import optionsReducer from "./features/options/optionsSlice";
import calcReducer from "./features/calc/calcSlice";

export const store = configureStore({
  reducer: {
    options: optionsReducer,
    calc: calcReducer,
  },
});

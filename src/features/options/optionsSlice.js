import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  length: 0,
  width: 0,
  height: 0,
  illuminance: 0,
  select1: 30,
  select2: 30,
  select3: 30,
};

export const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    changeLength: (state, action) => {
      state.length = action.payload;
    },
    changeWidth: (state, action) => {
      state.width = action.payload;
    },
    changeHeight: (state, action) => {
      state.height = action.payload;
    },
    changeIlluminance: (state, action) => {
      state.illuminance = action.payload;
    },
    changeSelect1: (state, action) => {
      state.select1 = action.payload;
    },
    changeSelect2: (state, action) => {
      state.select2 = action.payload;
    },
    changeSelect3: (state, action) => {
      state.select3 = action.payload;
    },
  },
});

export const {
  changeLength,
  changeWidth,
  changeHeight,
  changeIlluminance,
  changeSelect1,
  changeSelect2,
  changeSelect3,
} = optionsSlice.actions;

export default optionsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import lamps from "../../data/lamps.json";

const initialState = {
  length: 0,
  width: 0,
  height: 0,
  illuminance: 0,
  select: 0,
  lampName: null,
  lampData: null,
  lampModel: { id: null },
  isModal: false,
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
    changeSelect: (state, action) => {
      state.select = action.payload;
    },
    changeLampName: (state, action) => {
      state.lampName = action.payload;
      state.lampData = lamps[action.payload];
    },
    changeLampModel: (state, action) => {
      state.lampModel = state.lampData[action.payload - 1];
    },
    openModal: (state) => {
      state.isModal = true;
    },
    closeModal: (state) => {
      state.isModal = false;
    },
  },
});

export const {
  changeLength,
  changeWidth,
  changeHeight,
  changeIlluminance,
  changeSelect,
  changeLampName,
  changeLampModel,
  openModal,
  closeModal,
} = optionsSlice.actions;

export default optionsSlice.reducer;

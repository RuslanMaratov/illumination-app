import { createSlice } from "@reduxjs/toolkit";
import {
  findEta1,
  findEta2,
  findEta3,
  findEta4,
  findEta5,
  findEta6,
  findEta7,
} from "../../utils";

const initialState = {
  eta: 0,
  S: 0,
  E: 0,
  F: 0,
  n: 0,
  totalPrice: 0,
};

export const calcSlice = createSlice({
  name: "calc",
  initialState,
  reducers: {
    calculate: (state, action) => {
      const data = action.payload;
      state.S = data.length * data.width;
      const height = data.height - (0.2 + 0.8);
      const index = state.S / (height * (data.length + data.width));

      switch (data.select) {
        case "70% 50% 30%":
          state.eta = findEta1(index);
          break;

        case "70% 50% 10%":
          state.eta = findEta2(index);
          break;

        case "70% 30% 30%":
          state.eta = findEta3(index);
          break;

        case "70% 30% 10%":
          state.eta = findEta4(index);
          break;

        case "50% 50% 10%":
          state.eta = findEta5(index);
          break;

        case "50% 30% 10%":
          state.eta = findEta6(index);
          break;

        case "30% 10% 10%":
          state.eta = findEta7(index);
          break;

        default:
          alert("Ошибка. Введены неправильные данные");
          break;
      }

      const F = (data.illuminance * state.S) / state.eta;
      state.n = Math.round(F / data.lampModel.lumen);
      state.F = Math.round(state.n * data.lampModel.lumen);
      state.E = Math.round((state.eta * state.F) / state.S);
      state.totalPrice = Math.round(state.n * data.lampModel.price);
    },
  },
});

export const { calculate } = calcSlice.actions;

export default calcSlice.reducer;

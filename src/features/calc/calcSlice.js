import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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
  loading: null,
};

export const calcSlice = createSlice({
  name: "calc",
  initialState,
  reducers: {
    completed: (state, action) => {
      const values = action.payload;
      state.eta = values[0];
      state.S = values[1];
      state.E = values[2];
      state.F = values[3];
      state.n = values[4];
      state.totalPrice = values[5];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(calculate.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(calculate.fulfilled, (state, action) => {
        state.loading = "completed";
        // state.entities.push(action.payload);
      })
      .addCase(calculate.rejected, (state, action) => {
        state.loading = "error";
        // state.error = action.payload;
      });
  },
});

export const calculate = createAsyncThunk(
  "calc/calculate",
  async (optionsState) => {
    return new Promise((resolve, reject) => {
      try {
        const data = optionsState;
        let S = data.length * data.width;
        let eta;
        const height = data.height - (0.2 + 0.8);
        const index = S / (height * (data.length + data.width));

        switch (data.select) {
          case "70% 50% 30%":
            eta = findEta1(index);
            break;

          case "70% 50% 10%":
            eta = findEta2(index);
            break;

          case "70% 30% 30%":
            eta = findEta3(index);
            break;

          case "70% 30% 10%":
            eta = findEta4(index);
            break;

          case "50% 50% 10%":
            eta = findEta5(index);
            break;

          case "50% 30% 10%":
            eta = findEta6(index);
            break;

          case "30% 10% 10%":
            eta = findEta7(index);
            break;

          default:
            alert("Ошибка. Введены неправильные данные");
            break;
        }

        const Fmust = (data.illuminance * S) / eta;
        const n = Math.round(Fmust / data.lampModel.lumen);
        const F = Math.round(n * data.lampModel.lumen);
        const E = Math.round((eta * F) / S);
        const totalPrice = Math.round(n * data.lampModel.price);
        const calcValues = [eta, S, E, F, n, totalPrice];
        if (calcValues.includes(NaN)) {
          throw new Error(
            "Вы ввели не соответствующие данные! Расчет невозможен."
          );
        } else {
          resolve(calcValues);
        }
      } catch (error) {
        reject(error);
      }
    });
  }
);

export const { completed } = calcSlice.actions;

export default calcSlice.reducer;

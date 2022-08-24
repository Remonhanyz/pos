import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../../apis";

const counterSlice = createSlice({
  name: "getPrducts",
  initialState: {
    data: [],
    errorMessage: null,
  },
  reducers: {
    getData: () => {
      console.log("tezak hamra");
      getProducts();
    },
    getDataSuccess: (state, action) => {
      // console.log("success", action.payload);
      state.data = [action.payload];
    },
  },
});

export const { getData, getDataSuccess } = counterSlice.actions;
export default counterSlice;

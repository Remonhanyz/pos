import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDataSuccess } from "../redux-state/reducer";
import { store } from "../redux-state/store";
import { useRouter } from "next/router";
import Router from "next/router";
// export const getProducts = (data) => {
//   console.log(store);
//   axios
//     .get("https://api.beneshty.com/api/productByCategory/0")
//     .then((respose) => {
//       console.log(respose);
//       store.dispatch(getDataSuccess(respose));
//     })
//     .catch((response) => {});
// };

// p
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (values) => {
    console.log(values);
    axios
      .get("https://api.beneshty.com/api/productByCategory/0")
      .then((response) => {
        console.log(response);
        store.dispatch(getDataSuccess(response));
        Router.push("/");
      })
      .catch((response) => {});
  }
);

export const userRegister = (values) => {
  console.log("data hb3tha", values);
};
// createAsyncThunk(
//   "products/getProducts",
//   axios
//     .get("https://api.beneshty.com/api/productByCategory/0")
//     .then((response) => {
//       // console.log(response);
//       store.dispatch(getDataSuccess(response));
//     }).catch
// );

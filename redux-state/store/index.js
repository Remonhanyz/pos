import { configureStore } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
// import {  } from "redux-starter-kit";
import counterReducer from "../reducer/index";

export const store = configureStore({
  reducer: { test: counterReducer.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

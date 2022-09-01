import {configureStore} from "@reduxjs/toolkit";
import {getDefaultMiddleware} from "@reduxjs/toolkit";
import counterReducer from "../reducer/index";
import printStateSlice from "../reducer/printReducer";
import takeAwayBillsSlice from "../reducer/takeAwayBillsReducer";

export const store = configureStore({
	reducer: {
		test: counterReducer.reducer,
		printState: printStateSlice.reducer,
		takeAwayBills: takeAwayBillsSlice.reducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false
		})
});

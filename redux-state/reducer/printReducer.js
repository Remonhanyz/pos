import {createSlice} from "@reduxjs/toolkit";

export const printStateSlice = createSlice({
	name: "printState",
	initialState: {
		data: false
	},
	reducers: {
		setPrintState: (state, action) => {
			state.data = action.payload;
			console.log(state.data);
		},
		getPrintState: (state, action) => {
			return state.data 
		}
	}
});
export const {setPrintState} = printStateSlice.actions;
export default printStateSlice;

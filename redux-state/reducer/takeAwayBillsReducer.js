import {createSlice} from "@reduxjs/toolkit";
const monthNames = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

const billNumber = 1;

const getDate = () => {
	const date = new Date();
	let day = date.getDate();
	let year = date.getFullYear();
	let time = `${date.getHours()}:${date.getMinutes()}`;
	return `${monthNames[date.getMonth()]} ${day}, ${year} - ${time}`;
};

const currentBill = 1

export const takeAwayBillsSlice = createSlice({
	name: "takeAwayBills",
	initialState: {
		data: {
			billNumber: {
				date: getDate(),
				items: [
					{
						title: "Fettuccine Chicken Alferdo",
						size: "M",
						price: "68.34",
						quantity: "1"
					}
				],
				clientInfo: {
					name: "",
					phone: ""
				}
			}
		}
	},
	reducers: {
		addBill: (state, action) => {
			billNumber++;
			state.data = {
				...state.data,
				billNumber: {
					date: getDate(),
					items: [],
					clientInfo: {
						name: "",
						phone: ""
					}
				}
			};
			console.log(state.data);
		},
		//action payload must contain: the bill number
		removeBill: (state, action) => {
			Object.entries(state.data).filter(([key, value]) => {
				return key === action.payload;
			});
			billNumber--;
		},
		//action payload must contain: the bill number
		setCurrentBill: (state, action) => {
			currentBill = action.payload;
		},
		getCurrentBill: (state, action) => {
			const bill = Object.entries(state.data).find(([key, value]) => {
				return key === currentBill;
			});
			console.log('bill: ',bill)
			return bill;
		},

		//action payload must contain: the bill number, the item 
		addItem: (state, action) => {
			// const payload=action.payload
			state.data = [...state.data, action.payload];
			console.log(state.data);
		},
		//action payload must contain: the bill number, the item
		removeItem: (state, action) => {
			state.data.filter((obj) => {
				return obj.title === action.payload.title;
			});
		}
	}
});
export const {addBill, removeBill, setCurrentBill, getCurrentBill} =
	takeAwayBillsSlice.actions;
export default takeAwayBillsSlice;

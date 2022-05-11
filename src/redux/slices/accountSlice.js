import { createSlice } from "@reduxjs/toolkit"

const accountSlice = createSlice({
	name: "account",
	initialState: {
		account: {},
		processing: false,
		error: null,
	},

	reducers: {
		//get account
		getAccountStart: (state, action) => {
			state.processing = true
			state.error = false
		},
		getAccountSuccess: (state, action) => {
			state.account = action.payload
			state.processing = false
			state.error = false
		},
		getAccountFailure: (state, action) => {
			state.error = true
			state.processing = false
		},

		//save church
		saveAccountStart: (state) => {
			state.processing = true
			state.error = false
		},
		saveAccountSuccess: (state, action) => {
			console.log(action.payload)
			state.account = action.payload
			state.processing = false
			state.error = false
		},
		saveAccountFailure: (state) => {
			state.error = true
			state.processing = false
		},

		//update church
		updateAccountStart: (state) => {
			state.processing = true
			state.error = false
		},
		updateAccountSuccess: (state, action) => {
			console.log(action.payload)
			state.account = action.payload
			state.processing = false
			state.error = false
		},
		updateAccountFailure: (state) => {
			state.error = true
			state.processing = false
		},
	},
})

export const {
	getAccountStart,
	getAccountSuccess,
	getAccountFailure,
	saveAccountStart,
	saveAccountSuccess,
	saveAccountFailure,
	updateAccountStart,
	updateAccountSuccess,
	updateAccountFailure,
} = accountSlice.actions
export default accountSlice.reducer

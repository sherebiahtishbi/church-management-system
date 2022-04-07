import { createSlice } from "@reduxjs/toolkit"

const churchListSlice = createSlice({
	name: "church",
	initialState: {
		churches: {},
		processing: false,
		error: false,
	},

	reducers: {
		//get churches
		getChurchesStart: (state, action) => {
			state.processing = true
			state.error = false
		},
		getChurchesSuccess: (state, action) => {
			state.churches = action.payload
			state.processing = false
			state.error = false
		},
		getChurchesFailure: (state, action) => {
			state.error = true
			state.processing = false
		},
	},
})

export const { getChurchesStart, getChurchesSuccess, getChurchesFailure } =
	churchListSlice.actions
export default churchListSlice.reducer

import { createSlice } from "@reduxjs/toolkit"

const churchSlice = createSlice({
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

		//save church
		saveChurchStart: (state) => {
			state.processing = true
			state.error = false
		},
		saveChurchSuccess: (state, action) => {
			console.log(action.payload)
			state.churches.push(action.payload)
			state.processing = false
			state.error = false
		},
		saveChurchFailure: (state) => {
			state.error = true
			state.processing = false
		},

		//update church
		updateChurchStart: (state) => {
			state.processing = true
			state.error = false
		},
		updateChurchSuccess: (state, action) => {
			console.log(action.payload)
			const filtered = state.churches.filter(
				(c) => c._id !== action.payload._id
			)
			state.churches = { filtered, ...action.payload }
			console.log(state.churches)
			state.processing = false
			state.error = false
		},
		updateChurchFailure: (state) => {
			state.error = true
			state.processing = false
		},
	},
})

export const {
	getChurchesStart,
	getChurchesSuccess,
	getChurchesFailure,
	saveChurchStart,
	saveChurchSuccess,
	saveChurchFailure,
} = churchSlice.actions
export default churchSlice.reducer

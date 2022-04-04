import { createSlice } from "@reduxjs/toolkit"

const churchSlice = createSlice({
	name: "church",
	initialState: {
		churches: [],
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
			state.churches.push(action.payload)
			state.processing = false
			state.error = false
		},
		getChurchesFailure: (state, action) => {
			state.error = true
			state.processing = false
		},

		//save church
		saveChurchStart: (state, action) => {
			state.processing = true
			state.error = false
		},
		saveChurchSuccess: (state, action) => {
			state.churches.push(action.payload)
			state.processing = false
			state.error = false
		},
		saveChurchFailure: (state, action) => {
			state.error = true
			state.processing = false
		},

		//update church
		update: (state, action) => {
			state.churchinfo = action.payload
		},

		//delete church
		remove: (state) => {
			state.userinfo = {}
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
	update,
	remove,
} = churchSlice.actions
export default churchSlice.reducer

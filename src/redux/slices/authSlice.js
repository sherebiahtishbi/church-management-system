import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
	name: "auth",
	initialState: {
		status: "UNKNOWN",
	},

	reducers: {
		//good to go
		goodToGo: (state) => {
			state.status = "AUTHORIZED"
		},
		unAuthorized: (state) => {
			state.status = "UNAUTHORIZED"
		},
	},
})

export const { goodToGo, unAuthorized } = authSlice.actions
export default authSlice.reducer

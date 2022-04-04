import { createSlice } from "@reduxjs/toolkit"

const loginSlice = createSlice({
	name: "user",
	initialState: {
		userinfo: {
			userid: "",
			username: "",
			accountid: "",
			roles: [],
		},
		processing: false,
		error: false,
	},

	reducers: {
		//login actions
		loginStart: (state) => {
			state.processing = true
			state.error = false
		},
		loginSuccess: (state, action) => {
			console.log(action.payload)
			state.userinfo = action.payload
			state.error = false
		},
		loginFailure: (state) => {
			state.processing = false
			state.error = true
		},

		//logout actions
		logoutStart: (state) => {
			state.processing = true
			state.error = false
		},
		logoutSuccess: (state, action) => {
			state.userinfo = {}
			state.error = false
		},
		logoutFailure: (state) => {
			state.processing = false
			state.error = true
		},
	},
})

export const {
	loginStart,
	loginSuccess,
	loginFailure,
	logoutStart,
	logoutSuccess,
	logoutFailure,
} = loginSlice.actions
export default loginSlice.reducer

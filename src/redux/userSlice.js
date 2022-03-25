import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
	name: "user",
	initialState: {
		userinfo: {
			userid: "",
			username: "",
			accountid: "",
			roles: [],
		},
	},

	reducers: {
		update: (state, action) => {
			state.userinfo.userid = action.payload.userid
			state.userinfo.username = action.payload.username
			state.userinfo.accountid = action.payload.accountid
			state.userinfo.roles = action.payload.roles
		},
		remove: (state) => {
			state.userinfo = {}
		},
	},
})

export const { update, remove } = userSlice.actions
export default userSlice.reducer

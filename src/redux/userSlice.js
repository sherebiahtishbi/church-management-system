import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
	name: "user",
	initialState: {
		userid: "abcd",
		accountid: "xyz",
		roles: [],
	},

	reducers: {
		updateUserState: (state, action) => {
			state.userid = action.payload.userid
			state.accountid = action.payload.accountid
			state.roles = action.payload.roles
		},
	},
})

export const { updateUserState } = userSlice.actions
export default userSlice.reducer

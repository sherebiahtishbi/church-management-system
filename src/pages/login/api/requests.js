import {
	loginStart,
	loginSuccess,
	loginFailure,
	logoutStart,
	logoutSuccess,
	logoutFailure,
} from "../redux/loginSlice"
import { apiRequest } from "../../../utils/util"

// User CRUD requests
// get all users from db for an account
export const loginUser = async (username, password, dispatch) => {
	dispatch(loginStart())
	try {
		const res = await apiRequest.post("/auth/login", {
			username: username,
			password: password,
		})
		dispatch(loginSuccess(res.data))
	} catch (err) {
		console.log(err)
		dispatch(loginFailure())
	}
}

export const logoutUser = async (dispatch) => {
	dispatch(logoutStart())
	try {
		const res = await apiRequest.get("/auth/logout")
		dispatch(logoutSuccess())
	} catch (err) {
		dispatch(logoutFailure())
	}
}

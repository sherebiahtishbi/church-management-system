import {
	loginStart,
	loginSuccess,
	loginFailure,
	logoutStart,
	logoutSuccess,
	logoutFailure,
} from "../slices/loginSlice"
import { apiRequest as api } from "../../utils/util"

// User CRUD requests
// get all users from db for an account
export const loginUser = async (username, password, dispatch) => {
	dispatch(loginStart())
	try {
		const res = await api.post("/auth/login", {
			username: username,
			password: password,
		})
		console.log(res)
		if (res?.status === 200) {
			localStorage.setItem("_cms_tk", JSON.stringify(res.data))
			dispatch(loginSuccess(res.data.user))
		} else {
			console.log("Failed!")
			dispatch(loginFailure())
		}
	} catch (err) {
		console.log(err)
		dispatch(loginFailure())
	}
}

export const logoutUser = async (dispatch) => {
	dispatch(logoutStart())
	try {
		const res = await api.get("/auth/logout")
		dispatch(logoutSuccess())
	} catch (err) {
		dispatch(logoutFailure())
	} finally {
		localStorage.clear()
	}
}

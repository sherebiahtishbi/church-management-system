import {
	loginStart,
	loginSuccess,
	loginFailure,
	logoutStart,
	logoutSuccess,
	logoutFailure,
} from "../redux/loginSlice"
import { publicApiRequest as api } from "../../utils/util"
import useAuth from "../../hooks/useAuth"

// User CRUD requests
// get all users from db for an account
export const loginUser = async (username, password, dispatch) => {
	dispatch(loginStart())
	// const { setAuth } = useAuth()
	try {
		const res = await api.post("/auth/login", {
			username: username,
			password: password,
		})
		// console.log(res.data.token)
		localStorage.setItem("_cms_tk", res.data.token)
		dispatch(loginSuccess(res.data.user))
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
	}
}

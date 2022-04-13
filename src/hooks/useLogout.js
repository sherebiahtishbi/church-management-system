import { apiRequest as api } from "../utils/util"
import { useNavigate } from "react-router-dom"
import {
	logoutStart,
	logoutSuccess,
	logoutFailure,
} from "../redux/slices/loginSlice"

const useLogout = (dispatch) => {
	const navigate = useNavigate()

	const logout = async () => {
		//call the logout api which will clear the cookies
		dispatch(logoutStart())
		try {
			await api.get("/auth/logout")
			dispatch(logoutSuccess())
			return "SERVER_LOGOUT_SUCCESSFUL"
		} catch (err) {
			console.log(err)
			dispatch(logoutFailure())
			return "SERVER_LOGOUT_FAILED"
		} finally {
			//clear localstorage
			localStorage.clear()
			navigate("/")
			return "LOCAL_LOGOUT_SUCCESSFUL"
		}
	}

	return logout
}

export default useLogout

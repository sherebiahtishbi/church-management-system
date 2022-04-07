import { publicApiRequest as api } from "../utils/util"
import useAuth from "./useAuth"
import { useNavigate } from "react-router-dom"

const useLogout = () => {
	const navigate = useNavigate()

	//get the auth context
	const { setUser } = useAuth()

	const logout = async () => {
		//call the logout api which will clear the cookies
		try {
			await api.get("/auth/logout")
			return "SERVER_LOGOUT_SUCCESSFUL"
		} catch (err) {
			console.log(err)
			return "SERVER_LOGOUT_FAILED"
		} finally {
			//clear the auth context
			setUser({})
			navigate("/")
			return "LOCAL_LOGOUT_SUCCESSFUL"
		}
	}

	return logout
}

export default useLogout

// import useAuth from "../hooks/useAuth"
import {
	loginStart,
	loginSuccess,
	loginFailure,
} from "../redux/slices/loginSlice"
import { useDispatch } from "react-redux"

import { publicApiRequest as api } from "../utils/util"

const useLogin = (creds) => {
	const dispatch = useDispatch()
	// const { setUser } = useAuth()

	const login = async (creds) => {
		const username = creds?.username
		const password = creds?.password

		if (!username || !password) {
			dispatch(loginFailure())
			throw new Error("MISSING_CREDENTIALS")
		}
		dispatch(loginStart())
		try {
			const res = await api.post("/auth/login", creds)
			// setUser(res.data)
			dispatch(loginSuccess(res.data))
			return "LOGIN_SUCCESS"
		} catch (err) {
			dispatch(loginFailure())
			throw new Error("LOGIN_FAILED")
		}
	}
	return login
}

export default useLogin

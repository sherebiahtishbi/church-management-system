import useAuth from "../hooks/useAuth"
import { publicApiRequest as api } from "../utils/util"

const useLogin = (creds) => {
	const { setUser } = useAuth()
	const login = async (creds) => {
		const username = creds?.username
		const password = creds?.password

		if (!username || !password) throw new Error("MISSING_CREDENTIALS")
		try {
			const res = await api.post("/auth/login", creds)
			setUser(res.data)
			return "LOGIN_SUCCESS"
		} catch (err) {
			throw new Error("LOGIN_FAILED")
		}
	}
	return login
}

export default useLogin

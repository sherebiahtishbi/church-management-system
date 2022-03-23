import axios from "axios"
import { useEffect } from "react"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = ({ children }) => {
	const [authenticated, setAuthenticated] = useState(false)
	useEffect(() => {
		const verifyUser = async () => {
			try {
				const res = await axios.get("/auth/verify")
				return children ? children : <Outlet />
			} catch (err) {
				return <Navigate to="/" replace />
			}
		}
		verifyUser()
	}, [])

	if (authenticated) {
	}
}

export default ProtectedRoute

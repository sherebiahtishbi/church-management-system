import { Navigate, Outlet } from "react-router-dom"
import useAuth from "../../hooks/useAuth"

const ProtectedRoute = ({ children }) => {
	const { user } = useAuth()
	if (!user) {
		return <Navigate to="/unauthorized" replace />
	}
	return children ? children : <Outlet />
}

export default ProtectedRoute

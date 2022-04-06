import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = ({ children }) => {
	const token = localStorage.getItem("_cms_tk")
	console.log(token)

	if (!token) {
		return <Navigate to="/unauthorized" replace />
	}
	return children ? children : <Outlet />
}

export default ProtectedRoute

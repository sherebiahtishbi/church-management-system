import { Navigate, Outlet } from "react-router-dom"
// import useAuth from "../../hooks/useAuth"

const ProtectedRoute = ({ children }) => {
	// const { user } = useAuth()
	const user = localStorage.getItem("_cms_tk")
	console.log(user)
	if (!user) {
		return <Navigate to="/unauthorized" replace />
	}
	return children ? children : <Outlet />
}

export default ProtectedRoute

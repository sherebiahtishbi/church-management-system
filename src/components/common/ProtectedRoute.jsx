import { Navigate, Outlet } from "react-router-dom"
// import useAuth from "../../hooks/useAuth"

const ProtectedRoute = ({ children }) => {
	// const { user } = useAuth()
	const user = JSON.parse(localStorage.getItem("_cms_tk"))
	console.log("Logged in User : " + user.user.username)
	if (!user) {
		return <Navigate to="/unauthorized" replace />
	}
	return children ? children : <Outlet />
}

export default ProtectedRoute

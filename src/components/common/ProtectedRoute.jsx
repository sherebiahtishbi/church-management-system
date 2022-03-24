import { Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"

const ProtectedRoute = ({ children }) => {
	const username = useSelector((state) => {
		console.log(state.user)
		return state.user.userinfo.userid
	})

	// console.log(children)
	// console.log(username)

	if (!username) {
		return <Navigate to="/unauthorized" replace />
	}
	return children ? children : <Outlet />
}

export default ProtectedRoute

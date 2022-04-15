import { Outlet } from "react-router-dom"
import Navbar from "../common/nav/Navbar"

const HomeLayout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	)
}

export default HomeLayout

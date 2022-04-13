import Navbar from "../common/nav/Navbar"
import { Outlet } from "react-router-dom"

const ChurchLayout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	)
}

export default ChurchLayout

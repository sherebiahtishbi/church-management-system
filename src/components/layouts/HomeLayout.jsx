import { Outlet } from "react-router-dom"
import { Navbar } from "../../components/common"

const HomeLayout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	)
}

export default HomeLayout

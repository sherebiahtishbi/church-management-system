import { Outlet } from "react-router-dom"
import { Navbar } from "../../components/common"

const ChurchLayout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	)
}

export default ChurchLayout

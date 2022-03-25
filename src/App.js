import { ThemeProvider } from "@mui/material/styles"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import theme from "./theme/theme"
import Churches from "./pages/Churches"
import Navbar from "./components/common/Navbar"
import profileImage from "./images/anu_profile.jpg"
import Church from "./pages/Church"
import PastorAddEdit from "./components/Pastor/PastorAddEdit"
import Pastorlist from "./components/Pastor/Pastorlist"
import Members from "./components/Church/Members"
import Donations from "./components/Church/Donations"
import Documents from "./components/Church/Documents"
import Events from "./components/Church/Events"
import Facilities from "./components/Church/Facilities"
import Register from "./components/accounts/Register"
import ProtectedRoute from "./components/common/ProtectedRoute"
import ChurchAddEdit from "./components/Church/ChurchAddEdit"
import Unauthorized from "./components/common/Unauthorized"
import Logout from "./pages/Logout"
import Pagenotfound from "./pages/Pagenotfound"

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Navbar image={profileImage} />
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/logout" element={<Logout />} />
					<Route path="/unauthorized" element={<Unauthorized />} />
					<Route path="/accounts" element={<Register />} />
					<Route
						path="/churches"
						element={
							<ProtectedRoute>
								<Churches />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/churches/add"
						element={
							<ProtectedRoute>
								<ChurchAddEdit />
							</ProtectedRoute>
						}
					/>

					<Route
						path="/church"
						element={
							<ProtectedRoute>
								<Church />
							</ProtectedRoute>
						}
					>
						<Route path="pastor" element={<Pastorlist />} />
						<Route path="pastor/add" element={<PastorAddEdit />} />
						<Route path="members" element={<Members />} />
						<Route path="donations" element={<Donations />} />
						<Route path="documents" element={<Documents />} />
						<Route path="events" element={<Events />} />
						<Route path="facilities" element={<Facilities />} />
					</Route>
					<Route path="*" element={<Pagenotfound />} />
				</Routes>
			</Router>
		</ThemeProvider>
	)
}

export default App

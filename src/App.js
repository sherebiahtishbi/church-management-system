import { ThemeProvider } from "@mui/material/styles"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/login/Login"
import theme from "./theme/theme"
import Churches from "./components/_unused/Churches"
// import Church from "./components/_unused/Church"
import Register from "./components/accounts/Register"
import ProtectedRoute from "./components/common/ProtectedRoute"
import ChurchAddEdit from "./components/Church/ChurchAddEdit"
import Unauthorized from "./components/common/Unauthorized"
import Logout from "./pages/Logout"
import Pagenotfound from "./pages/Pagenotfound"
import Home from "./pages/Home"
import Mainpage from "./components/churchlist/Mainpage"
import { CssBaseline } from "@mui/material"

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/home" element={<Home />}>
						<Route
							index
							element={
								<ProtectedRoute>
									<Mainpage />
								</ProtectedRoute>
							}
						/>
						<Route
							path="addchurch"
							element={
								<ProtectedRoute>
									<ChurchAddEdit />
								</ProtectedRoute>
							}
						/>
					</Route>
					<Route path="/logout" element={<Logout />} />
					<Route path="/unauthorized" element={<Unauthorized />} />
					<Route path="/accounts" element={<Register />} />
					<Route
						path="/churches/add"
						element={
							<ProtectedRoute>
								<ChurchAddEdit />
							</ProtectedRoute>
						}
					/>
					<Route path="*" element={<Pagenotfound />} />
				</Routes>
			</Router>
		</ThemeProvider>
	)
}

export default App

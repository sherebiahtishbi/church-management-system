import { ThemeProvider } from "@mui/material/styles"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/login/Login"
import theme from "./theme/theme"
import Register from "./components/accounts/Register"
import ProtectedRoute from "./components/common/ProtectedRoute"
import { ChurchAdd, ChurchEdit } from "./components/church"
import Unauthorized from "./components/common/Unauthorized"
import Logout from "./pages/Logout"
import Pagenotfound from "./pages/Pagenotfound"
// import Home from "./pages/Home"
import Mainpage from "./components/churchlist/Mainpage"
import { CssBaseline } from "@mui/material"

import { HomeLayout } from "./components/layouts"
import ChurchLayout from "./components/layouts/ChurchLayout"

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route
						path="/home"
						element={
							<ProtectedRoute>
								<HomeLayout />
							</ProtectedRoute>
						}
					>
						<Route
							index
							element={
								<ProtectedRoute>
									<Mainpage />
								</ProtectedRoute>
							}
						/>
					</Route>
					<Route path="/logout" element={<Logout />} />
					<Route path="/unauthorized" element={<Unauthorized />} />
					<Route path="/accounts" element={<Register />} />
					<Route path="/churches" element={<ChurchLayout />}>
						<Route
							path="add"
							element={
								<ProtectedRoute>
									<ChurchAdd />
								</ProtectedRoute>
							}
						/>
						<Route
							path="edit/:id"
							element={
								<ProtectedRoute>
									<ChurchEdit />
								</ProtectedRoute>
							}
						/>
					</Route>
					<Route path="*" element={<Pagenotfound />} />
				</Routes>
			</Router>
		</ThemeProvider>
	)
}

export default App

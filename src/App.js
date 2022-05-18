/*
Author     : Sherebiah Tisbi
Written On : Friday 06,May 2022
Objective  : This is the main App code file
*/
import { ThemeProvider } from "@mui/material/styles"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Login, Logout } from "./pages/auth"
import theme from "./theme/theme"
import Register from "./pages/account/Register"
import ProtectedRoute from "./components/common/ProtectedRoute"
import { ChurchView, ChurchAdd, ChurchEdit, Mainpage } from "./pages/church"
import Unauthorized from "./components/common/Unauthorized"
import Pagenotfound from "./pages/Pagenotfound"
// import Home from "./pages/Home"
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
					<Route path="/logout" element={<Logout />} />
					<Route path="/accounts" element={<Register />} />
					<Route path="/unauthorized" element={<Unauthorized />} />
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

					<Route
						path="/churches"
						element={
							<ProtectedRoute>
								<ChurchLayout />
							</ProtectedRoute>
						}
					>
						<Route
							path="view/:id"
							element={
								<ProtectedRoute>
									<ChurchView />
								</ProtectedRoute>
							}
						/>
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

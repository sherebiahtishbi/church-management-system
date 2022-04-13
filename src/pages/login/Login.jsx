import { Button, Grid, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
// import useLogin from "../../hooks/useLogin"
import { loginUser } from "../../redux/actions/authActions"
import { useDispatch } from "react-redux"

const Login = () => {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [error, setError] = useState(false)
	const dispatch = useDispatch()

	let navigate = useNavigate()

	const handleLogin = async (e) => {
		e.preventDefault()
		if (username && password) {
			console.log("Credentials available!")
			try {
				const res = await loginUser(username, password, dispatch)
				console.log("Login successful!")
				navigate("/home")
			} catch (err) {
				console.log(err)
				setError(true)
			}
		} else {
			setError(true)
		}
	}

	return (
		<Box height={400} width={200} boxShadow={4} mt={15} ml={10} p={5}>
			<Grid container>
				<Grid item xs={12}>
					<Typography variant="h6" color="GrayText">
						Login
					</Typography>
				</Grid>
				<Grid item xs={12} mt={2}>
					<TextField
						id="username"
						label="Username"
						variant="standard"
						value={username}
						onChange={(e) => {
							setUsername(e.target.value)
						}}
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} mt={2}>
					<TextField
						id="accountpwd"
						label="Password"
						variant="standard"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value)
						}}
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} mt={4}>
					<Button onClick={handleLogin}>Login</Button>
				</Grid>
				<Grid item xs={12}>
					<Button
						onClick={() => {
							navigate("/accounts")
						}}
					>
						Register
					</Button>
				</Grid>
				{error && (
					<Grid item xs={12}>
						<Typography color="red">
							Login failed! Please provide correct username and
							password.
						</Typography>
					</Grid>
				)}
			</Grid>
		</Box>
	)
}

export default Login

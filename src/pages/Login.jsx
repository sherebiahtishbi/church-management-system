import { Password } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")

	let navigate = useNavigate()

	const handleLogin = async () => {
		console.log("Username : " + username)
		console.log("Password : " + password)
		if (username && password) {
			console.log("Credentials available!")
			try {
				const res = await axios.post(
					"http://localhost:7501/auth/login",
					{ username: username, password: password }
				)
				if (res.status === 200) {
					console.log("Login successfully!")
					navigate("/churches")
				}
			} catch (err) {
				console.log(err)
			}
		}
	}

	return (
		<Box height={400} width={200} boxShadow={4} mt={15} ml={10} p={5}>
			<Grid container xs={12}>
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
			</Grid>
		</Box>
	)
}

export default Login

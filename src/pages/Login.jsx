import { Button, Grid, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { update } from "../redux/userSlice"

//TODO remove the navbar

const Login = () => {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [error, setError] = useState(false)
	const dispath = useDispatch()

	let navigate = useNavigate()

	const handleLogin = async () => {
		// console.log("Username : " + username)
		// console.log("Password : " + password)
		if (username && password) {
			console.log("Credentials available!")
			try {
				const res = await axios.post("/auth/login", {
					username: username,
					password: password,
				})
				if (res.status === 200) {
					console.log(res.data)
					setError(false)
					dispath(
						update({
							userid: res.data.userid,
							username: res.data.username,
							accountid: res.data.accountid,
							roles: res.data.roles,
						})
					)
					console.log("Login successfully!")
					navigate("/churches")
				} else {
					setError(true)
				}
			} catch (err) {
				setError(true)
				console.log(err)
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

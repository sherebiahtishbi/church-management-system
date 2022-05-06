import { Box, Button, Grid, Typography } from "@mui/material"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { logoutUser } from "../../redux/actions/loginActions"

const Unauthorized = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	useEffect(() => {
		console.log("logout")
		logoutUser(dispatch)
	}, [])

	const handleLogout = () => {
		navigate("/")
	}

	return (
		<Box sx={{ mt: { xs: 10, lg: 20 } }}>
			<Box m="auto" maxWidth={"lg"} p={5} boxShadow={3} borderRadius={2}>
				<Grid container width="100%" rowSpacing={4}>
					<Grid item xs={12} md={12}>
						<Typography variant="h4" color="red" pb={1}>
							Page you requested requires you to login first.
						</Typography>
					</Grid>
					<Grid item xs={12} md={12}>
						<Button onClick={handleLogout}>Go to Login</Button>
					</Grid>
				</Grid>
			</Box>
		</Box>
	)
}

export default Unauthorized

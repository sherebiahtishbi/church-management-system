import { Box, Button, Grid, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

const Logout = () => {
	const navigate = useNavigate()

	return (
		<Box sx={{ mt: { xs: 10, lg: 20 } }}>
			<Box m="auto" maxWidth={"lg"} p={5} boxShadow={3} borderRadius={2}>
				<Grid
					container
					width="100%"
					rowSpacing={4}
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					<Grid item xs={12} md={12}>
						<Typography variant="h4" color="red" pb={1}>
							You are successfully logged out!
						</Typography>
					</Grid>
					<Grid item xs={12} md={12}>
						<Button
							onClick={() => {
								navigate("/")
							}}
						>
							Login again
						</Button>
					</Grid>
				</Grid>
			</Box>
		</Box>
	)
}

export default Logout

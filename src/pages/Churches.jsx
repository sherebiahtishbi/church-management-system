//react imports
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

//mui imports
import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Grid,
	Box,
	Button,
} from "@mui/material"

//internal imports
// import { apiRequest } from "../apirequests/baserequests"
import axios from "axios"

const Churches = () => {
	const [churches, setChurches] = useState([])
	const [error, setError] = useState(false)
	const navigate = useNavigate()

	useEffect(() => {
		const getChurches = async () => {
			console.log("calling church api")
			try {
				const res = await axios.get("/church")
				if (res.data) {
					console.log(res.data)
					setError(false)
					setChurches(res.data)
				}
			} catch (err) {
				setError(true)
				console.log(err)
			}
		}
		getChurches()
	}, [])

	return (
		<>
			<Grid container spacing={2} sx={{ mt: 8 }}>
				{error ? (
					<Box
						display="flex"
						mt={5}
						width="100vw"
						flexDirection="column"
						alignItems="center"
					>
						<Typography color="red" variant="h6">
							Sorry we could not fulfill the request, it seems you
							are not logged in!
						</Typography>
						<Button
							onClick={() => {
								navigate("/")
							}}
						>
							Go to Login
						</Button>
					</Box>
				) : (
					churches &&
					churches.map((church) => {
						return (
							<Grid item xs={12} md={4} xl={3} key={church.id}>
								<Card sx={{ p: 1, m: 1 }} raised>
									<CardMedia
										component="img"
										alt={church.name}
										height="160"
										image={church.image}
										// image={churchImage1}
									/>
									<CardContent>
										<Typography
											gutterBottom
											variant="h5"
											component="div"
										>
											{church.name}
										</Typography>
										<Typography
											variant="body2"
											color="text.secondary"
										>
											{church.description}
										</Typography>
									</CardContent>
									<CardActions>
										<Link
											style={{
												display: "block",
												margin: "1rem 0",
											}}
											// to={`/churches/${church.id}`}
											to={`/church`}
											key={church.id}
										>
											View Details
										</Link>
										{/* <Button size="small">Manage</Button>
                                    <Button size="small">View Details</Button> */}
									</CardActions>
								</Card>
							</Grid>
						)
					})
				)}
			</Grid>
			{/* <Outlet /> */}
		</>
	)
}

export default Churches

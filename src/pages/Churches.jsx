import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Grid,
} from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Churches = () => {
	const [churches, setChurches] = useState([])

	useEffect(() => {
		const getChurches = async () => {
			console.log("calling church api")
			try {
				const res = await axios.get("http://localhost:7501/church", {
					withCredentials: true,
					headers: {
						"Access-Control-Allow-Origin": "http://localhost:3000",
					},
				})
				if (res.data) {
					console.log(res.data)
					setChurches(res.data)
				}
			} catch (err) {
				console.log(err)
			}
		}
		getChurches()
	}, [])

	return (
		<>
			<Grid container spacing={2} sx={{ mt: 8 }}>
				{churches &&
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
					})}
			</Grid>
			{/* <Outlet /> */}
		</>
	)
}

export default Churches

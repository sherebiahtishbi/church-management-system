import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import Newchurch from "./Newchurch"
import { useNavigate } from "react-router-dom"

const ChurchCard = ({ church }) => {
	const navigate = useNavigate()
	return (
		<Grid item xs={12} md={3} xl={2.5}>
			{church._id !== 9999 ? (
				<Card
					sx={{
						p: 1,
						m: 1,
						backgroundColor: "#dcf2fa",
						boxShadow: 3,
						"&:hover": {
							backgroundColor: "#F2F2F2",
							cursor: "pointer",
							boxShadow: 5,
						},
					}}
					raised
					onClick={() => navigate("/church")}
				>
					<CardMedia
						component="img"
						alt={church.churchname}
						height="160"
						image={church.churchimg}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{church.churchname}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{church.description.substring(0, 200)}
						</Typography>
					</CardContent>
					{/* <CardActions>
						<Link
							style={{
								display: "block",
								margin: "1rem 0",
							}}
							to={`/church`}
							key={church._id}
						>
							View Details
						</Link>
					</CardActions> */}
				</Card>
			) : (
				<Newchurch />
			)}
		</Grid>
	)
}

export default ChurchCard

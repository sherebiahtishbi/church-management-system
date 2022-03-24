import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from "@mui/material"
import { Link } from "react-router-dom"

const ChurchCard = ({ church }) => {
	// console.log(church)
	return (
		<Grid item xs={12} md={4} xl={3} key={church.id}>
			<Card sx={{ p: 1, m: 1 }} raised>
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
				<CardActions>
					<Link
						style={{
							display: "block",
							margin: "1rem 0",
						}}
						// to={`/churches/${church.id}`}
						to={`/church`}
						key={church._id}
					>
						View Details
					</Link>
					{/* <Button size="small">Manage</Button>
                                    <Button size="small">View Details</Button> */}
				</CardActions>
			</Card>
		</Grid>
	)
}

export default ChurchCard

import {
	Avatar,
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Grid,
	Typography,
} from "@mui/material"
import { useNavigate } from "react-router-dom"
import { red } from "@mui/material/colors"

const ChurchCard = ({ church }) => {
	const navigate = useNavigate()
	return (
		<Grid item xs={12} md={3} xl={3} cursor="pointer">
			<Card
				sx={{
					width: "100%",
					"&:hover": {
						backgroundColor: "primary.light",
						// cursor: "pointer",
					},
				}}
			>
				<CardHeader
					avatar={
						<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
							R
						</Avatar>
					}
					title={church.churchname}
					subheader="September 14, 2016"
				/>
				<CardMedia
					component="img"
					height="194"
					image={church.churchimg}
					alt="Paella dish"
				/>
				{/* <CardContent>
					<Typography variant="body2" color="text.secondary">
						{church.description.substring(0, 100)} ...
					</Typography>
				</CardContent> */}

				<CardActions>
					<Button
						variant="outlined"
						size="small"
						onClick={() => navigate("/home/addchurch")}
					>
						Manage
					</Button>
				</CardActions>
			</Card>
		</Grid>
	)
}

export default ChurchCard

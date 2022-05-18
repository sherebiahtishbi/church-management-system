import {
	Avatar,
	Button,
	Card,
	CardActions,
	CardHeader,
	CardMedia,
	Grid,
} from "@mui/material"
import { useNavigate } from "react-router-dom"
import { red } from "@mui/material/colors"
import moment from "moment"

const ChurchCard = ({ church }) => {
	const navigate = useNavigate()

	const handleClick = () => {
		church._id === 9999
			? navigate("/churches/add")
			: navigate(`/churches/view/${church._id}`)
		// : navigate(`/churches/edit/${church._id}`)
	}

	return (
		<Grid item xs={12} sm={6} md={4} xl={3} cursor="pointer">
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
						<Avatar sx={{ bgcolor: red[600] }} aria-label="recipe">
							ST
						</Avatar>
					}
					title={church.churchname}
					subheader={
						church.startdate
							? moment(church.startdate).format("DD MMMM, YYYY")
							: ""
					}
				/>
				<CardMedia
					component="img"
					height="194"
					image={church.churchimg}
					alt="Paella dish"
				/>
				<CardActions>
					<Button
						variant="outlined"
						size="large"
						onClick={handleClick}
					>
						Manage
					</Button>
				</CardActions>
			</Card>
		</Grid>
	)
}

export default ChurchCard

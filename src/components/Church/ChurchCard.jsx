import { CardMedia, Grid } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { flexbox, styled } from "@mui/system"
import { alpha } from "@mui/material"
import { Add } from "@mui/icons-material"

const STCard = styled("div")(({ theme }) => ({
	padding: 1,
	margin: 1,
	[theme.breakpoints.down("md")]: {
		padding: 0,
		margin: 0,
	},
	backgroundColor: theme.palette.primary.light,
	boxShadow: theme.shadows[2],
	borderRadius: 2,
	"&:hover": {
		backgroundColor: theme.palette.primary.main,
		cursor: "pointer",
		boxShadow: theme.shadows[4],
	},
}))

const STChurchName = styled("div")(({ theme }) => ({
	fontSize: 18,
	padding: 10,
	alignItems: "center",
	justifyContent: "center",
	textAlign: "center",
	lineHeight: "1.5rem",
	backgroundColor: alpha(theme.palette.primary.main, 0.3),
}))

const STAddIcon = styled("div")(({ theme }) => ({
	fontSize: 40,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: alpha(theme.palette.primary.main, 0.3),
}))

const ChurchCard = ({ church }) => {
	const navigate = useNavigate()
	return (
		<Grid item xs={12} md={3} xl={3}>
			{church._id !== 9999 ? (
				<STCard onClick={() => navigate("/home/addchurch")}>
					<CardMedia
						component="img"
						alt={church.churchname}
						height="160"
						image={church.churchimg}
					/>
					<STChurchName>{church.churchname}</STChurchName>
				</STCard>
			) : (
				<STCard onClick={() => navigate("/home/addchurch")}>
					<STAddIcon>
						<Add fontSize="60" />
					</STAddIcon>
					<STChurchName>{church.churchname}</STChurchName>
				</STCard>
			)}
		</Grid>
	)
}

export default ChurchCard

import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import React from "react"
import nochurch from "../../images/nochurch.png"
import { styled } from "@mui/system"

const STCard = styled("div")(({ theme }) => ({
	padding: 1,
	margin: 1,
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
}))

const Newchurch = () => {
	const navigate = useNavigate()
	return (
		<Grid item xs={12} md={3} xl={3}>
			<STCard onClick={() => navigate("/church")}>
				<CardMedia
					component="img"
					alt="Add new church"
					height="160"
					image={nochurch}
				/>
				<STChurchName>Add a new Church</STChurchName>
			</STCard>
		</Grid>
	)
}

export default Newchurch

import { Card, CardContent, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import React from "react"
import nochurch from "../../images/nochurch.png"

const Newchurch = () => {
	const navigate = useNavigate()
	return (
		<Card
			sx={{
				p: 1,
				m: 1,
				backgroundColor: "#dcf2fa",
				"&:hover": {
					backgroundColor: "whitesmoke",
					cursor: "pointer",
				},
			}}
			raised
			onClick={() => navigate("/churches/add")}
		>
			<CardContent
				component="div"
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Typography
					gutterBottom
					variant="h4"
					color="GrayText"
					component="div"
				>
					Add a new church
				</Typography>
				<img
					src={nochurch}
					style={{
						height: 200,
						width: "auto",
						objectFit: "contain",
					}}
				/>
			</CardContent>
		</Card>
	)
}

export default Newchurch

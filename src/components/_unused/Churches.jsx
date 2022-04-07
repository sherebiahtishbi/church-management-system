//react imports
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

//mui imports
import { Typography, Grid, Box, Button } from "@mui/material"

//internal imports
import { getChurches } from "../churchlist/api/requests"
import ChurchCard from "../churchlist/ChurchCard"
import nochurch from "../../images/nochurch.png"

const Churches = () => {
	const dispatch = useDispatch()
	const { churches, processing, error } = useSelector(
		(state) => state.churchlist
	)
	const userinfo = useSelector((state) => state.login.userinfo)
	const navigate = useNavigate()

	useEffect(() => {
		getChurches(userinfo.accountid, dispatch)
	}, [dispatch])

	return (
		<>
			<Grid container spacing={2} sx={{ mt: 8 }}>
				{error ? (
					navigate("/unauthorized")
				) : churches.length > 0 ? (
					churches.map((church) => {
						return <ChurchCard key={church._id} church={church} />
					})
				) : (
					<Box
						mt={25}
						width="100%"
						display="flex"
						flexDirection="column"
						flexWrap={true}
						alignItems="center"
						justifyContent="center"
					>
						<img
							src={nochurch}
							height="200"
							width="auto"
							alt="new church"
						/>
						<Typography variant="h4" color="GrayText" my={4}>
							You dont have any church added yet! Please add the
							church(s).
						</Typography>
						<Button onClick={() => navigate("/churches/add")}>
							Add Church
						</Button>
					</Box>
				)}
			</Grid>
			{/* <Outlet /> */}
		</>
	)
}

export default Churches
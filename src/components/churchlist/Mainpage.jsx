import { Box, Grid, Typography } from "@mui/material"
import { styled } from "@mui/system"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getChurches } from "./api/requests"
import ChurchCard from "./ChurchCard"
import useAuth from "../../hooks/useAuth"

const Container = styled("div")(({ theme }) => ({
	width: "100%",
	display: "flex",
	marginLeft: 25,
}))

const Mainpage = () => {
	const dispatch = useDispatch()
	const { user } = useAuth()
	const { churches, processing, error } = useSelector(
		(state) => state.churchlist
	)
	const userinfo = useSelector((state) => state.login.userinfo)
	const navigate = useNavigate()

	useEffect(() => {
		console.log(user)
		getChurches(user.user.accountid, true, user.token, dispatch)
	}, [dispatch])

	console.log(churches)
	return (
		<Container>
			{churches.length > 0 ? (
				<Grid container spacing={2} mt={1}>
					{churches.map((church) => {
						return <ChurchCard key={church._id} church={church} />
					})}
				</Grid>
			) : (
				<Box
					display="flex"
					flex={1}
					alignItems="center"
					justifyContent="center"
				>
					<Typography
						variant="h3"
						color="secondary.dark"
						fontWeight="500"
					>
						No Church available!
					</Typography>
				</Box>
			)}
		</Container>
	)
}

export default Mainpage

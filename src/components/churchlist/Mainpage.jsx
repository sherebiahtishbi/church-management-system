import { Grid, Typography } from "@mui/material"
import { styled } from "@mui/system"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getChurches } from "./api/requests"
import ChurchCard from "./ChurchCard"

const Container = styled("div")(({ theme }) => ({
	width: "100%",
	display: "flex",
	marginLeft: 25,
}))

const Mainpage = () => {
	const dispatch = useDispatch()
	const { churches, processing, error } = useSelector(
		(state) => state.churchlist
	)
	const userinfo = useSelector((state) => state.login.userinfo)
	const navigate = useNavigate()

	useEffect(() => {
		getChurches(userinfo.accountid, true, dispatch)
	}, [dispatch])

	return (
		<Container>
			{churches.length > 0 ? (
				<Grid container spacing={2} mt={1}>
					{churches.map((church) => {
						return <ChurchCard key={church._id} church={church} />
					})}
				</Grid>
			) : (
				<Typography>No Church available!</Typography>
			)}
		</Container>
	)
}

export default Mainpage

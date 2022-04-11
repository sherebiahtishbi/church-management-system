import { Box, Grid, Typography } from "@mui/material"
import { styled } from "@mui/system"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getChurches } from "../../redux/actions/churchActions"
import ChurchCard from "./ChurchCard"

const Container = styled("div")(({ theme }) => ({
	width: "100%",
	display: "flex",
	marginLeft: 25,
}))

const Mainpage = () => {
	const dispatch = useDispatch()

	//get churches from the store
	const { churches, processing, error } = useSelector((state) => state.church)

	//get currentuser from the store
	const userinfo = useSelector((state) => state.auth.userinfo)

	useEffect(() => {
		// console.log(userinfo)
		getChurches(userinfo.user.accountid, true, userinfo.token, dispatch)
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

import { Box, Grid, Typography } from "@mui/material"
import { styled } from "@mui/system"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getChurches } from "../../redux/actions/churchActions"
import ChurchCard from "./ChurchCard"
import useApi from "../../hooks/useApi"

const Container = styled("div")(({ theme }) => ({
	width: "100%",
	display: "flex",
	justifyContent: "center",
	paddingLeft: 25,
	paddingRight: 25,
}))

const InfoSection = styled("div")(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	gap: 10,
	paddingTop: 4,
	paddingBottom: 4,
}))

const SubInfo = styled("div")(({ theme }) => ({
	color: theme.palette.cms.textLight,
}))

const Mainpage = () => {
	const dispatch = useDispatch()
	const api = useApi()

	//get churches from the store
	const { churches } = useSelector((state) => state.church)

	//get currentuser from the store
	const userinfo = useSelector((state) => state.login.userinfo)

	useEffect(() => {
		console.log("fetching churches from db")
		getChurches(userinfo.accountid, api, dispatch)
	}, [])

	// console.log(churches)
	return (
		<Container>
			{churches.length > 0 ? (
				<Box paddingTop={4}>
					<InfoSection>
						<Typography variant="h5" color="cms.textLight">
							Below are the list of churches in your account which
							you can manage.
						</Typography>
						<SubInfo>
							You can add new churches, manage the data of
							existing church like pastor's information, member's
							information, donations, events and much more.
						</SubInfo>
					</InfoSection>
					<Grid container spacing={2} mt={1}>
						{churches.map((church) => {
							return (
								<ChurchCard key={church._id} church={church} />
							)
						})}
					</Grid>
				</Box>
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

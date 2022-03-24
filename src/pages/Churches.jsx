//react imports
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

//mui imports
import { Typography, Grid, Box, Button } from "@mui/material"

//internal imports
// import { apiRequest } from "../apirequests/baserequests"
import axios from "axios"
import ChurchCard from "../components/Church/ChurchCard"

const Churches = () => {
	const [churches, setChurches] = useState([])
	const [error, setError] = useState(false)
	const navigate = useNavigate()

	useEffect(() => {
		const getChurches = async () => {
			console.log("calling church api")
			try {
				const res = await axios.get("/church")
				if (res.data) {
					console.log(res.data)
					setError(false)
					setChurches(res.data)
				}
			} catch (err) {
				setError(true)
				console.log(err)
			}
		}
		getChurches()
	}, [])

	return (
		<>
			<Grid container spacing={2} sx={{ mt: 8 }}>
				{error ? (
					navigate("/unauthorized")
				) : churches.length > 0 ? (
					churches.map((church) => {
						return <ChurchCard church={church} />
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
						<Typography variant="h4" color="GrayText">
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

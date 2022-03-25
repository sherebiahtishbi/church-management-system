//react imports
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

//mui imports
import { Typography, Grid, Box, Button } from "@mui/material"

//internal imports
// import { apiRequest } from "../apirequests/baserequests"
import axios from "axios"
import ChurchCard from "../components/Church/ChurchCard"
import nochurch from "../images/nochurch.png"

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
					const dummy = {
						_id: 9999,
						churchname: "Add Church",
						description:
							"Add a new Church to manage its information.",
						churchimg: nochurch,
					}
					console.log(res.data)
					// setChurches(res.data)
					const updatedchurches = [dummy, ...res.data]
					console.log(updatedchurches)
					setChurches(updatedchurches)
					// console.log(churches)
					setError(false)
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

import { Grid, Typography } from "@mui/material"
import { styled } from "@mui/system"
import axios from "axios"
import { useEffect, useState } from "react"
import ChurchCard from "./ChurchCard"
import nochurch from "../../images/nochurch.png"

const Container = styled("div")(({ theme }) => ({
	width: "100%",
	display: "flex",
	marginLeft: 25,
}))

const Mainpage = () => {
	const [churches, setChurches] = useState([])
	const [error, setError] = useState(false)

	useEffect(() => {
		const getChurches = async () => {
			console.log("calling church api")
			try {
				const res = await axios.get("/church")
				if (res.data) {
					const dummy = {
						_id: 9999,
						churchname: "Add New Church",
						description:
							"Add a new Church to manage its information.",
						churchimg: nochurch,
					}
					console.log(res.data)
					const updatedchurches = [dummy, ...res.data]
					console.log(updatedchurches)
					setChurches(updatedchurches)
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

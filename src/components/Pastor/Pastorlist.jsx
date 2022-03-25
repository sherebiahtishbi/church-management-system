import { Box, Button, Grid, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import axios from "axios"
import { DataGrid } from "@mui/x-data-grid"
import { Add, Person, PersonAdd } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"

const Pastorlist = () => {
	const navigate = useNavigate()
	const [pastors, setPastors] = useState([])

	useEffect(() => {
		const getPastors = async () => {
			try {
				const res = await axios.get("/persons?t=pastor&c=abcd")
				if (res.data) {
					setPastors(res.data)
				}
			} catch (err) {
				console.log(err)
			}
		}
		getPastors()
	}, [])

	const columns = [
		{ field: "firstname", headerName: "Firstname", width: 150 },
		{ field: "lastname", headerName: "Lastname", width: 150 },
		{
			field: "address",
			headerName: "Address",
			renderCell: ({ value }) => {
				return (
					<>
						{value.address1}
						<br />
						Phone: {value.phone1}
					</>
				)
			},
			width: 250,
		},
		{ field: "birthdate", headerName: "Birthdate", width: 200 },
	]

	return (
		<Box>
			<Grid container>
				<Grid container>
					<Grid
						item
						xs={12}
						md={6}
						display="flex"
						justifyContent="start"
					>
						<Person fontSize="large" htmlColor="GrayText" />
						<Typography variant="h6" color="GrayText" ml={2}>
							Pastors
						</Typography>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}
						display="flex"
						justifyContent="end"
					>
						<Button
							startIcon={<PersonAdd />}
							onClick={() => {
								navigate("/church/pastor/add")
							}}
						>
							Add New
						</Button>
					</Grid>
				</Grid>
				<Grid item xs={12} height={400} mt={2}>
					{pastors.length > 0 ? (
						<DataGrid
							rowHeight={70}
							rows={pastors}
							columns={columns}
							getRowId={(row) => row._id}
							pageSize={5}
						/>
					) : (
						<Box
							height="100%"
							width="100%"
							display="flex"
							flexDirection="column"
							alignItems="center"
							justifyContent="center"
						>
							<Typography variant="h4" color="GrayText" mb={2}>
								There are no pastor available for this church!
								Please add one.
							</Typography>
							<Button
								startIcon={<PersonAdd />}
								onClick={() => {
									navigate("/church/pastor/add")
								}}
							>
								Add Pastor
							</Button>
						</Box>
					)}
				</Grid>
			</Grid>
		</Box>
	)
}

export default Pastorlist

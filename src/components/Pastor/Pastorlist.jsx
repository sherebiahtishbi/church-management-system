import { Box, Button, Grid, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import axios from "axios"
import { DataGrid } from "@mui/x-data-grid"
import { Add } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"

const Pastorlist = () => {
	const navigate = useNavigate()
	const [pastors, setPastors] = useState([])

	useEffect(() => {
		const getPastors = async () => {
			try {
				const res = await axios.get("/persons?type=pastor")
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
						<div>
							{value.address1}
							<p>Phone: {value.phone1}</p>
						</div>
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
				<Grid container xs={12}>
					<Grid
						item
						xs={12}
						md={6}
						display="flex"
						justifyContent="start"
					>
						<Typography variant="h6" color="GrayText">
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
							startIcon={<Add />}
							onClick={() => {
								navigate("/church/pastor/add")
							}}
						>
							Add New
						</Button>
					</Grid>
				</Grid>
				<Grid item xs={12} height={400} mt={2}>
					<DataGrid
						rowHeight={100}
						rows={pastors}
						columns={columns}
						getRowId={(row) => row._id}
						pageSize={5}
					/>
				</Grid>
			</Grid>
		</Box>
	)
}

export default Pastorlist

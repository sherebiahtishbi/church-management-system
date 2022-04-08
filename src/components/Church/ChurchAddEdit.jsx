//mui imports
import { Box, Button, Grid, Typography } from "@mui/material"
import { styled } from "@mui/system"

//react imports
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

//application imports
import Upload from "../common/Upload"
import ChurchForm from "./ChurchForm"
import { createChurch } from "./api/requests"

const STContainer = styled("div")(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	width: "100%",
	padding: 30,
	[theme.breakpoints.down("lg")]: {
		padding: 0,
	},
	[theme.breakpoints.down("sm")]: {
		padding: 0,
	},
}))

const ChurchAddEdit = () => {
	const navigate = useNavigate()
	const user = useSelector((state) => state.auth.userinfo)
	const dispatch = useDispatch()
	const [error, setError] = useState(null)
	const [formData, setFormData] = useState({
		userid: user.userid,
		accountid: user.accountid,
	})
	const [image, setImage] = useState(null)

	const handleSave = async () => {
		try {
			dispatch(createChurch(formData))
			// await axios.post("/church/save", formData)
			setError(false)
		} catch (err) {
			setError(true)
			console.log(err)
		}
	}

	const handleImage = (e) => {
		console.log(e)
		if (e.target.files && e.target.files[0]) {
			setImage(URL.createObjectURL(e.target.files[0]))
		}
	}
	return (
		<Grid container>
			<STContainer>
				<Grid container sx={{ display: "flex" }}>
					<Grid item xs={12} lg={8}>
						<Typography variant="h3" color="GrayText">
							Add a new church
						</Typography>
						<Typography variant="body2" color="GrayText" pb={5}>
							Add new church details. Once you add the church you
							will see as a list of churches when you login next
							time.
						</Typography>
						<ChurchForm formata={formData} />
						<Box
							sx={{
								display: "flex",
								justifyContent: {
									xs: "center",
									lg: "flex-end",
								},
							}}
						>
							<Button variant="contained" onClick={handleSave}>
								Save
							</Button>
							<Button
								variant="contained"
								sx={{ ml: 2 }}
								onClick={() => navigate("/home")}
							>
								Cancel
							</Button>
						</Box>
					</Grid>
					<Grid
						item
						xs={12}
						lg={4}
						display="flex"
						padding={2}
						alignItems="center"
						justifyContent="center"
					>
						<Upload />
					</Grid>
				</Grid>
			</STContainer>
		</Grid>
	)
}

export default ChurchAddEdit

//mui imports
import { Box, Button, Grid, Typography } from "@mui/material"
import { styled } from "@mui/system"

//react imports
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"

//application imports
import Upload from "../common/Upload"
import ChurchForm from "./ChurchForm"
import { saveChurch } from "../../redux/actions/churchActions"
// import useUpload from "../../hooks/useUpload"

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

const ButtonContainer = styled("div")(({ theme }) => ({
	display: "flex",
	[theme.breakpoints.up("lg")]: {
		justifyContent: "flex-end",
	},
	[theme.breakpoints.down("md")]: {
		justifyContent: "center",
	},
}))

const ChurchAddEdit = () => {
	const navigate = useNavigate()
	const userinfo = useSelector((state) => state.auth.userinfo)
	const { churches, error } = useSelector((state) => state.church)
	const dispatch = useDispatch()
	const [image, setImage] = useState(null)
	const [formData, setFormData] = useState({})
	const [mode, setMode] = useState("add")
	const params = useParams()
	//if component is called with id as a parameter then
	//get the church with id and populate formdata

	useEffect(() => {
		const getChurch = () => {
			if (params) {
				let church
				if (churches.length > 0) {
					church = churches.find((church) => church._id === params.id)
				}
				if (church) {
					setFormData({
						userid: userinfo.userid,
						accountid: userinfo.accountid,
						...church,
					})
					setImage(church.churchimg)

					setMode("edit")
				}
			}
		}
		getChurch()
	}, [])

	console.log(formData)

	const handleSave = async () => {
		// const { progress, url, error } = fileUpoad(image)
		try {
			console.log(formData)
			await saveChurch(formData, mode, dispatch)
			navigate("/home")
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<Grid container>
			<STContainer>
				<Grid container sx={{ display: "flex" }}>
					<Grid item xs={12} lg={8}>
						<Typography variant="h3" color="GrayText">
							{mode === "add"
								? "Add a new church"
								: "Edit Church"}
						</Typography>
						<Typography variant="body2" color="GrayText" pb={5}>
							{mode === "add"
								? "Add new church details. Once you add the church you will see as a list of churches when you login next	time."
								: "Edit church details"}
						</Typography>
						<ChurchForm
							formdata={formData}
							setformdata={setFormData}
						/>
						<ButtonContainer>
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
						</ButtonContainer>
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

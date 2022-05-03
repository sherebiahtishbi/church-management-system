//mui imports
import { Alert, Button, Grid, Snackbar, Typography } from "@mui/material"
import { styled } from "@mui/system"

//react imports
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

//application imports
import ChurchForm from "./ChurchForm"
import { saveChurch } from "../../redux/actions/churchActions"
import useApi from "../../hooks/useApi"
import { FileUpload } from "../common/CustomFileUpload"
// import UploadProgressbar from "../common/UploadProgressbar"
import useFirebaseUpload from "../../hooks/useFirebaseUpload"
import Titles from "../common/Titles"

const STContainer = styled("div")(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	width: "100%",
	padding: 30,
	[theme.breakpoints.down("lg")]: {
		padding: 10,
	},
	[theme.breakpoints.down("sm")]: {
		padding: 20,
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

const ChurchAdd = () => {
	const navigate = useNavigate()
	const api = useApi()
	const dispatch = useDispatch()
	const userinfo = useSelector((state) => state.login.userinfo)
	const { error } = useSelector((state) => state.church)
	const [currentImage, setCurrentImage] = useState(null)
	const [formData, setFormData] = useState({
		accountid: userinfo.accountid,
		createdby: userinfo.userid,
	})

	const { uploadFile, progress, url, uploaderror } = useFirebaseUpload(
		formData.imagefile
	)

	const handleSave = async () => {
		try {
			console.log(formData)
			const { imagefile, ...formdata } = formData
			console.log(formdata)
			console.log("Now will upload file")
			const imageurl = await uploadFile()
			console.log(imageurl)
			formdata.churchimg = imageurl
			console.log(formdata)
			await saveChurch(formdata, api, dispatch)
			navigate("/home")
		} catch (err) {
			console.log(err)
		}
	}
	console.log(progress)
	const handleClose = () => {}

	return (
		<STContainer>
			<Grid container sx={{ display: "flex" }}>
				<Grid item xs={12}>
					<Titles
						title="Add a new church"
						subtitle="Add new church details. Once you add the church you will
						see it in the list of churches on the home page. Also
						you will be able to add many other details for the
						church."
					/>
				</Grid>
				<Grid
					item
					xs={12}
					lg={2}
					sx={{ marginRight: { xs: 0, lg: 4 } }}
				>
					<FileUpload pic={currentImage} setPic={setCurrentImage} />
				</Grid>
				<Grid item xs={12} lg={8}>
					<ChurchForm formdata={formData} setformdata={setFormData} />
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
					lg={2}
					display="flex"
					padding={2}
					alignItems="center"
					justifyContent="center"
				></Grid>
			</Grid>
			<Snackbar
				open={!error}
				autoHideDuration={3000}
				onClose={handleClose}
			>
				<Alert
					onClose={handleClose}
					severity="success"
					sx={{ width: "100%" }}
				>
					Church added successfully!
				</Alert>
			</Snackbar>
		</STContainer>
	)
}

export default ChurchAdd

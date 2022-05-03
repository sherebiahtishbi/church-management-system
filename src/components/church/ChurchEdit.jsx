//mui imports
import {
	Box,
	Button,
	Divider,
	Grid,
	ListItemIcon,
	ListItemText,
	MenuItem,
	Typography,
} from "@mui/material"
import { styled } from "@mui/system"

//react imports
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"

//application imports
import ChurchForm from "./ChurchForm"
import { saveChurch } from "../../redux/actions/churchActions"
import useApi from "../../hooks/useApi"
import { FileUpload } from "../common/CustomFileUpload"
import { menuOptions } from "../../dataobjects/churchmenu"
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

const MenuContainer = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	gap: 6,
}))

const ChurchMenu = () => {
	return (
		<Box>
			<MenuContainer>
				{menuOptions.map((menuitem) => (
					<MenuItem key={menuitem.id}>
						<ListItemIcon>{menuitem.icon}</ListItemIcon>
						<ListItemText>{menuitem.text}</ListItemText>
					</MenuItem>
				))}
			</MenuContainer>
		</Box>
	)
}

const ChurchEdit = () => {
	const navigate = useNavigate()
	const api = useApi()
	const userinfo = useSelector((state) => state.login.userinfo)
	const { churches, error } = useSelector((state) => state.church)
	const dispatch = useDispatch()
	const [formData, setFormData] = useState({})
	const [imgLink, setImgLink] = useState(null)
	const [imgFile, setImgFile] = useState({})
	const [mode, setMode] = useState("add")

	const { uploadFile, progress, url, uploaderror } =
		useFirebaseUpload(imgFile)

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
					setFormData({ ...church })
					setImgLink(church?.churchimg)
					setImgFile({ name: church?.imgfilename })
					setMode("edit")
				}
			}
		}
		getChurch()
	}, [params])

	console.log(formData)

	const uploadImage = async () => {
		const imageurl = await uploadFile()
		console.log(imageurl)
		formData.churchimg = imageurl
		formData.imgfilename = imgFile.name
	}

	const handleSave = async () => {
		try {
			console.log(formData)
			console.log("Now will upload file")
			if (!formData.imgfilename && imgFile) {
				await uploadImage()
			} else if (imgFile && imgFile.name !== formData.imgfilename) {
				await uploadImage()
			}
			await saveChurch(formData, api, dispatch)
			navigate("/home")
		} catch (err) {
			console.log(err)
		}
	}

	return (
		// <Grid container>
		<STContainer>
			<Grid container sx={{ display: "flex" }}>
				<Grid
					item
					xs={12}
					sx={{
						display: { xs: "flex", lg: "none" },
						justifyContent: { xs: "center" },
					}}
				>
					<ChurchMenu />
				</Grid>
				<Grid item xs={12}>
					<Titles
						title="Edit Church Information"
						subtitle="Here you can edit the basic church details. Also you can
						add or modify many other details like pastors, staff,
						members, church events, facilitites and donations."
					/>
				</Grid>
				<Grid
					item
					xs={12}
					lg={2}
					sx={{ marginRight: { xs: 0, lg: 4 } }}
				>
					<FileUpload
						pic={imgLink}
						setPic={setImgLink}
						setNewImagefile={setImgFile}
					/>
					<Divider />
					<Box sx={{ display: { xs: "none", lg: "flex" } }}>
						<ChurchMenu />
					</Box>
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
		</STContainer>
		// </Grid>
	)
}

export default ChurchEdit

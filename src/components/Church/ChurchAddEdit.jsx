import {
	Box,
	Button,
	Grid,
	IconButton,
	MenuItem,
	TextField,
	Typography,
} from "@mui/material"
import { useState } from "react"
import { countries } from "../../dataobjects/countries"
import { useSelector } from "react-redux"
import axios from "axios"
import { borderRadius, styled } from "@mui/system"
import { useNavigate } from "react-router-dom"
import { alpha } from "@mui/material/styles"
import { PhotoCamera } from "@mui/icons-material"
import Upload from "../common/Upload"

const STContainer = styled("div")(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	width: "100%",
	padding: 30,
	[theme.breakpoints.down("lg")]: {
		padding: 10,
	},
}))

const ChurchAddEdit = () => {
	const navigate = useNavigate()
	const userid = useSelector((state) => state.user.userinfo.userid)
	const accountid = useSelector((state) => state.user.userinfo.accountid)
	const [error, setError] = useState(null)
	const [formData, setFormData] = useState({
		userid: userid,
		accountid: accountid,
	})
	const [image, setImage] = useState(null)

	const handleSave = async () => {
		try {
			await axios.post("/church/save", formData)
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
		<STContainer>
			<Grid container sx={{ display: "flex" }}>
				<Grid
					item
					xs={12}
					lg={8}
					sx={{ backgroundImage: `url(${image})` }}
				>
					<Typography variant="h3" color="GrayText">
						Add a new church
					</Typography>
					<Typography variant="body2" color="GrayText" pb={5}>
						Add new church details. Once you add the church you will
						see as a list of churches when you login next time.
					</Typography>
				</Grid>
				<Grid
					item
					xs={12}
					lg={4}
					display="flex"
					sx={{ justifyContent: { xs: "center", lg: "flex-end" } }}
				>
					<Box
						sx={{
							border: "1px solid gray",
							padding: 1,
							borderRadius: 2,
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							flexDirection: "column",
							backgroundColor: "primary.light",
							gap: 1,
						}}
					>
						<img
							src={image}
							style={{
								height: 200,
								width: "auto",
								borderRadius: 5,
							}}
						/>
						<label htmlFor="icon-button-file">
							<input
								accept="image/*"
								id="icon-button-file"
								type="file"
								style={{ display: "none" }}
								onChange={handleImage}
							/>
							<IconButton
								color="primary"
								aria-label="upload picture"
								component="span"
							>
								<PhotoCamera />
							</IconButton>
							Upload Picture
						</label>
					</Box>
				</Grid>
			</Grid>
			<Grid container rowSpacing={2} columnSpacing={4} mt={2}>
				<Grid item xs={12}>
					<TextField
						fullWidth
						id="churchname"
						label="Church name"
						type="text"
						variant="filled"
						value={formData.churchname || ""}
						onChange={(e) =>
							setFormData({
								...formData,
								churchname: e.target.value,
							})
						}
					></TextField>
				</Grid>
				<Grid item xs={12}>
					<TextField
						fullWidth
						multiline
						rows={4}
						id="churchdesc"
						label="Description/History of the Church"
						type="text"
						variant="filled"
						value={formData.churchdesc || ""}
						onChange={(e) =>
							setFormData({
								...formData,
								churchdesc: e.target.value,
							})
						}
					></TextField>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						fullWidth
						id="address1"
						label="Address1"
						type="text"
						variant="filled"
						value={
							formData.address ? formData.address.address1 : ""
						}
						onChange={(e) =>
							setFormData({
								...formData,
								address: {
									...formData.address,
									address1: e.target.value,
								},
							})
						}
					></TextField>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						fullWidth
						id="address2"
						label="Address2"
						first
						type="text"
						variant="filled"
						value={
							formData.address ? formData.address.address2 : ""
						}
						onChange={(e) =>
							setFormData({
								...formData,
								address: {
									...formData.address,
									address2: e.target.value,
								},
							})
						}
					></TextField>
				</Grid>
				<Grid item xs={12} md={4}>
					<TextField
						fullWidth
						id="city"
						label="City"
						type="text"
						variant="filled"
						value={formData.address ? formData.address.city : ""}
						onChange={(e) =>
							setFormData({
								...formData,
								address: {
									...formData.address,
									city: e.target.value,
								},
							})
						}
					></TextField>
				</Grid>
				<Grid item xs={12} md={4}>
					<TextField
						fullWidth
						id="state"
						label="State"
						type="text"
						variant="filled"
						value={formData.address ? formData.address.state : ""}
						onChange={(e) =>
							setFormData({
								...formData,
								address: {
									...formData.address,
									state: e.target.value,
								},
							})
						}
					></TextField>
				</Grid>
				<Grid item xs={12} md={4}>
					<TextField
						select
						fullWidth
						id="country"
						label="Country"
						type="text"
						variant="filled"
						value={formData.address ? formData.address.country : ""}
						onChange={(e) =>
							setFormData({
								...formData,
								address: {
									...formData.address,
									country: e.target.value,
								},
							})
						}
					>
						{countries.map((country) => (
							<MenuItem value={country.code}>
								{country.name}
							</MenuItem>
						))}
					</TextField>
				</Grid>
				<Grid item xs={12} md={4}>
					<TextField
						fullWidth
						id="phone1"
						label="Phone1"
						type="text"
						variant="filled"
						value={formData.address ? formData.address.phone1 : ""}
						onChange={(e) =>
							setFormData({
								...formData,
								address: {
									...formData.address,
									phone1: e.target.value,
								},
							})
						}
					></TextField>
				</Grid>
				<Grid item xs={12} md={4}>
					<TextField
						fullWidth
						id="phone2"
						label="Phone2"
						type="text"
						variant="filled"
						value={formData.address ? formData.address.phone2 : ""}
						onChange={(e) =>
							setFormData({
								...formData,
								address: {
									...formData.address,
									phone2: e.target.value,
								},
							})
						}
					></TextField>
				</Grid>
				<Grid item xs={12} md={4}>
					<TextField
						fullWidth
						id="email"
						label="Email"
						type="text"
						variant="filled"
						value={formData.address ? formData.address.email : ""}
						onChange={(e) =>
							setFormData({
								...formData,
								address: {
									...formData.address,
									email: e.target.value,
								},
							})
						}
					></TextField>
				</Grid>
				<Grid item xs={12} md={4}>
					<TextField
						fullWidth
						id="startdate"
						label="Start date"
						type="date"
						variant="filled"
						value={formData.startdate}
						onChange={(e) =>
							setFormData({
								...formData,
								startdate: e.target.value,
							})
						}
						InputLabelProps={{
							shrink: true,
						}}
					></TextField>
				</Grid>
				<Grid item xs={12} md={4}>
					<TextField
						fullWidth
						id="enddate"
						label="End date"
						type="date"
						variant="filled"
						value={formData.enddate}
						onChange={(e) =>
							setFormData({
								...formData,
								enddate: e.target.value,
							})
						}
						InputLabelProps={{
							shrink: true,
						}}
					></TextField>
				</Grid>

				<Grid
					item
					pl={0}
					mt={3}
					display="flex"
					alignItems="center"
					justifyContent="flex-end"
					xs={12}
					md={12}
				>
					{/* {error ? (
						<Typography color="red" variant="body2" mr={2}>
							Oops! something went wrong! Cannot save church.
						</Typography>
					) : (
						<Typography color="Green" variant="body2" mr={2}>
							Church added successfully!
						</Typography>
					)} */}
					<Button variant="outlined" onClick={handleSave}>
						Save
					</Button>
					<Button
						variant="outlined"
						sx={{ ml: 2 }}
						onClick={() => navigate("/home")}
					>
						Cancel
					</Button>
				</Grid>
			</Grid>
		</STContainer>
	)
}

export default ChurchAddEdit

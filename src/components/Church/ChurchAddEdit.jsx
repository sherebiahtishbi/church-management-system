import {
	Box,
	Button,
	Grid,
	MenuItem,
	TextField,
	Typography,
} from "@mui/material"
import { useState } from "react"
import { countries } from "../../dataobjects/countries"
import { useSelector } from "react-redux"
import axios from "axios"

const ChurchAddEdit = () => {
	const userid = useSelector((state) => state.user.userinfo.userid)
	const accountid = useSelector((state) => state.user.userinfo.accountid)
	const [error, setError] = useState(false)
	const [formData, setFormData] = useState({
		userid: userid,
		accountid: accountid,
	})

	const handleSave = async () => {
		//console.log(formData)
		try {
			const res = await axios.post("/church/save", formData)
			setError(false)
		} catch (err) {
			setError(true)
			console.log(err)
		}
	}

	return (
		<Box sx={{ mt: { xs: 10, lg: 20 } }}>
			<Box m="auto" maxWidth={"lg"} p={5} boxShadow={3} borderRadius={2}>
				<Grid item xs={12} lg={6}>
					<Typography variant="h3" color="GrayText" pb={1}>
						Add a new church
					</Typography>
					<Typography variant="body2" color="GrayText" py={2}>
						Add new church details. Once you add the church you will
						see as a list of churches when you login next time.
					</Typography>
				</Grid>
				<Grid container rowSpacing={2} columnSpacing={4}>
					<Grid item xs={12}>
						<TextField
							fullWidth
							id="churchname"
							label="Church name"
							type="text"
							variant="standard"
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
							id="churchdesc"
							label="Description/History of the Church"
							type="text"
							variant="standard"
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
							variant="standard"
							value={
								formData.address
									? formData.address.address1
									: ""
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
							variant="standard"
							value={
								formData.address
									? formData.address.address2
									: ""
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
							variant="standard"
							value={
								formData.address ? formData.address.city : ""
							}
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
							variant="standard"
							value={
								formData.address ? formData.address.state : ""
							}
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
							variant="standard"
							value={
								formData.address ? formData.address.country : ""
							}
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
							variant="standard"
							value={
								formData.address ? formData.address.phone1 : ""
							}
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
							variant="standard"
							value={
								formData.address ? formData.address.phone2 : ""
							}
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
							variant="standard"
							value={
								formData.address ? formData.address.email : ""
							}
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
							variant="standard"
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
							variant="standard"
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
						justifyContent="start"
						xs={12}
						md={12}
					>
						<Button variant="outlined" onClick={handleSave}>
							Save
						</Button>
						<Button variant="outlined" sx={{ ml: 2 }}>
							Cancel
						</Button>
						{error === true ? (
							<Typography color="red" variant="body2" ml={2}>
								Oops! something went wrong! Cannot save church.
							</Typography>
						) : (
							<Typography color="Green" variant="body2" ml={2}>
								Church added successfully!
							</Typography>
						)}
					</Grid>
				</Grid>
			</Box>
		</Box>
	)
}

export default ChurchAddEdit

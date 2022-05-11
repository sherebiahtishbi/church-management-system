import {
	Box,
	Button,
	Grid,
	MenuItem,
	TextField,
	Typography,
} from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { countries } from "../../dataobjects/countries"
import { useApi } from "../../hooks"
import { saveAccount } from "../../redux/actions/accountActions"

const Register = () => {
	const navigate = useNavigate()
	const [formData, setFormData] = useState({})
	const [error, setError] = useState(true)
	const api = useApi()
	const dispatch = useDispatch()

	const handleCreateAccount = async () => {
		try {
			setFormData({ ...formData, type: "owner" })
			const res = await saveAccount(formData, api, dispatch)
			if (res.data) {
				navigate("/")
			}
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<Box sx={{ mt: { xs: 10, lg: 20 } }}>
			<Box m="auto" maxWidth={"lg"} p={5} boxShadow={3} borderRadius={2}>
				<Grid item xs={12} lg={6}>
					<Typography variant="h3" color="cms.text500">
						New Account
					</Typography>
					<Typography variant="body2" color="GrayText">
						Create your new account to start managing your church
						information. We will collect some primary details about
						you and you will be all good to go!
					</Typography>
				</Grid>
				<Grid container xs={12}>
					<Grid
						container
						xs={12}
						lg={8}
						columnSpacing={2}
						rowSpacing={2}
					>
						<Grid item xs={12}>
							<TextField
								id="accountname"
								label="Choose the account name"
								variant="standard"
								value={formData.accountname || ""}
								onChange={(e) => {
									setFormData({
										...formData,
										accountname: e.target.value,
									})
								}}
								required
								fullWidth
							/>
						</Grid>
						<Grid item xs={12} lg={6}>
							<TextField
								id="firstname"
								label="Firstname"
								variant="standard"
								pattern="[a-z][A-Z]"
								value={formData.firstname || ""}
								onChange={(e) =>
									setFormData({
										...formData,
										firstname: e.target.value,
									})
								}
								required
								fullWidth
							/>
						</Grid>
						<Grid item xs={12} lg={6}>
							<TextField
								id="lastname"
								label="Lastname"
								variant="standard"
								value={formData.lastname || ""}
								onChange={(e) =>
									setFormData({
										...formData,
										lastname: e.target.value,
									})
								}
								required
								fullWidth
							/>
						</Grid>
						<Grid item xs={12} lg={6}>
							<TextField
								id="address1"
								label="Address1"
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
								required
								fullWidth
							/>
						</Grid>
						<Grid item xs={12} lg={6}>
							<TextField
								id="address2"
								label="Address2"
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
								fullWidth
							/>
						</Grid>
						<Grid item xs={12} lg={4}>
							<TextField
								id="city"
								label="City"
								variant="standard"
								value={
									formData.address
										? formData.address.city
										: ""
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
								required
								fullWidth
							/>
						</Grid>
						<Grid item xs={12} lg={4}>
							<TextField
								id="state"
								label="State"
								variant="standard"
								value={
									formData.address
										? formData.address.state
										: ""
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
								required
								fullWidth
							/>
						</Grid>
						<Grid item xs={12} lg={4}>
							<TextField
								select
								id="country"
								label="Country"
								variant="standard"
								value={
									formData.address
										? formData.address.country
										: ""
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
								required
								fullWidth
							>
								{countries.map((country) => (
									<MenuItem
										key={country.code}
										value={country.code}
									>
										{country.name}
									</MenuItem>
								))}
							</TextField>
						</Grid>
						<Grid item xs={12} lg={6}>
							<TextField
								id="phone"
								label="Phone#"
								variant="standard"
								value={
									formData.address
										? formData.address.phone
										: ""
								}
								onChange={(e) =>
									setFormData({
										...formData,
										address: {
											...formData.address,
											phone: e.target.value,
										},
									})
								}
								required
								fullWidth
							/>
						</Grid>
						<Grid item xs={12} lg={6}>
							<TextField
								id="email"
								label="Email Address"
								variant="standard"
								value={
									formData.address
										? formData.address.email
										: ""
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
								required
								fullWidth
							/>
						</Grid>
						<Grid item xs={12} lg={6}>
							<TextField
								id="password"
								label="Password"
								variant="standard"
								type="password"
								value={formData.password}
								onChange={(e) =>
									setFormData({
										...formData,
										password: e.target.value,
									})
								}
								required
								fullWidth
							/>
						</Grid>
						<Grid item xs={12} lg={6}>
							<TextField
								id="confpassword"
								label="Confirm Password"
								variant="standard"
								type="password"
								onChange={(e) => {
									setError(
										e.target.value !== formData.password
											? true
											: false
									)
								}}
								required
								fullWidth
							/>
						</Grid>
					</Grid>
					<Grid
						container
						xs={12}
						lg={4}
						display="flex"
						justifyContent="center"
						alignItems="center"
					>
						{/* <img src={churchImage} maxWidth="100%" /> */}
						<Typography variant="h4" color="GrayText" ml={4}>
							Pay more attention to serving the Lord and not
							managing the information.
						</Typography>
					</Grid>
				</Grid>
				<Grid container mt={4}>
					<Grid item xs={12} md={2}>
						<Button
							onClick={handleCreateAccount}
							disabled={error ? true : false}
						>
							Create Account
						</Button>
					</Grid>
					<Grid item xs={12} md={2}>
						<Button onClick={() => navigate("/")}>Login</Button>
					</Grid>
				</Grid>
			</Box>
		</Box>
	)
}

export default Register

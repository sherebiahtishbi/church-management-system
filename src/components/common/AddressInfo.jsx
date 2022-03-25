import { Box, Typography, TextField, Grid } from "@mui/material"

function AddressInfo(props) {
	return (
		<Box mt={2}>
			{props.showheader && (
				<Typography variant="h5" pb={2}>
					{props.title ? props.title : "Address Information"}
				</Typography>
			)}
			<Grid container columnSpacing={4} rowSpacing={2}>
				<Grid item xs={12} sm={6}>
					<TextField
						fullWidth
						id="address1"
						value={
							props.formdata.address
								? props.formdata.address.address1
								: ""
						}
						label="Address1"
						variant="standard"
						onChange={(e) =>
							props.updater({
								...props.formdata,
								address: {
									...props.formdata.address,
									address1: e.target.value,
								},
							})
						}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						fullWidth
						id="address2"
						label="Address2"
						variant="standard"
						value={
							props.formdata.address
								? props.formdata.address.address2
								: ""
						}
						onChange={(e) =>
							props.updater({
								...props.formdata,
								address: {
									...props.formdata.address,
									address2: e.target.value,
								},
							})
						}
					/>
				</Grid>
				<Grid item xs={12} sm={3}>
					<TextField
						fullWidth
						id="city"
						label="City"
						variant="standard"
						value={
							props.formdata.address
								? props.formdata.address.city
								: ""
						}
						onChange={(e) =>
							props.updater({
								...props.formdata,
								address: {
									...props.formdata.address,
									city: e.target.value,
								},
							})
						}
					/>
				</Grid>
				<Grid item xs={12} sm={3}>
					<TextField
						fullWidth
						id="state"
						label="State"
						variant="standard"
						value={
							props.formdata.address
								? props.formdata.address.state
								: ""
						}
						onChange={(e) =>
							props.updater({
								...props.formdata,
								address: {
									...props.formdata.address,
									state: e.target.value,
								},
							})
						}
					/>
				</Grid>
				<Grid item xs={12} sm={3}>
					<TextField
						fullWidth
						id="country"
						label="Country"
						variant="standard"
						value={
							props.formdata.address
								? props.formdata.address.country
								: ""
						}
						onChange={(e) =>
							props.updater({
								...props.formdata,
								address: {
									...props.formdata.address,
									country: e.target.value,
								},
							})
						}
					/>
				</Grid>
				<Grid item xs={12} sm={3}>
					<TextField
						fullWidth
						id="postalcode"
						label="Postal/Zipcode"
						variant="standard"
						value={
							props.formdata.address
								? props.formdata.address.postalcode
								: ""
						}
						onChange={(e) =>
							props.updater({
								...props.formdata,
								address: {
									...props.formdata.address,
									postalcode: e.target.value,
								},
							})
						}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						fullWidth
						id="phone1"
						label="Phone1"
						variant="standard"
						value={
							props.formdata.address
								? props.formdata.address.phone1
								: ""
						}
						onChange={(e) =>
							props.updater({
								...props.formdata,
								address: {
									...props.formdata.address,
									phone1: e.target.value,
								},
							})
						}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						fullWidth
						id="phone2"
						label="Phone2"
						variant="standard"
						value={
							props.formdata.address
								? props.formdata.address.phone2
								: ""
						}
						onChange={(e) =>
							props.updater({
								...props.formdata,
								address: {
									...props.formdata.address,
									phone2: e.target.value,
								},
							})
						}
					/>
				</Grid>
				<Grid item xs={12} sm={12}>
					<TextField
						fullWidth
						id="email"
						label="Email"
						variant="standard"
						value={
							props.formdata.address
								? props.formdata.address.email
								: ""
						}
						onChange={(e) =>
							props.updater({
								...props.formdata,
								address: {
									...props.formdata.address,
									email: e.target.value,
								},
							})
						}
					/>
				</Grid>
			</Grid>
		</Box>
	)
}

export default AddressInfo

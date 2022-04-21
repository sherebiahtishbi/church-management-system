import { Grid, TextField, MenuItem } from "@mui/material"
import { countries } from "../../dataobjects/countries"
import moment from "moment"

const ChurchForm = ({ formdata, setformdata }) => {
	return (
		<Grid container rowSpacing={2} columnSpacing={4} mt={2}>
			<Grid item xs={12}>
				<TextField
					fullWidth
					id="churchname"
					label="Church name"
					type="text"
					variant="filled"
					value={formdata.churchname || ""}
					onChange={(e) =>
						setformdata({
							...formdata,
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
					id="description"
					label="Description/History of the Church"
					type="text"
					variant="filled"
					value={formdata.description || ""}
					onChange={(e) =>
						setformdata({
							...formdata,
							description: e.target.value,
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
					value={formdata.address ? formdata.address.address1 : ""}
					onChange={(e) =>
						setformdata({
							...formdata,
							address: {
								...formdata.address,
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
					value={formdata.address ? formdata.address.address2 : ""}
					onChange={(e) =>
						setformdata({
							...formdata,
							address: {
								...formdata.address,
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
					value={formdata.address ? formdata.address.city : ""}
					onChange={(e) =>
						setformdata({
							...formdata,
							address: {
								...formdata.address,
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
					value={formdata.address ? formdata.address.state : ""}
					onChange={(e) =>
						setformdata({
							...formdata,
							address: {
								...formdata.address,
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
					value={formdata.address ? formdata.address.country : ""}
					onChange={(e) =>
						setformdata({
							...formdata,
							address: {
								...formdata.address,
								country: e.target.value,
							},
						})
					}
				>
					{countries.map((country) => (
						<MenuItem value={country.code}>{country.name}</MenuItem>
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
					value={formdata.address ? formdata.address.phone1 : ""}
					onChange={(e) =>
						setformdata({
							...formdata,
							address: {
								...formdata.address,
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
					value={formdata.address ? formdata.address.phone2 : ""}
					onChange={(e) =>
						setformdata({
							...formdata,
							address: {
								...formdata.address,
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
					value={formdata.address ? formdata.address.email : ""}
					onChange={(e) =>
						setformdata({
							...formdata,
							address: {
								...formdata.address,
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
					value={moment(formdata.startdate).format("YYYY-MM-DD")}
					onChange={(e) =>
						setformdata({
							...formdata,
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
					value={moment(formdata.enddate).format("YYYY-MM-DD")}
					onChange={(e) =>
						setformdata({
							...formdata,
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
			></Grid>
		</Grid>
	)
}

export default ChurchForm

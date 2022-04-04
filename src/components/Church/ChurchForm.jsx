import { Grid, TextField, Typography, MenuItem, Button } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { countries } from "../../dataobjects/countries"

const ChurchForm = ({ formdata, handleSave }) => {
	const [formData, setFormData] = useState({})
	const navigate = useNavigate()
	return (
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
					value={formData.address ? formData.address.address1 : ""}
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
					value={formData.address ? formData.address.address2 : ""}
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
			></Grid>
		</Grid>
	)
}

export default ChurchForm

import { Box, Typography, TextField } from "@mui/material"

function AddressInfo(props) {
  return (
	<Box mt={2}>
		{props.showheader && 
		<Typography variant="h5" pb={2}>{props.title ? props.title : "Address Information"}</Typography>
		}
		<div>
			<TextField
				fullWidth
				id="address1"
				value={props.formdata.address1}
				label="Address1"
				variant="outlined"
				onChange={(e) => props.updater({ ...props.formdata, address1: e.target.value })	}
				sx={{ mt: 1 }}/>
			<TextField
				fullWidth
				id="address2"
				label="Address2"
				variant="outlined"
				value={props.formdata.address2}
				onChange={(e) =>props.updater({ ...props.formdata, address2: e.target.value })}
				sx={{ mt: 1 }} />
			<TextField
				id="phone1"
				label="Phone1"
				variant="outlined"
				value={props.formdata.phone1}
				onChange={(e) => props.updater({ ...props.formdata, phone1: e.target.value })}
				sx={{ mt: 1 }} />              
			<TextField
				id="phone2"
				label="Phone2"
				variant="outlined"
				value={props.formdata.phone2}
				onChange={(e) => props.updater({ ...props.formdata, phone2: e.target.value })}
				sx={{ mt: 1, ml: { md: 1, lg: 1 } }} />
			{/* <TextField
				id="email"
				label="Email"
				variant="outlined"
				value={props.formdata.email}
				fullWidth
				onChange={(e) => props.updater({ ...props.formdata, email: e.target.value })}
				sx={{ mt: 1 }} /> */}
		</div>
	</Box>
  )
}

export default AddressInfo
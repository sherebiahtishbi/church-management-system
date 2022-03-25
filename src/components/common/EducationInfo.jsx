import { Box, Grid, MenuItem, TextField, Typography } from "@mui/material"

function EducationInfo(props) {
	return (
		<Box mt={2}>
			{props.showheader && (
				<Typography variant="h5" pb={2}>
					{props.title ? props.title : "Educational Info"}
				</Typography>
			)}
			<Grid container rowSpacing={2} columnSpacing={4}>
				<Grid item xs={12} sm={6}>
					<TextField
						fullWidth
						id="degree"
						value={
							props.formdata.education
								? props.formdata.education.degree
								: ""
						}
						onChange={(e) =>
							props.updater({
								...props.formdata,
								education: {
									...props.formdata.education,
									degree: e.target.value,
								},
							})
						}
						label="Degree"
						variant="standard"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						fullWidth
						id="school"
						value={
							props.formdata.education
								? props.formdata.education.school
								: ""
						}
						onChange={(e) =>
							props.updater({
								...props.formdata,
								education: {
									...props.formdata.education,
									school: e.target.value,
								},
							})
						}
						label="School/College/University"
						variant="standard"
					/>
				</Grid>
				<Grid item xs={12} sm={3}>
					<TextField
						fullWidth
						id="degreetype"
						select
						label="Degree Type"
						variant="standard"
						value={
							props.formdata.education
								? props.formdata.education.degreetype
								: ""
						}
						onChange={(e) =>
							props.updater({
								...props.formdata,
								education: {
									...props.formdata.education,
									degreetype: e.target.value,
								},
							})
						}
					>
						<MenuItem value="MST">Masters</MenuItem>
						<MenuItem value="BCH">Bachelors</MenuItem>
						<MenuItem value="ASO">Associate</MenuItem>
						<MenuItem value="DIP">Diploma</MenuItem>
						<MenuItem value="CER">Certificate</MenuItem>
					</TextField>
				</Grid>
				<Grid item xs={12} sm={3}>
					<TextField
						fullWidth
						id="dt-pass"
						label="Date of Completion"
						variant="standard"
						type="date"
						defaultValue={() => {
							new Date()
						}}
						value={
							props.formdata.education
								? props.formdata.education.completiondate
								: new Date()
						}
						onChange={(e) =>
							props.updater({
								...props.formdata,
								education: {
									...props.formdata.education,
									completiondate: e.target.value,
								},
							})
						}
						InputLabelProps={{
							shrink: true,
						}}
					/>
				</Grid>
			</Grid>
		</Box>
	)
}

export default EducationInfo

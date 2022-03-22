import { useState } from "react"
import { Avatar, Box, Button, Grid, Typography } from "@mui/material"
import Personalnfo from "../common/Personalnfo"
import AddressInfo from "../common/AddressInfo"
import profileImage from "../../images/anu_profile.jpg"
import EducationInfo from "../common/EducationInfo"
import EmploymentInfo from "../common/EmploymentInfo"
import GraceStepper from "../common/GraceStepper"
import { objectPerson } from "../../dataobjects/objectPerson"
import { ChevronLeft, ChevronRight, KeyboardReturn } from "@mui/icons-material"
import axios from "axios"

// const images = require.context('../../images', true);

function PastorAddEdit() {
	const [formData, setFormData] = useState(objectPerson)
	const [step, setStep] = useState(0)
	const entrysteps = [
		"Personal Info",
		"Address Info",
		"Educational Info",
		"Employment Info",
	]

	const createPerson = async () => {
		console.log(formData)
		console.log("About to post data!")
		try {
			const res = await axios.post(
				"http://localhost:7501/persons/save",
				formData
			)
			console.log(res)
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<div>
			<Typography variant="h6" sx={{ color: "GrayText", pb: 2 }}>
				Pastor
			</Typography>
			<GraceStepper steps={entrysteps} activeStep={step} />
			<Box mt={3} pb={4}>
				<Grid container spacing={0.25}>
					<Grid
						container
						xs={12}
						sm={12}
						md={2}
						xl={2}
						justifyContent="center"
						alignItems="center"
						display={"flex"}
					>
						<Avatar
							alt="Anugrah Tisbi"
							src={profileImage}
							sx={{
								xs: 12,
								width: "80%",
								height: "auto",
								boxShadow: 10,
							}}
						/>
						{!formData.profileimage ? (
							<Typography sx={{ xs: 12 }}>
								Upload Photo
							</Typography>
						) : (
							<Typography sx={{ xs: 12 }}>
								Change Photo
							</Typography>
						)}
					</Grid>
					<Grid
						item
						xs={12}
						sm={12}
						md={10}
						xl={10}
						mt={2}
						height={400}
					>
						<Box>
							{/* <Box sx={{height:{xl:400}, flexGrow:1}}> */}
							{step === 0 && (
								<Personalnfo
									showheader
									formdata={formData}
									updater={setFormData}
								/>
							)}
							{step === 1 && (
								<AddressInfo
									showheader
									formdata={formData}
									updater={setFormData}
								/>
							)}
							{step === 2 && (
								<EducationInfo
									showheader
									formdata={formData}
									updater={setFormData}
								/>
							)}
							{step === 3 && (
								<EmploymentInfo
									showheader
									formdata={formData}
									updater={setFormData}
								/>
							)}
						</Box>
						<Box
							display="flex"
							justifyContent="space-between"
							alignItems="flex-start"
							py={4}
						>
							{/* <Stack spacing={2} direction="row" justifyContent="space-between" alignItems="center"> */}
							<Button
								variant="contained"
								size="large"
								startIcon={<ChevronLeft />}
								onClick={() => {
									step !== 0 ? setStep(step - 1) : setStep(0)
								}}
								disabled={step === 0}
							>
								Previous
							</Button>
							<Button
								variant="contained"
								size="large"
								startIcon={<KeyboardReturn />}
								onClick={createPerson}
								disabled={step !== 3}
							>
								Submit
							</Button>
							<Button
								variant="contained"
								size="large"
								endIcon={<ChevronRight />}
								onClick={() => {
									step !== 3
										? setStep(step + 1)
										: setStep(step)
								}}
								disabled={step === 3}
							>
								Next
							</Button>
							{/* </Stack> */}
						</Box>
					</Grid>
				</Grid>
			</Box>
		</div>
	)
}

export default PastorAddEdit

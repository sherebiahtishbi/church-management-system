import { useState } from 'react'
import { Avatar, Box, Button, Grid, Stack, Typography } from "@mui/material"
import Personalnfo from "../common/Personalnfo"
import AddressInfo from "../common/AddressInfo"
import profileImage from "../../images/anu_profile.jpg"
import EducationInfo from '../common/EducationInfo'
import EmploymentInfo from '../common/EmploymentInfo'
import GraceStepper from '../common/GraceStepper'

const images = require.context('../../images', true);

function Pastor() {
  const [formData, setFormData] = useState({
    firstname: "Sherebiah",
    lastname: "Tisbi",
    gender: "",
    birthdate: "2005-08-23",
    nationalid: "",
    idtype: "",
    maritalstatus: "",
    marriagedt: new Date(),
    address1: "37, Washington Square Circle",
    address2: "",
    phone1: "",
    phone2: "",
    email: "",
    profileimage: "anu_profile.jpg",
    degree: "",
    school: "Gujarat University",
    degreetype: "",
    degreedoc: new Date(),
    joindate: new Date(),
    retiredate: new Date(),
    compensation: 0,
  })

  const [step, setStep] = useState(0)

  // console.log(formData)
  const entrysteps = ['Personal Info','Address Info','Educational Info','Employment Info']
  return (
    <div>
      <Typography variant="h6" sx={{ color: 'GrayText', pb:2 }}>Pastor</Typography>
      <GraceStepper steps={entrysteps} activeStep={step}/>
      <Box mt={3} pb={4}>
        <Grid container spacing={1}>
          <Grid container xs={12} md={2} xl={2} justifyContent="center" alignItems="center" display={'flex'}>
            <Avatar alt="Anugrah Tisbi" src={profileImage} 
              sx={{ xs: 12, width:'80%', height:'auto', boxShadow: 10}} />     
              {!formData.profileimage ?
                <Typography sx={{ xs:12 }}>Upload Photo</Typography> :
                <Typography sx={{ xs:12 }}>Change Photo</Typography>
              }
          </Grid>
          <Grid item xs={12} sm={12} md={10} xl={10} mt={2}>
            <Box sx={{height:{xl:400}, flexGrow:1}}>
              {step === 0 && <Personalnfo showheader formdata={formData} updater={setFormData} />}
              {step === 1 && <AddressInfo showheader formdata={formData} updater={setFormData} />}
              {step === 2 && <EducationInfo showheader formdata={formData} updater={setFormData} />}
              {step === 3 && <EmploymentInfo showheader formdata={formData} updater={setFormData} />}     
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
              <Stack spacing={2} direction="row">
                <Button variant="contained" onClick={() => {
                    step !== 0 ? setStep(step-1) : setStep(0)
                  }} disabled={step===0}>Previous</Button>
                <Button variant="contained" onClick={() => {
                  step !== 3 ? setStep(step+1) : setStep(step)
                }} disabled={step === 3}>Next</Button>
              </Stack>
            </Box>            
          </Grid>

        </Grid>
      </Box>
     </div>
  )
}

export default Pastor
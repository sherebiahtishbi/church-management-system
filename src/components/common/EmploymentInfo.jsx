import { Box, Grid, TextField, Typography } from "@mui/material"

function EmploymentInfo(props) {
    return (
        <Box mt={2}>
            {props.showheader &&
                <Typography variant="h5" pb={2}>{props.title ? props.title : "Employment Information"}</Typography>
            }
            <Grid container rowSpacing={2} columnSpacing={4}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="employername"
                        label="Employer name"
                        variant="standard"
                        value={props.formdata.employment.employername}
                        onChange={(e) => props.updater({
                            ...props.formdata,
                            employment: {
                                ...props.formdata.employment,
                                employername: e.target.value
                            }
                        })}
                    />
                </Grid>                
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="position"
                        label="Position/Title"
                        variant="standard"
                        value={props.formdata.employment.position}
                        onChange={(e) => props.updater({
                            ...props.formdata,
                            employment: {
                                ...props.formdata.employment,
                                position: e.target.value
                            }
                        })}
                    />
                </Grid>                
                <Grid item xs={12} sm={3}>
                    <TextField
                        fullWidth        
                        id="joindate"
                        label="Date of Joining"
                        type="date"
                        variant="standard"    
                        defaultValue={()=>{new Date()}}
                        value={props.formdata.employment.startdate}
                        onChange={
                            (e) => {
                                props.updater({
                                    ...props.formdata,
                                    employment: {
                                        ...props.formdata.employment,
                                        startdate: e.target.value
                                    }
                                })
                                console.log(e.target.value)
                            }
                        }
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        fullWidth
                        id="retiredate"
                        label="End Date"
                        variant="standard"
                        type="date"
                        defaultValue={()=>{new Date()}}
                        value={props.formdata.employment.enddate}
                        onChange={
                            (e) => {
                                props.updater({
                                    ...props.formdata,
                                    employment: {
                                        ...props.formdata.employment,
                                        enddate: e.target.value
                                    }
                                })
                                console.log(e.target.value)
                            }
                        }
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>     
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="compensation"
                        label="Compensation"
                        variant="standard"
                        type="number"
                        defaultValue={0}
                        value={props.formdata.employment.compensation}
                        onChange={(e) => props.updater({
                            ...props.formdata,
                            employment: {
                                ...props.formdata.employment,
                                compensation: e.target.value
                            }
                        })}
                    />
                </Grid>                
            </Grid>
        </Box>
    )
}

export default EmploymentInfo
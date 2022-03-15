import { Box, Grid, MenuItem, TextField, Typography } from "@mui/material"

function Personalnfo(props) {
    return ( 
        <Box mt={2}>
            {props.showheader &&
                <Typography variant="h5" pb={2}>{props.title ? props.title : "Personal Information"}</Typography>
            }
            <Grid container columnSpacing={4} rowSpacing={2} >
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="firstname"
                        value={props.formdata.firstname}
                        onChange={(e)=>props.updater({...props.formdata, firstname:e.target.value})}
                        label="Firstname"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="lastname"
                        value={props.formdata.lastname}
                        onChange={(e)=>props.updater({...props.formdata, lastname:e.target.value})}
                        label="Lastname"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        id="outlined-select-gender"
                        select
                        label="Gender"
                        variant="standard"                        
                        value={props.formdata.gender}
                        onChange={(e)=>props.updater({...props.formdata, gender:e.target.value})}
                        >
                        <MenuItem value="M">Male</MenuItem>
                        <MenuItem value="F">Female</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        id="outlined-select-marital"
                        select
                        label="Marital Status"
                        variant="standard"
                        value={props.formdata.maritalstatus}
                        onChange={(e)=>props.updater({...props.formdata, maritalstatus:e.target.value})}
                        >
                        <MenuItem value="M">Married</MenuItem>
                        <MenuItem value="S">Single</MenuItem>
                        <MenuItem value="D">Divorce</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        id="dt-dob"
                        label="Birthdate"
                        type="date"
                        variant="standard"
                        defaultValue={() => { new Date() }}
                        value={props.formdata.birthdate}
                        onChange={
                                (e) => {
                                props.updater({ ...props.formdata, birthdate: e.target.value })
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
                        fullWidth
                        id="outlined-id"
                        variant="standard"                        
                        value={props.formdata.nationalid}
                        onChange={(e)=>props.updater({...props.formdata, nationalid:e.target.value})}
                        label="ID"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="outlined-select-idtype"
                        select
                        label="Type Of ID"
                        variant="standard"                        
                        value={props.formdata.idtype}
                        onChange={(e)=>props.updater({...props.formdata, idtype:e.target.value})}
                        >
                        <MenuItem value="PAS">Passport</MenuItem>
                        <MenuItem value="DRL">Driving License</MenuItem>
                        <MenuItem value="OTH">Other</MenuItem>
                    </TextField>
                </Grid>                
            </Grid>
        </Box>
    )
}

export default Personalnfo
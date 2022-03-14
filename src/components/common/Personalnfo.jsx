import { Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"

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
                        variant="outlined"
                        sx={{ mt: 2 }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="lastname"
                        value={props.formdata.lastname}
                        onChange={(e)=>props.updater({...props.formdata, lastname:e.target.value})}
                        label="Lastname"
                        variant="outlined"
                        sx={{ mt: 2 }}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                            fullWidth
                            id="outlined-select-gender"
                            select
                            label="Gender"
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
                            value={props.formdata.maritalstatus}
                            onChange={(e)=>props.updater({...props.formdata, maritalstatus:e.target.value})}
                            >
                            <MenuItem value="M">Married</MenuItem>
                        <MenuItem value="F">Single</MenuItem>
                        <MenuItem value="F">Divorce</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                            fullWidth
                            id="dt-dob"
                            label="Birthdate"
                            type="date"
                            defaultValue={()=>{new Date()}}
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
                        value={props.formdata.nationalid}
                        onChange={(e)=>props.updater({...props.formdata, nationalid:e.target.value})}
                        label="ID"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                            fullWidth
                            id="outlined-select-idtype"
                            select
                            label="Type Of ID"
                            value={props.formdata.idtype}
                            onChange={(e)=>props.updater({...props.formdata, idtype:e.target.value})}
                            >
                            <MenuItem value="M">Passport</MenuItem>
                        <MenuItem value="F">Driving License</MenuItem>
                        <MenuItem value="F">Other</MenuItem>
                    </TextField>
                </Grid>                
            </Grid>
        </Box>
        // <Box mt={2}>
        //     {props.showheader && <Typography variant="h5" pb={2}>{props.title ? props.title : "Personal Information" }</Typography>}
        //     <Box>
        //         <TextField
        //             fullWidth
        //             id="firstname"
        //             value={props.formdata.firstname}
        //             onChange={(e)=>props.updater({...props.formdata, firstname:e.target.value})}
        //             label="Firstname"
        //             variant="outlined"
        //             sx={{ mt: 2 }}
        //         />
        //         <TextField
        //             fullWidth
        //             id="lastname"
        //             value={props.formdata.lastname}
        //             onChange={(e)=>props.updater({...props.formdata, lastname:e.target.value})}
        //             label="Lastname"
        //             variant="outlined"
        //             sx={{ mt: 2 }} />
        //     </Box>
        //     <Box>
        //         <FormControl sx={{ mt: 2, width: 225 }}>
        //             <InputLabel id="lbl-gender">Gender</InputLabel>
        //             <Select
        //                 labelId="lbl-gender"
        //                 id="select-gender"
        //                 value={props.formdata.gender}
        //                 onChange={(e)=>props.updater({...props.formdata, gender:e.target.value})}
        //                 label="Gender"
        //             >
        //                 <MenuItem value="M">Male</MenuItem>
        //                 <MenuItem value="F">Female</MenuItem>
        //             </Select>
        //         </FormControl>  
        //         <FormControl sx={{mt:2, ml:{xl:1}}}>
        //             <TextField
        //                 id="dt-dob"
        //                 label="Birthdate"
        //                 type="date"
        //                 defaultValue={()=>{new Date()}}
        //                 value={props.formdata.birthdate}
        //                 onChange={
        //                     (e) => {
        //                         props.updater({ ...props.formdata, birthdate: e.target.value })
        //                         console.log(e.target.value)
        //                     }
        //                 }
        //                 InputLabelProps={{
        //                     shrink: true,
        //                 }}
        //             />
        //         </FormControl>  
        //         <TextField
        //             id="nationalid"
        //             label="National Id"
        //             value={props.formdata.nationalid}
        //             onChange={(e)=>props.updater({...props.formdata, nationalid:e.target.value})}
        //             variant="outlined"
        //             sx={{ mt: 2, ml: { xl: 1 } }} />
        //         <FormControl sx={{ mt: 2, width: 225, ml: { xl: 2 } }}>
        //             <InputLabel id="lbl-id">Type of ID</InputLabel>
        //             <Select
        //                 labelId="lbl-id"
        //                 id="select-idtype"
        //                 value={props.formdata.idtype}
        //                 onChange={(e)=>props.updater({...props.formdata, idtype:e.target.value})}
        //                 label="Type of ID"
        //             >
        //                 <MenuItem value="P">Passport</MenuItem>
        //                 <MenuItem value="D">Driving License</MenuItem>
        //                 <MenuItem value="D">SSN</MenuItem>
        //                 <MenuItem value="D">Aadhar Card</MenuItem>
        //             </Select>
        //         </FormControl>  
        //         <FormControl sx={{ mt: 2, width: 225, ml: { xl: 2 } }}>
        //             <InputLabel id="lbl-maritalstatus">Marital status</InputLabel>
        //             <Select
        //                 labelId="lbl-maritalstatus"
        //                 id="select-maritalstatus"
        //                 value={props.formdata.maritalstatus}
        //                 onChange={(e)=>props.updater({...props.formdata, maritalstatus:e.target.value})}
        //                 label="Marital status"
        //             >
        //                 <MenuItem value="M">Married</MenuItem>
        //                 <MenuItem value="U">Unmarried</MenuItem>
        //                 <MenuItem value="S">Single</MenuItem>
        //                 <MenuItem value="D">Divorce</MenuItem>
        //             </Select>
        //         </FormControl>  
        //     </Box>
        // </Box>
    )
}

export default Personalnfo
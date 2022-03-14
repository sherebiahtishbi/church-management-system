import { Box, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"

function EducationInfo(props) {
    return (
        <Box mt={2}>
            {props.showheader && <Typography variant="h5" pb={2}>{props.title ? props.title : "Educational Info" }</Typography>}
            <div>
                <TextField
                    fullWidth
                    id="degree"
                    value={props.formdata.degree}
                    onChange={(e)=>props.updater({...props.formdata, degreee:e.target.value})}
                    label="Degree"
                    variant="outlined"
                    sx={{ mt: 1 }} />
                <TextField
                    fullWidth
                    id="school"
                    value={props.formdata.school}
                    onChange={(e)=>props.updater({...props.formdata, school:e.target.value})}
                    label="School/College/University"
                    variant="outlined"
                    sx={{ mt: 2}} />
            {/* </div> */}
            {/* <div> */}
                <FormControl sx={{ mt: 2, width: 225 }}>
                    <InputLabel id="lbl-degree">Degree Type</InputLabel>
                    <Select
                        labelId="lbl-degree"
                        id="select-degreetype"
                        value={props.formdata.degreetype}
                        onChange={(e)=>props.updater({...props.formdata, degreetype:e.target.value})}
                        label="Type of Degree"
                    >
                        <MenuItem value="M">Masters</MenuItem>
                        <MenuItem value="F">Bachelors</MenuItem>
                        <MenuItem value="F">Associate</MenuItem>
                        <MenuItem value="F">Diploma</MenuItem>
                        <MenuItem value="F">Certificate</MenuItem>
                    </Select>
                </FormControl>  
                <FormControl sx={{ mt: 2, ml: { xl: 1 }}}>
                    <TextField
                        id="dt-pass"
                        label="Date of Completion"
                        type="date"
                        defaultValue={()=>{new Date()}}
                        value={props.formdata.degreedoc}
                        onChange={(e)=>props.updater({...props.formdata, degreedoc:e.target.value})}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </FormControl>  
            </div>
        </Box>
    )
}

export default EducationInfo
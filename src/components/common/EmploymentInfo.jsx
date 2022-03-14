import { Box, FormControl, TextField, Typography } from "@mui/material"

function EmploymentInfo(props) {
    return (
        <Box mt={2}>
            {props.showheader && <Typography variant="h5" pb={2}>{props.title ? props.title : "Employment Information" }</Typography>}
            <div>
                <FormControl sx={{mt:2}}>
                    <TextField
                        id="joindate"
                        label="Date of Joining"
                        type="date"
                        defaultValue={()=>{new Date()}}
                        value={props.formdata.joindate}
                        onChange={
                            (e) => {
                                props.updater({ ...props.formdata, joindate: e.target.value })
                                console.log(e.target.value)
                            }
                        }
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </FormControl> 
                <FormControl sx={{ mt: 2, ml: { lg: 1 }}}>
                    <TextField
                        id="compensation"
                        label="Compensation"
                        type="number"
                        defaultValue={0}
                        value={props.formdata.compensation}
                        onChange={(e) => props.updater({ ...props.formdata, compensation: e.target.value })}
                    />
                </FormControl>  
            </div>
            <div>
                <FormControl sx={{ mt: 2}}>
                    <TextField
                        id="retiredate"
                        label="Retired Date"
                        type="date"
                        defaultValue={()=>{new Date()}}
                        value={props.formdata.retiredate}
                        onChange={
                            (e) => {
                                props.updater({ ...props.formdata, retiredate: e.target.value })
                                console.log(e.target.value)
                            }
                        }
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </FormControl> 
                {/* <TextField
                    id="retiredate"
                    type="date"
                    value={props.formdata.retiredate}
                    onChange={(e) => props.updater({ ...props.formdata, retiredate: e.target.value })}
                    label="Retired Date"
                    variant="outlined"
                    sx={{ mt: 1, ml: { lg: 1 } }} /> */}
            </div>
        </Box>
    )
}

export default EmploymentInfo
import { Box, Button, Grid, IconButton, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import axios from "axios"
import { DataGrid } from "@mui/x-data-grid"
import { Add } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"


const Pastorlist = () => {
    const navigate = useNavigate()
    const [pastors, setPastors] = useState([])

    useEffect(() => {
        const getPastors = async () => {
            try {
                const res = await axios.get("http://localhost:7501/persons?type=pastor")
                if (res.data) {
                    setPastors(res.data)
                }
            } catch (err) {
                console.log(err)
            }
        }
        getPastors()
    },[])

    const columns=[
        { field: "firstname", headerName: "Firstname", width: 200 },
        { field: "lastname", headerName: "Lastname", width: 200}
    ]

    return (
        <Box>
            <Grid container>
                <Grid container xs={12} justifyContent="space-between">
                    <Grid item xs={12} md={6} justifyContent="start">
                        <Typography variant="h6" color="GrayText">Pastors</Typography>
                    </Grid>
                    <Grid item xs={12} md={6} justifyContent="end">
                        <Button startIcon={<Add/>} onClick={()=>{navigate("/church/pastor/add")}} >Add New</Button>
                    </Grid>
                </Grid>
                <Grid item xs={12} height={400} mt={2}>
                    <DataGrid
                        rows={pastors}
                        columns={columns}
                        getRowId={(row)=>row._id}
                        pageSize={5}
                    />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Pastorlist
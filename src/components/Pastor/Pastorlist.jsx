import { Box, Grid, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import axios from "axios"
import { DataGrid } from "@mui/x-data-grid"

const Pastorlist = () => {
    const [pastors, setPastors] = useState(null)
    const [columns, setColumns] = useState([])
    const [rows, setRows] = useState([])


    useEffect(() => {
        const getPastors = async () => {
            try {
                const res = await axios.get("http://localhost:7501/persons?type=pastor")
                console.log(res.data)
                if (res.data) {
                    setPastors(res.data)

                    setColumns([
                        { field: "id", headerName: "#", width: 90 },
                        { field: "firstname", headerName: "Firstname", width: 90 },
                        { field: "lastname", headerName: "Lastname", width: 90 },
                    ])

                    let mrows = []

                    res.data.forEach((person,index) => {
                        console.log(person)
                        mrows.push({ id: index, firstname: person.firstname, lastname: person.lastname })
                    })
                    setRows(mrows)

                    console.log(columns)
                    console.log(rows)

                }
            } catch (err) {
                console.log(err)
            }
        }
        pastors === null && getPastors()
    })
    
    return (
        <Box mt={2}>
            <Grid container>
                <Grid item>
                    controls
                </Grid>
                <Grid item>
                    {/* pastors
                    ? <DataGrid>
                        rows={pastors.rows}
                        columns={pastors.columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        disableSelectionOnClick
                    </DataGrid>
                    : <Typography variant="h6" >No pastor for this church yet!</Typography> */}
                </Grid>
            </Grid>
        </Box>
    )
}

export default Pastorlist
import { Password } from "@mui/icons-material"
import { Button, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useNavigate } from "react-router-dom"

function Login() {
    
    let navigate = useNavigate()

    return (
        <Box height={400} width={200} sx={{ boxShadow:4, mt:20, ml: 25, p:15 }} >
            <Typography variant="h6" sx={{ color: 'GrayText' }}>Login</Typography>
            <div>
                <label>Username</label>
                <input/>
            </div>
            <div>
                <label>Password</label>
                <input type={Password} />
            </div>
            <Button onClick={() => { 
                    navigate("/churches")
                }}>
                Login
            </Button>
        </Box>

    )
}

export default Login
import { Password } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();

  return (
    <Box height={400} width={200} boxShadow={4} mt={15} ml={10} p={5}>
      <Grid container xs={12}>
        <Grid item xs={12}>
          <Typography variant="h6" color="GrayText">
            Login
          </Typography>
        </Grid>
        <Grid item xs={12} mt={2}>
          <TextField
            id="username"
            label="Username"
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} mt={2}>
          <TextField
            id="accountpwd"
            label="Password"
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} mt={4}>
          <Button
            onClick={() => {
              navigate("/churches");
            }}
          >
            Login
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={() => {
              navigate("/accounts");
            }}
          >
            Register
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Login;

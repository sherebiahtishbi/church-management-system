import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const accountobject = {
    accountname: "",
    password: "",
  };
  const navigate = useNavigate();
  const [formData, setFormData] = useState(accountobject);

  const handleCreateAccount = async () => {
    try {
      const res = await axios.post(
        "http://localhost:7501/accounts/save",
        formData
      );
      if (res.data) {
        setFormData(accountobject);
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box sx={{ mt: { xs: 10, lg: 20 } }}>
      <Box m="auto" maxWidth={"lg"} p={10} boxShadow={3}>
        <Grid container xs={12} lg={6}>
          Form
        </Grid>
        <Grid container xs={12} lg={6}>
          Image
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography variant="h3" color="GrayText">
            New Account
          </Typography>
        </Grid>
        <Grid container xs={12} mt={2}>
          <Grid item xs={12}>
            <TextField
              id="accountname"
              label="Account name"
              variant="standard"
              value={formData.accountname}
              onChange={(e) =>
                setFormData({ ...formData, accountname: e.target.value })
              }
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} mt={2}>
            <TextField
              id="password"
              label="Password"
              variant="standard"
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container mt={4}>
          <Grid item xs={12} md={2}>
            <Button onClick={handleCreateAccount}>Create Account</Button>
          </Grid>
          <Grid item xs={12} md={2}>
            <Button onClick={() => navigate("/")}>Login</Button>
          </Grid>
        </Grid>
        {/* </Grid> */}
      </Box>
    </Box>
  );
};

export default Register;

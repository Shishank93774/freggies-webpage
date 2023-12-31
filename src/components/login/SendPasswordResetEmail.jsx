import { TextField, Button, Box, Alert, Grid } from "@mui/material";

import { useState } from "react";
import axios from "axios";

const SendPasswordResetEmail = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData(e.currentTarget);
      const actualData = {
        email: data.get("email"),
      };
      console.log(actualData);
      if (actualData.email) {
        // console.log(actualData);
        const resp = await axios.post(
          "http://localhost:3001/api/users/forgot-password",
          {
            email: actualData.email,
          }
        );
        console.log(resp.data.link);
        // document.getElementById("password-reset-email-form").reset();
        setError({
          status: true,
          msg: "Password Reset Email Sent. Check your Email!",
          type: "success",
        });
      } else {
        setError({
          status: true,
          msg: "Please provide valid Email.",
          type: "error",
        });
      }
    } catch (err) {
      alert("No User of this email exists");
      document.getElementById("password-reset-email-form").reset();
      console.log(err);
    }
  };
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item sm={6} xs={12}>
          <h1>Reset Password</h1>
          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
            id="password-reset-email-form"
            onSubmit={handleSubmit}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              label="Email Address"
            />

            <Box textAlign="center">
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, px: 5 }}
              >
                {" "}
                Send{" "}
              </Button>
            </Box>

            {error.status ? (
              <Alert severity={error.type}>{error.msg}</Alert>
            ) : (
              ""
            )}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default SendPasswordResetEmail;

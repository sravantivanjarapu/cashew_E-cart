import React, { useState } from "react";
import API from "../api";
import { toast } from "react-toastify";
import { Container, TextField, Button, Typography, Box } from "@mui/material";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("accounts/login/", credentials);
;
      localStorage.setItem("token", res.data.access);
      toast.success("Logged in successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Login failed!");
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 8 }}>
      <Typography variant="h5" textAlign="center" gutterBottom color="success.main">
        Login
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          name="email"
          label="Email"
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          name="password"
          label="Password"
          type="password"
          onChange={handleChange}
          required
        />
        <Button
          fullWidth
          variant="contained"
          type="submit"
          sx={{ mt: 2, backgroundColor: "success.main" }}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Login;

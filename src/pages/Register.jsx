import React, { useState } from "react";
import API from "../api";
import { toast } from "react-toastify";
import { Container, TextField, Button, Typography, Box } from "@mui/material";

const Register = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     await API.post("accounts/register/", formData);

      toast.success("Registered successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Registration failed!");
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 8 }}>
      <Typography variant="h5" textAlign="center" gutterBottom color="success.main">
        Register
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          name="username"
          label="Username"
          onChange={handleChange}
          required
        />
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
          Register
        </Button>
      </Box>
    </Container>
  );
};

export default Register;

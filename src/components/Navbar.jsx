import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setUser({ name: "Savitri" }); // example placeholder
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#388e3c", boxShadow: 3 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left Logo */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Cashew E-Cart
        </Typography>

        {/* Center Navigation */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/cart">
            Cart
          </Button>
        </Box>

        {/* Right Auth Buttons */}
        <Box>
          {!user ? (
            <>
              <Button
                color="inherit"
                component={Link}
                to="/login"
                sx={{ textTransform: "none" }}
              >
                Login
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/register"
                sx={{
                  border: "1px solid white",
                  borderRadius: 2,
                  textTransform: "none",
                  ml: 1,
                }}
              >
                Register
              </Button>
            </>
          ) : (
            <Button
              color="inherit"
              onClick={handleLogout}
              sx={{
                border: "1px solid white",
                borderRadius: 2,
                textTransform: "none",
              }}
            >
              Logout ({user.name})
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

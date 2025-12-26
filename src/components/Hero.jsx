import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Hero = () => {
  return (
    <Box
      sx={{
        height: "90vh",
        backgroundImage: " url('/hero.avif')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "white",
        px: 2,
        position: "relative",
      }}
    >
      {/* Optional overlay for better text visibility */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(78, 14, 14, 0.4)",
          zIndex: 1,
        }}
      />

      {/* Hero content */}
      <Box sx={{ zIndex: 2, maxWidth: "800px" }}>
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
            mb: 2,
            textShadow: "2px 2px 6px rgba(14, 9, 9, 0.5)",
            fontSize: { xs: "2rem", md: "3.5rem" },
          }}
        >
          Fresh Organic Cashews
        </Typography>

        <Typography
          variant="h6"
          sx={{
            mb: 3,
            textShadow: "1px 1px 4px rgba(0,0,0,0.4)",
            fontSize: { xs: "1rem", md: "1.3rem" },
          }}
        >
          Directly from our village factory — pure, crunchy, and full of flavor.
        </Typography>

        <Button
          variant="contained"
          color="success"
          size="large"
          href="#products"
          sx={{
            px: 4,
            py: 1.5,
            borderRadius: "30px",
            fontWeight: "bold",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          }}
        >
          Shop Now
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;

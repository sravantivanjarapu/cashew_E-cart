import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1b5e20",
        color: "white",
        textAlign: "center",
        py: 3,
        mt: 4,
      }}
    >
      <Typography variant="h6">Cashew Store</Typography>
      <Typography variant="body2">
        From Our Village Factory to Your Home — 100% Pure and Organic
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        © {new Date().getFullYear()} Cashew Store | All Rights Reserved
      </Typography>
    </Box>
  );
};

export default Footer;

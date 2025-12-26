import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
  Box,
} from "@mui/material";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <Card
      sx={{
        width: 280,
        height: 400,
        borderRadius: 3,
        boxShadow: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: 6,
        },
      }}
    >
      {/* Product Image */}
      <CardMedia
        component="img"
        image={product.image}
        alt={product.name}
        sx={{
          height: 180,
          objectFit: "cover",
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        }}
      />

      {/* Content */}
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ mb: 0.5, textAlign: "center" }}
          >
            {product.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mb: 1,
              minHeight: 40, // keeps text height consistent
              textAlign: "center",
            }}
          >
            {product.description}
          </Typography>
        </Box>

        <Typography
          variant="subtitle1"
          color="success.main"
          fontWeight="bold"
          textAlign="center"
        >
          ₹{product.price}
        </Typography>
      </CardContent>

      {/* Add to Cart Button */}
      <CardActions sx={{ p: 2 }}>
        <Button
          fullWidth
          variant="contained"
          color="success"
          onClick={() => onAddToCart(product)}
          sx={{
            borderRadius: 2,
            fontWeight: "bold",
            py: 1,
          }}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;

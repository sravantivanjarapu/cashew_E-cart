import React, { useState, useEffect } from "react";
import { Container, Grid, Typography, Box, Button } from "@mui/material";
import API from "../api";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import Hero from "../components/Hero";


const Home = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("products/")
      .then((res) => setProducts(res.data))
      .catch(() =>
        setProducts([
          {
            id: 1,
            name: "Premium Cashew 500g",
            description: "Crisp and organic cashews from our village farm.",
            price: 450,
            image: "/cashew1.jpg",
          },
          {
            id: 2,
            name: "Roasted Cashew 250g",
            description: "Lightly salted, crunchy, and delicious.",
            price: 250,
            image: "/cashew2.jpg",
          },
          {
            id: 3,
            name: "Broken Cashew 1kg",
            description: "Perfect for sweets and baking.",
            price: 600,
            image: "/cashew3.jpg",
          },
        ])
      );
  }, []);

  const addToCart = (product) => {
    const exists = cart.find((p) => p.id === product.id);
    if (exists) {
      setCart(
        cart.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <>
     <>
  <Hero />

</>


      {/* 🛍️ Products Section */}
      <Container id="products" sx={{ mt: 8, mb: 10 }}>
        <Typography
          variant="h4"
          gutterBottom
          color="success.main"
          textAlign="center"
        >
          🛍️ Our Cashew Products
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {products.map((product) => (
            <Grid item key={product.id}>
              <ProductCard product={product} onAddToCart={addToCart} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* 🌰 Footer */}
      <Footer />
    </>
  );
};

export default Home;

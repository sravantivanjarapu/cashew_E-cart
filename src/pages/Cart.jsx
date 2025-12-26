import React from "react";
import { Container, Typography, Button, Card, CardContent, Box } from "@mui/material";

const Cart = ({ cart, setCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <Container sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom color="success.main">
        🛒 Your Cart
      </Typography>

      {cart.length === 0 ? (
        <Typography color="text.secondary">Your cart is empty.</Typography>
      ) : (
        <>
          {cart.map((item) => (
            <Card key={item.id} sx={{ mb: 2, boxShadow: 2 }}>
              <CardContent sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Box>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography color="text.secondary">
                    ₹{item.price} × {item.quantity}
                  </Typography>
                </Box>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => removeItem(item.id)} // ✅ fixed here
                >
                  Remove
                </Button>
              </CardContent>
            </Card>
          ))}
          <Typography variant="h6" sx={{ mt: 2 }}>
            Total: ₹{total.toFixed(2)}
          </Typography>
          <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              color="success"
              sx={{ flex: 1 }}
              onClick={() => alert("Proceeding to checkout...")}
            >
              Checkout
            </Button>
            <Button
              variant="outlined"
              color="error"
              sx={{ flex: 1 }}
              onClick={clearCart}
            >
              Clear Cart
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
};

export default Cart;

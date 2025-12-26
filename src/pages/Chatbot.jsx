import React, { useState } from "react";
import API from "../api";
import { Container, Typography, TextField, Button, Box, Paper } from "@mui/material";

const Chatbot = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const askBot = async () => {
    if (!question) return;
    try {
      const res = await API.post("chatbot/ask/", { message: question });
      setAnswer(res.data.reply);
    } catch (err) {
      console.error(err);
      setAnswer("Error connecting to chatbot.");
    }
  };

  return (
    <Container sx={{ mt: 8, textAlign: "center" }}>
      <Typography variant="h5" color="success.main" gutterBottom>
        Ask Me...
      </Typography>
      <Box display="flex" justifyContent="center" gap={2} mt={2}>
        <TextField
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask about cashews..."
          sx={{ width: "50%" }}
        />
        <Button variant="contained" onClick={askBot} sx={{ backgroundColor: "success.main" }}>
          Ask
        </Button>
      </Box>
      {answer && (
        <Paper sx={{ mt: 4, p: 3, textAlign: "left", backgroundColor: "#f1f8e9" }}>
          <Typography variant="subtitle1"><strong>Bot:</strong> {answer}</Typography>
        </Paper>
      )}
    </Container>
  );
};

export default Chatbot;

import React, { useState } from "react";
import { Box, IconButton, TextField, Typography, Paper } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";

const ChatbotPopup = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleChat = () => setOpen(!open);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);
    setInput("");

    // simple bot reply (placeholder)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Hi! I'm your Cashew Assistant. How can I help?" },
      ]);
    }, 600);
  };

  return (
    <Box>
      {/* Floating Chat Button */}
      <IconButton
        onClick={toggleChat}
        sx={{
          position: "fixed",
          bottom: 30,
          right: 30,
          backgroundColor: "#2e7d32",
          color: "white",
          boxShadow: 4,
          "&:hover": { backgroundColor: "#1b5e20" },
          zIndex: 1000,
        }}
      >
        {open ? <CloseIcon /> : <ChatIcon />}
      </IconButton>

      {/* Chat Popup Window */}
      {open && (
        <Paper
          elevation={6}
          sx={{
            position: "fixed",
            bottom: 90,
            right: 30,
            width: 320,
            height: 420,
            borderRadius: 3,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            zIndex: 1000,
          }}
        >
          {/* Header */}
          <Box sx={{ backgroundColor: "#2e7d32", color: "white", p: 1.5 }}>
            <Typography variant="subtitle1" fontWeight="bold">
              💬 Cashew Chatbot
            </Typography>
          </Box>

          {/* Messages Section */}
          <Box
            sx={{
              flex: 1,
              p: 2,
              overflowY: "auto",
              backgroundColor: "#f1f8e9",
            }}
          >
            {messages.map((msg, i) => (
              <Typography
                key={i}
                align={msg.sender === "user" ? "right" : "left"}
                sx={{
                  backgroundColor:
                    msg.sender === "user" ? "#a5d6a7" : "#e8f5e9",
                  display: "inline-block",
                  borderRadius: 2,
                  p: 1,
                  mb: 1,
                  maxWidth: "80%",
                }}
              >
                {msg.text}
              </Typography>
            ))}
          </Box>

          {/* Input Section */}
          <Box sx={{ display: "flex", p: 1, borderTop: "1px solid #ddd" }}>
            <TextField
              fullWidth
              size="small"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <IconButton
              onClick={handleSend}
              sx={{ color: "#2e7d32", ml: 1 }}
            >
              <SendIcon />
            </IconButton>
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default ChatbotPopup;

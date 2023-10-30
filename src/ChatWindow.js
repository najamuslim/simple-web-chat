import React from "react";
import { Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";

function ChatWindow() {
  const messages = useSelector((state) => state.messages);
  return (
    <Paper
      style={{
        padding: "20px",
        marginTop: "20px",
        height: "60vh",
        overflowY: "auto",
      }}
    >
      <Typography variant="h6">Welcome, user!</Typography>
      {messages.map((message, index) => (
        <div key={index}>
          {message.user}: {message.text}
        </div>
      ))}
    </Paper>
  );
}

export default ChatWindow;

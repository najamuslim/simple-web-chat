import React from "react";
import { Paper, Typography } from "@mui/material";

function ChatWindow() {
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
    </Paper>
  );
}

export default ChatWindow;

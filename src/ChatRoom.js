import React from "react";
import { Container, Paper } from "@mui/material";

function ChatRoom() {
  return (
    <Container component="main" maxWidth="sm">
      <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
        "This is Chat Room"
      </Paper>
    </Container>
  );
}

export default ChatRoom;

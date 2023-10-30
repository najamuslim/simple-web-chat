import React from "react";
import { Container, Paper } from "@mui/material";
import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";

function ChatRoom() {
  return (
    <Container component="main" maxWidth="sm">
      <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
        <ChatWindow />
        <ChatInput />
      </Paper>
    </Container>
  );
}

export default ChatRoom;

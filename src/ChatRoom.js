import React, { useState } from "react";
import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";
import { Container, Paper, Typography } from "@mui/material";
import { Provider } from "react-redux";
import store from "./redux/store";
import { useSelector } from "react-redux";

function ChatRoom() {
  const user = useSelector((state) => state.user);
  const [username, setUsername] = useState(user);

  if (!user) {
    return (
      <Container component="main" maxWidth="sm">
        <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
          <Typography variant="h5">Enter Your Username:</Typography>
          <ChatInput setUsername={setUsername} />
        </Paper>
      </Container>
    );
  }

  return (
    <Provider store={store}>
      <Container component="main" maxWidth="sm">
        <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
          <ChatWindow username={username} />
          <ChatInput username={username} />
        </Paper>
      </Container>
    </Provider>
  );
}

export default ChatRoom;

import React from "react";
import { useSelector } from "react-redux";
import { Paper, Typography, Avatar } from "@mui/material";

function ChatWindow({ username }) {
  const messages = useSelector((state) => state.messages);
  const user = useSelector((state) => state.user);

  const isCurrentUser = (messageUser) => username && messageUser === username;
  return (
    <Paper
      style={{
        padding: "20px",
        marginTop: "20px",
        height: "60vh",
        overflowY: "auto",
      }}
    >
      <Typography variant="h6">Welcome, {user}!</Typography>
      {messages.map((message, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: isCurrentUser(message.user)
              ? "flex-end"
              : "flex-start",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          {!isCurrentUser(message.user) && (
            <Avatar style={{ marginRight: "10px" }}>
              {message.user?.charAt(0)}
            </Avatar>
          )}
          <div
            style={{
              backgroundColor: isCurrentUser(message.user)
                ? "#e0e0e0"
                : "#f5f5f5",
              padding: "10px",
              borderRadius: "8px",
              maxWidth: "70%",
            }}
          >
            <Typography
              variant="subtitle1"
              style={{ fontWeight: "bold", marginBottom: "5px" }}
            >
              {message.user}
            </Typography>
            <Typography variant="body1">{message.text}</Typography>
          </div>
        </div>
      ))}
    </Paper>
  );
}

export default ChatWindow;

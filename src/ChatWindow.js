import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Paper, Button, Typography, Avatar } from "@mui/material";
import { useScroll } from "./hooks";

function ChatWindow({ username }) {
  const pageSize = 25;
  const [visibleMessages, setVisibleMessages] = useState(pageSize);
  const messages = useSelector((state) => state.messages);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  useScroll(() => {
    const isAtTop = window.scrollY === 0;

    if (isAtTop) {
      setVisibleMessages((prev) => Math.min(prev + pageSize, messages.length));
    }
  });

  const handleLoadMore = () => {
    const nextVisibleMessages = visibleMessages + pageSize;
    setVisibleMessages(Math.min(nextVisibleMessages, messages.length));
  };

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
      {visibleMessages < messages.length && (
        <Button
          data-testid="load-more-button"
          variant="contained"
          color="primary"
          onClick={handleLoadMore}
          style={{ marginBottom: "10px" }}
        >
          Load More
        </Button>
      )}
      {messages
        .slice(messages.length - visibleMessages, messages.length)
        .map((message, index) => (
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

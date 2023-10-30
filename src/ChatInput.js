import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addMessage, setUser } from "./redux/actions";

function ChatInput({ setUsername, username }) {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!input) return;
    if (!username) {
      dispatch(setUser(input));
      setUsername(input);
    } else {
      dispatch(addMessage({ user: username, text: input }));
    }
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        label={!username ? "Enter your username" : "Type a message..."}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSubmit}
        style={{ marginTop: "10px" }}
      >
        {username ? "Send" : "Set Username"}
      </Button>
    </div>
  );
}

export default ChatInput;

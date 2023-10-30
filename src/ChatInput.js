import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addMessage } from "./redux/actions";

function ChatInput() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!input) return;
    dispatch(addMessage({ user: "User", text: input }));
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
        label={"Type a message..."}
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
        Send
      </Button>
    </div>
  );
}

export default ChatInput;

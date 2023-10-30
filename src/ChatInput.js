import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

function ChatInput() {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    console.log("sending message");
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

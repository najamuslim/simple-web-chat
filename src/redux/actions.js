export const addMessage = (message) => {
  return {
    type: "ADD_MESSAGE",
    payload: message,
  };
};

export const setMessages = (messages) => {
  return {
    type: "SET_MESSAGES",
    payload: messages,
  };
};

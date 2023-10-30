export const addMessage = (message) => {
  return {
    type: "ADD_MESSAGE",
    payload: message,
  };
};

export const setUser = (username) => {
  return {
    type: "SET_USER",
    payload: username,
  };
};

export const setMessages = (messages) => {
  return {
    type: "SET_MESSAGES",
    payload: messages,
  };
};

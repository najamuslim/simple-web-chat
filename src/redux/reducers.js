const storedMessages = JSON.parse(localStorage.getItem("chatMessages"));

const initialState = {
  messages: storedMessages || [],
  user: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      const newMessages = [...state.messages, action.payload];
      localStorage.setItem("chatMessages", JSON.stringify(newMessages));
      return { ...state, messages: newMessages };
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_MESSAGES":
      return { ...state, messages: action.payload };
    default:
      return state;
  }
};

export default rootReducer;

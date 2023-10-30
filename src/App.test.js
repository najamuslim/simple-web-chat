import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";

jest.mock("./hooks", () => ({
  useScroll: jest.fn(),
}));

const initialState = {
  messages: [
    { user: "User1", text: "Message 1" },
    { user: "User2", text: "Message 2" },
  ],
  user: "TestUser",
};

const mockStore = configureStore();
let store;

beforeEach(() => {
  store = mockStore(initialState);
});

test("renders welcome message with username", () => {
  render(
    <Provider store={store}>
      <ChatWindow username="TestUser" />
    </Provider>
  );

  const welcomeMessage = screen.getByText("Welcome, TestUser!");
  expect(welcomeMessage).toBeInTheDocument();
});

test("renders messages correctly", () => {
  render(
    <Provider store={store}>
      <ChatWindow username="TestUser" />
    </Provider>
  );

  const message1 = screen.getByText("Message 1");
  const message2 = screen.getByText("Message 2");

  expect(message1).toBeInTheDocument();
  expect(message2).toBeInTheDocument();
});

test("adds a new message on send button click", () => {
  const store = mockStore({ user: "TestUser" });

  render(
    <Provider store={store}>
      <ChatInput username="TestUser" />
    </Provider>
  );

  const messageInput = screen.getByLabelText(/Type a message.../i);
  const sendButton = screen.getByText(/Send/i);

  // Type a message into the input
  fireEvent.change(messageInput, { target: { value: "Hello, World!" } });

  // Click the "Send" button
  fireEvent.click(sendButton);

  // Expecting a new message to be added in the Redux store
  const expectedAction = {
    type: "ADD_MESSAGE",
    payload: { user: "TestUser", text: "Hello, World!" },
  };
  expect(store.getActions()).toContainEqual(expectedAction);
});

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

let input;
let emojiList;
describe("Emoji test", () => {
  beforeEach(() => {
    render(<App />);
    input = screen.getByPlaceholderText("Search for an emoji");
    emojiList = screen.getAllByText("Click to copy emoji");
  });

  test("should render and be 20 emojis", () => {
    expect(emojiList.length).toEqual(20);
  });

  test("should filter emojis depending on the input", () => {
    userEvent.type(input, "100");
    expect(screen.getAllByText("Click to copy emoji").length).toEqual(1);
  });

  test("should copy the emoji", () => {
    userEvent.click(emojiList[0]);
  });
});

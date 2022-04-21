import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header test ", () => {
  test("Header must render correctly", () => {
    render(<Header />);
    const title = screen.getByText(/Emoji Search/i);
    expect(title.toBeInDocument);
  });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("render app", () => {
  render(<App />);
  const commentLabel = screen.getByText(/comment box/i);
  expect(commentLabel).toBeInTheDocument();
});

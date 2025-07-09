import React from "react";
import { render, screen } from "@testing-library/react";
import Counter from "./counter";
import user from "@testing-library/user-event";

describe("test counter component", () => {
  test("rendered component correctly", () => {
    render(<Counter />);
    const header = screen.getByRole("heading");
    expect(header).toBeInTheDocument();

    const button = screen.getByRole("button", { name: /increment/i });
    expect(button).toBeInTheDocument();
  });

  test("render count to zero", () => {
    render(<Counter />);
    const count = screen.getByRole("heading", { level: 1 });
    expect(count).toHaveTextContent("0");
  });

  test("click on increment should update count", async () => {
    user.setup();
    render(<Counter />);
    const button = screen.getByRole("button", { name: /increment/i });
    await user.click(button);

    const count = screen.getByRole("heading");
    expect(count).toHaveTextContent("1");
  });

  test("click on decrement button", async () => {
    user.setup();
    render(<Counter />);

    const decrement = screen.getByRole("button", { name: /decrement/i });
    expect(decrement).toBeInTheDocument();

    await user.click(decrement);

    const count = screen.getByRole("heading", { level: 1 });
    expect(count).toHaveTextContent("-1");
  });

  test("set Count by updating the input", async () => {
    user.setup();
    render(<Counter />);

    const input = screen.getByRole("spinbutton");
    const set = screen.getByRole("button", { name: /set/i });
    const decrement = screen.getByRole("button", { name: /decrement/i });

    const label = screen.getByRole("heading");

    expect(input).toBeInTheDocument();

    await user.type(input, "10");
    await user.click(set);

    expect(label).toHaveTextContent("10");

    await user.click(decrement);
    expect(label).toHaveTextContent("9");
  });

  test("element should have correct focus on tab click", async () => {
    user.setup();
    render(<Counter />);

    const input = screen.getByRole("spinbutton");
    const increment = screen.getByRole("button", { name: /increment/i });
    const decrement = screen.getByRole("button", { name: /decrement/i });
    const set = screen.getByRole("button", { name: /set/i });

    await user.tab();
    expect(input).toHaveFocus();

    await user.tab();
    expect(increment).toHaveFocus();

    await user.tab();
    expect(decrement).toHaveFocus();

    await user.tab();
    expect(set).toHaveFocus();
  });
});

import { render, screen } from "@testing-library/react";
import React from "react";
import Skills from "./skills";
import user from "@testing-library/user-event";

describe("render the skills component", () => {
  const skills = ["js", "html", "css"];

  test("render the list", () => {
    render(<Skills skills={skills} />);
    const skillList = screen.getByRole("list");
    expect(skillList).toBeInTheDocument();
  });

  test("list should have correct length", () => {
    render(<Skills skills={skills} />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(skills.length);
  });

  test("render List title", () => {
    render(<Skills />);
    const list = screen.getByText((content) => content.startsWith("List"));
    expect(list).toBeInTheDocument();
  });

  test("button should not be in the document", () => {
    render(<Skills skills={skills} />);
    const button = screen.queryByRole("button", {
      name: "submit",
    });
    expect(button).not.toBeInTheDocument();
  });

  test("logout button should be present", async () => {
    render(<Skills skills={skills} />);
    const button = await screen.findByRole("button", { name: /logout/i });
    expect(button).toBeInTheDocument();
  });

  test("profile button should be rendered", async () => {
    render(<Skills />);
    const profileBtn = await screen.findByRole(
      "button",
      { name: /Profile/i },
      { timeout: 1500 }
    );
    expect(profileBtn).toBeInTheDocument();
  });

  test("set value and clear from textbox", async () => {
    user.setup();
    render(<Skills />);

    const renderText = screen.getByRole("textbox");
    await user.type(renderText, "hello deepak");
    expect(renderText).toHaveValue("hello deepak");

    await user.clear(renderText);
    expect(renderText).toHaveValue("");
  });

  test("select multiselect items", async () => {
    user.setup();
    render(<Skills />);

    const select = screen.getByRole("listbox"); // assumes <select multiple>

    // Select by option values
    await user.selectOptions(select, ["1", "2"]); // assuming options with value="1" and value="2"

    const optionA = screen.getByRole("option", { name: "A" });
    const optionB = screen.getByRole("option", { name: "B" });

    expect(optionA.selected).toBe(true);
    expect(optionB.selected).toBe(true);
  });
});

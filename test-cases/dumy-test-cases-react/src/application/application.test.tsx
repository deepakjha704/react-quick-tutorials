import React from "react";
import { render, screen } from "@testing-library/react";
import Application from "./Application";
import App from "../App";

describe.skip("test Application Component", () => {
  test("textbox should be Rendered", () => {
    render(<Application />);
    const compName = screen.getByRole("textbox", { name: /name/i });
    expect(compName).toBeInTheDocument();
  });

  test("Job Location Comp Rendered", () => {
    render(<Application />);
    const jobLocationComp = screen.getByRole("combobox");
    expect(jobLocationComp).toBeInTheDocument();
  });

  test("checkbox should be rendered", () => {
    render(<Application />);
    const renderedCheckbox = screen.getByRole("checkbox");
    expect(renderedCheckbox).toBeInTheDocument();
  });

  test("submit button should be rendered", () => {
    render(<Application />);
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
  });

  test("textarea should be rendered", () => {
    render(<Application />);
    const textBoxElement = screen.getByRole("textbox", { name: /name/i });

    expect(textBoxElement).toBeInTheDocument();
    const textAreaBio = screen.getByRole("textbox", { name: /bio/i });
    expect(textAreaBio).toBeInTheDocument();
  });

  test("heading should be rendered", () => {
    render(<Application />);
    const heading = screen.getByRole("heading", {
      level: 1,
    });
    expect(heading).toBeInTheDocument();

    const heading2 = screen.getByRole("heading", { level: 2 });
    expect(heading2).toBeInTheDocument();
  });

  test("find element by level", () => {
    render(<Application />);
    const findByLevel = screen.getByLabelText(/name/i, { selector: "input" });
    expect(findByLevel).toBeInTheDocument();

    // Use the correct label and selector for combobox (Job location)
    // const findByCombobox = screen.getByLabelText(/job location/i, {
    //   selector: "select",
    // });
    // expect(findByCombobox).toBeInTheDocument();

    const findTerms = screen.getByLabelText(
      /i agree to the terms and conditions/i
    );
    expect(findTerms).toBeInTheDocument();
  });

  test("placeholder should be rendered", () => {
    render(<Application />);
    const fullname = screen.getByPlaceholderText(/full name/i);
    expect(fullname).toBeInTheDocument();
  });

  test("render all elements by display value", () => {
    render(<Application />);
    const displayName = screen.getByDisplayValue(/deepak/i);
    expect(displayName).toBeInTheDocument();
  });

  test("render element by altText", () => {
    render(<Application />);
    const personWithLaptop = screen.getByAltText(/person with alt text/i);
    expect(personWithLaptop).toBeInTheDocument();
  });

  test("render element by title", () => {
    render(<Application />);
    const findTitle = screen.getByTitle(/taksh/i);
    expect(findTitle).toBeInTheDocument();
  });

  test("render custom test-id", () => {
    render(<Application />);
    const customTestId = screen.getByTestId("custom-element");
    expect(customTestId).toBeInTheDocument();
  });
});

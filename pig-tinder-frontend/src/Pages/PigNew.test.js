import { render, screen } from "@testing-library/react";
import PigNew from "./PigNew";
import { BrowserRouter } from "react-router-dom";

describe("<PigNew />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <PigNew />
      </BrowserRouter>
    );
  });
  it("renders the PigNew page for user", () => {
    const element = screen.getByText(/Create a new pig/i);
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent("Create a new pig");
  });

  it("has a form with entries for name, age, enjoys, and image", () => {
    const formName = screen.getByText(/name/i);
    // screen.debug(formName)
    expect(formName.getAttribute("For")).toEqual("name");

    const formAge = screen.getByText("Breed");
    expect(formAge.getAttribute("For")).toEqual("breed");

    const formEnjoys = screen.getByText("Habits");
    expect(formEnjoys.getAttribute("For")).toEqual("habits");

    const formImage = screen.getByText("Image");
    expect(formImage.getAttribute("For")).toEqual("image");
  });
});

import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Header from "./Header";

describe("<Header />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      div
    );
  });
  it("has clickable links", () => {
    const div = document.createElement("div");
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      div
    );
    userEvent.click(screen.getByText("Show All Pigs"));
    expect(screen.getByText("Show All Pigs")).toBeInTheDocument();
    userEvent.click(screen.getByText("Home"));
    expect(screen.getByText("Home")).toBeInTheDocument();
    userEvent.click(screen.getByText("Add to the mix"));
    expect(screen.getByText("Add to the mix")).toBeInTheDocument();
  });
});

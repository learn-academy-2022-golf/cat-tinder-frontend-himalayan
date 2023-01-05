import { render,screen } from "@testing-library/react"
import Home from "./Home"
import { BrowserRouter } from "react-router-dom";
describe("<Home />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")

    render(
    <BrowserRouter><Home /></BrowserRouter>, div)
    expect(screen.getByText("Welcome To Guinea Pigs of the World")).toBeInTheDocument()
  })
})
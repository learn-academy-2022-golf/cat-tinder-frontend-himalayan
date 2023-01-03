import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import Header from "./Header"

describe("<Header />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      div
    )
  })
  it("has clickable links", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
        userEvent.click(screen.getByText("Guinea Pigs of Flavor"))
        expect(screen.getByText("Guinea Pigs of Flavor")).toBeInTheDocument()

        userEvent.click(screen.getByText("Home"))
        expect(screen.getByText("Home")).toBeInTheDocument()

        userEvent.click(screen.getByText("Please don't click me!"))
        expect(screen.getByText("Please don't click me!")).toBeInTheDocument()

        userEvent.click(screen.getByText("Meet the Pigs"))
        expect(screen.getByText("Meet the Pigs")).toBeInTheDocument()

        userEvent.click(screen.getByText("Mike the Crazy pig"))
        expect(screen.getByText("Mike the Crazy pig")).toBeInTheDocument()

        userEvent.click(screen.getByText("Larry the Funny pig"))
        expect(screen.getByText("Larry the Funny pig")).toBeInTheDocument()

        userEvent.click(screen.getByText("Jerry the handicapped pig"))
        expect(screen.getByText("Jerry the handicapped pig")).toBeInTheDocument()

        expect(screen.getByText("Ways to eat the pigs")).toBeInTheDocument()
  })
})

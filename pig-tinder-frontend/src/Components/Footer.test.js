import Footer from "./Footer"
import { BrowserRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
describe("<Footer />", () => {
    it("renders without crashing", () => {
      const div = document.createElement("div")
      render(
          <BrowserRouter>
              <Footer />
          </BrowserRouter>, div
      )
      expect(screen.getByText("Created by Kent and Charlie")).toBeInTheDocument()
    })
  })
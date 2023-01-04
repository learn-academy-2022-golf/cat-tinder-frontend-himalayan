import { render, screen } from "@testing-library/react"
import PigIndex from "./PigIndex"
import mockPigs from "../mockPigs"
import { BrowserRouter } from "react-router-dom"

describe("<PigIndex />", () => {
  it("render a card for each pig", () => {
   
  render(
  <PigIndex pigs={mockPigs} /> )
  mockPigs.map((pig) => {
    const nameElement = screen.getByText(pig.name)
    expect(nameElement).toBeInTheDocument()
    
  })
})
})

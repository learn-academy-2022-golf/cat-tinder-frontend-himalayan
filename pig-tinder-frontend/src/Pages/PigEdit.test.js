import { render, screen } from "@testing-library/react"
import PigEdit from "./PigEdit"
import mockPigs from '../mockPigs'
import { MemoryRouter, Routes, Route } from 'react-router-dom'



const renderComponent = () => {
    render(
    <MemoryRouter initialEntries={["/PigEdit/1"]}>
      <Routes>
          <Route path="PigEdit/:id" element={<PigEdit pigs={mockPigs} />}/>
      </Routes>
    </MemoryRouter>
    )
  }


    describe("<PigEdit />", () => {
    it("has a form to input name, breed, habits, and image", () => {
        renderComponent()
        const formName = screen.getByText("Name")
        expect(formName.getAttribute("For")).toEqual("name")

        const formAge = screen.getByText("Breed")
        expect(formAge.getAttribute("For")).toEqual("breed")

        const formEnjoys = screen.getByText("Habits")
        expect(formEnjoys.getAttribute("For")).toEqual("habits")

        const formImage = screen.getByText("Image")
        expect(formImage.getAttribute("For")).toEqual("image")
    })
})
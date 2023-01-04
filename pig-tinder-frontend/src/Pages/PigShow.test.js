import { render, screen } from "@testing-library/react";
import PigShow from "./PigShow";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import mockPigs from "../mockPigs";

const renderComponent = () => {
  render(
    <MemoryRouter initialEntries={["/PigShow/1"]}>
      <Routes>
        <Route path="PigShow/:id" element={<PigShow pigs={mockPigs} />} />
      </Routes>
    </MemoryRouter>
  );
};

describe("<PigShow />", () => {
  it("renders a card with a cat enjoys", () => {
    renderComponent();
    expect(screen.getByText(mockPigs[0].habits)).toBeInTheDocument();
  });
  it("renders a card with a cat name and age", () => {
    renderComponent();
    expect(
      screen.getByText(`${mockPigs[0].name}, ${mockPigs[0].breed}`)
    ).toBeInTheDocument();
  });
});

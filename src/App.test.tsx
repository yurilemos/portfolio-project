import React from "react";
import { render, screen } from "@testing-library/react";
import { Home } from "./screens/home";
import "@testing-library/jest-dom/extend-expect";

test("First test", () => {
  render(<Home />);
  const myElement = screen.getByText(/Teste/i);
  expect(myElement).toBeInTheDocument();
});

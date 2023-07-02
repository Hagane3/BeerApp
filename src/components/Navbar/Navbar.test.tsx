import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import { describe, expect, test } from "vitest";

import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";

describe("Navbar component", () => {
  test("renders logo", () => {
    const { getByAltText } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(getByAltText("beer logo")).toBeInTheDocument();
  });
  test("renders close menu icon", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(getByTestId("menu close")).toBeInTheDocument();
  });
  test("renders open menu icon", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(getByTestId("menu open")).toBeInTheDocument();
  });
});

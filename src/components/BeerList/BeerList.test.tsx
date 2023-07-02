import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import { describe, expect, test } from "vitest";

import BeerList from "./BeerList";

describe("BeerList component", () => {
  test("is rendered", () => {
    const { getByText } = render(<BeerList />);
    expect(getByText("Try our beer app today!")).toBeInTheDocument();
  });
});

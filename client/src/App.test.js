import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";
import App from "./App";

it("renders <app /> correctly", async () => {
  const { queryByTestId } = render(<App />);
  expect(queryByTestId("app")).toBeTruthy();
});

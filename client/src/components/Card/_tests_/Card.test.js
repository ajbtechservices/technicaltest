import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Card from "../Card";
//mock data
const vehicle = {
  id: "xe",
  modelYear: "k17",
  name: "Jaguar XE",
  url: "/api/public/vehicle/xe",
  media: [
    {
      name: "vehicle",
      url: "/images/xe_k17.jpg",
    },
  ],
};

it("renders correctly", async () => {
  const launchModal = jest.fn();
  const { queryByTestId } = render(
    <Card {...vehicle} launchModal={launchModal} />
  );

  expect(queryByTestId("card")).toBeTruthy();
  expect(queryByTestId("card-name")).toHaveTextContent("Jaguar XE");
  expect(queryByTestId("card-year")).toHaveTextContent("Year: 2017");
  expect(queryByTestId("card-image").src).toContain("/images/xe_k17.jpg");
  expect(queryByTestId("card-button")).toHaveTextContent("View");
});

describe("View button clicked", () => {
  it("Opens the modal", async () => {
    const launchModal = jest.fn();
    const { queryByTestId } = render(
      <Card {...vehicle} launchModal={launchModal} />
    );
    fireEvent.click(queryByTestId("card-button"), { button: 1 });
    expect(launchModal).toHaveBeenCalled();
  });
});

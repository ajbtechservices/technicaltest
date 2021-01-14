import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Modal from "../Modal";
//mock data
const vehicleDetails = {
  vehicle: {
    id: "xf",
    modelYear: "k17",
    name: "Jaguar XF",
    url: "/api/public/vehicle/xf",
    media: [
      {
        name: "vehicle",
        url: "/images/xf_k17.jpg",
      },
    ],
  },
  details: {
    id: "xf",
    description:
      "Luxury business saloon with distinctive design, dynamic drive and state-of-the-art technologies.",
    price: "£36,000",
    meta: {
      passengers: 5,
      drivetrain: ["AWD", "RWD"],
      bodystyles: ["saloon"],
      emissions: {
        template: "CO2 Emissions $value g/km",
        value: 104,
      },
    },
  },
};

it("renders correctly", async () => {
  const setShowModal = jest.fn();
  const { queryByTestId } = render(
    <Modal setShowModal={setShowModal} {...vehicleDetails} />
  );

  expect(queryByTestId("modal")).toBeTruthy();
  expect(queryByTestId("modal-name")).toHaveTextContent("Jaguar XF");
  expect(queryByTestId("modal-price")).toHaveTextContent("£36,000");
  expect(queryByTestId("modal-description")).toHaveTextContent(
    "Luxury business saloon with distinctive design"
  );
  expect(queryByTestId("modal-passengers")).toHaveTextContent("5");
  expect(queryByTestId("modal-drive-train")).toHaveTextContent("AWD, RWD");
  expect(queryByTestId("modal-body-styles")).toHaveTextContent("saloon");
  expect(queryByTestId("modal-emissions-template")).toHaveTextContent(
    "CO2 Emissions $value g/km"
  );
  expect(queryByTestId("modal-emissions-value")).toHaveTextContent("104");
  expect(queryByTestId("modal-image").src).toContain("/images/xf_k17.jpg");
  expect(queryByTestId("modal-button")).toHaveTextContent("close");
});

describe("clicking the close button", () => {
  it("Closes the modal", () => {
    const setShowModal = jest.fn();
    const { queryByTestId } = render(
      <Modal setShowModal={setShowModal} {...vehicleDetails} />
    );
    fireEvent.click(queryByTestId("modal-button"), { button: 1 });
    expect(setShowModal).toHaveBeenCalled();
  });
});

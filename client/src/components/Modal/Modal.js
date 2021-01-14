import React from "react";

const Modal = (props) => {
  const formatArrayData = (data) => {
    if (!data) {
      return <span></span>;
    }
    return data.map((el, i) => {
      const comma = i == data.length - 1 ? " " : ", ";
      return (
        <span key={i}>
          {el}
          {comma}
        </span>
      );
    });
  };
  return (
    <div data-testid="modal" className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-left sm:mt-0">
                <img
                  data-testid="modal-image"
                  className="mx-auto"
                  src={props?.vehicle.media[0]?.url}
                  alt={props?.vehicle.media?.name}
                />
                <div className="flex justify-between mt-5 mb-1 items-center">
                  <h2
                    className="text-gray-900 text-lg font-bold title-font"
                    data-testid="modal-name"
                  >
                    {props?.vehicle.name}
                  </h2>
                  <p
                    className="font-medium text-md text-green-500"
                    data-testid="modal-price"
                  >
                    {props?.details?.price}
                  </p>
                </div>

                <p
                  className="leading-relaxed mb-5 text-gray-600"
                  data-testid="modal-description"
                >
                  {props?.details.description}
                </p>

                <p
                  data-testid="modal-passengers"
                  className="mb-3 md:mb-1 text-gray-500"
                >
                  <span className="font-medium text-gray-800">Passengers:</span>{" "}
                  {props?.details?.meta?.passengers}
                </p>
                <p
                  data-testid="modal-drive-train"
                  className="mb-3 md:mb-1 text-gray-500"
                >
                  <span className="font-medium text-gray-800">
                    Drive trains:
                  </span>{" "}
                  {formatArrayData(props?.details?.meta?.drivetrain)}
                </p>
                <p
                  data-testid="modal-body-styles"
                  className="mb-3 md:mb-1 text-gray-500"
                >
                  <span className="font-medium text-gray-800">
                    Body styles:
                  </span>{" "}
                  {formatArrayData(props?.details?.meta?.bodystyles)}
                </p>

                <p
                  data-testid="modal-emissions-template"
                  className="mb-3 md:mb-1 text-gray-500"
                >
                  <span className="font-medium text-gray-800">
                    Emissions template:
                  </span>{" "}
                  {props?.details?.meta?.emissions?.template}
                </p>
                <p
                  className="mb-3 md:mb-1 text-gray-500"
                  data-testid="modal-emissions-value"
                >
                  <span className="font-medium text-gray-800">
                    Emissions value:
                  </span>{" "}
                  {props?.details?.meta?.emissions?.value}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              data-testid="modal-button"
              onClick={() => props.setShowModal(false)}
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

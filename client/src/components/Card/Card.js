import React from "react";

const Card = (props) => {
  return (
    <div
      data-testid="card"
      className="card flex flex-col mx-auto  w-full md:w-1/3 md:mx-2 md:w-1/2 mb-4 bg-white rounded p-4  shadow"
    >
      <img
        data-testid="card-image"
        src={props?.media[0]?.url}
        alt={props?.media?.name}
      />
      <h2
        data-testid="card-name"
        className="text-gray-900  text-lg mb-1 mt-5 font-bold title-font"
      >
        {props?.name}
      </h2>
      <p data-testid="card-year" className="leading-relaxed mb-5 text-gray-600">
        Year: 20{(props?.modelYear).replace("k", "")}
      </p>
      <button
        data-testid="card-button"
        onClick={() => props.launchModal(props)}
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        View
      </button>
    </div>
  );
};

export default Card;

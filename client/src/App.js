import React, { useEffect, useState } from "react";
import Card from "./components/Card/Card.js";
import Modal from "./components/Modal/Modal.js";
import API from "./utils/api";

const App = () => {
  const [vehicles, setVehicles] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [vehicleDetails, setVehicleDetails] = useState(null);

  useEffect(() => {
    (async () => {
      const api = new API();
      const data = await api.getVehicles();
      setVehicles(data);
    })();
  }, []);

  const launchModal = async (vehicle) => {
    const api = new API(vehicle.url);
    const data = await api.getVehicles();
    setVehicleDetails({ vehicle: vehicle, details: data });
    setShowModal(true);
  };

  const isOdd = (x) => {
    return x & 1 ? false : true;
  };
  return (
    <>
      <div
        data-testid="app"
        className="container px-3 pt-20 mx-auto md:justify-center flex justify-between flex-wrap"
      >
        {vehicles.map((vehicle, i) =>
          isOdd(vehicles) && i === vehicles.length - 1 ? (
            <>
              <Card {...vehicle} key={vehicle.id} launchModal={launchModal} />
              <div className="card flex w-full md:w-1/3 md:mx-2 mb-4 md:mb-0"></div>
            </>
          ) : (
            <Card {...vehicle} key={vehicle.id} launchModal={launchModal} />
          )
        )}
      </div>
      {showModal && <Modal setShowModal={setShowModal} {...vehicleDetails} />}
    </>
  );
};

export default App;

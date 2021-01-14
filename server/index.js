import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const publicRouter = express.Router();

publicRouter.get("/vehicle", async (req, res) => {
  try {
    const vehicleData = await import("./data/vehicles.js");
    return res.json(vehicleData.default.vehicles);
  } catch (error) {
    return res.status(400).json({ message: "Data not found" });
  }
});

publicRouter.get("/vehicle/:id", async (req, res) => {
  if (!req.params.id) {
    return res.status(400).json({ message: "Vehicle ID is required." });
  }
  try {
    const vehicle = await import(`./data/vehicle_${req.params.id}.js`);
    return res.json(vehicle.default);
  } catch (error) {
    return res.status(400).json({ message: "Data not found" });
  }
});

app.use("/api/public", publicRouter);

app.listen(port, () =>
  console.log(`Server started! Listening at http://localhost:${port}`)
);

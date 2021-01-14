import API from "../api";

test("api.getVehicles test with no url", () => {
  const api = new API();
  api.getVehicles().then((data) => {
    expect(typeof data).toBe("object");
  });
});

test("api.getVehicles test with a url", () => {
  const api = new API("/api/public/vehicle/xe");
  api.getVehicles().then((data) => {
    expect(typeof data).toBe("object");
  });
});

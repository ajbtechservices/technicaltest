import axios from "axios";

export default class API {
  constructor(url = "") {
    if (url.length) {
      this.url = `${process.env.REACT_APP_API_ENDPOINT}${url}`;
    } else {
      this.url = `${process.env.REACT_APP_API_ENDPOINT}/api/public/vehicle`;
    }
  }
  async getVehicles() {
    try {
      const response = await axios(this.url);
      if (response.statusText === "OK") {
        return await response.data;
      }
    } catch (error) {
      console.error(
        "API ERROR: " +
          error.response.status +
          " : " +
          error.response.statusText
      );
      return [];
    }
  }
}

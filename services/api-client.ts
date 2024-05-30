import axios from "axios";

export default axios.create({
  baseURL: "https://api.helmfarm.co.uk/portfolio-be",
  timeout: 1000,
});

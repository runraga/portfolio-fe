import axios from "axios";

export default axios.create({
  baseURL: "https://api.helmfarm.co.uk/",
  timeout: 1000,
});

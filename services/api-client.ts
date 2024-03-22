import axios from "axios";


export default axios.create({
  baseURL: "https://api.github.com",
  timeout: 1000,
  headers: { Accept: "application/vnd.github+json", "User-Agent": "runraga" },
});

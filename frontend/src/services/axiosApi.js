import axios from "axios";

const baseURL = "http://3.221.150.242:8993/api";

export const apiHandler = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

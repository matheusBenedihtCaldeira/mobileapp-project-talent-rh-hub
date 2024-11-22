import axios from "axios";

const baseURL = "http://172.20.10.2:8993/api";

export const apiHandler = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

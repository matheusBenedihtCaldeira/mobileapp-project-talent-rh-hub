import axios from "axios";

const baseURL = "http://192.168.15.7:8993/api";

export const apiHandler = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

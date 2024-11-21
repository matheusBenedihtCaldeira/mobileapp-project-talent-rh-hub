import axios from "axios";

const baseURL = "http://127.0.0.1:8993/api";

export const apiHandler = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

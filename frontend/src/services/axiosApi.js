import axios from "axios";
import { API_URL_LOCAL } from "@env";

const origin = window.origin;

let baseURL = "";

if (origin.includes('localhost')) {
  baseURL = API_URL_LOCAL;
}

export const apiHandler = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

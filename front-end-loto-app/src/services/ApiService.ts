import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const baseURL = process.env.VITE_API_BASE_URL;

const ApiService = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export { ApiService };

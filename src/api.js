import axios from "axios";

const BACKEND_URL = "https://flaship-backend.onrender.com"; // URL backend Render

const api = axios.create({
  baseURL: BACKEND_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
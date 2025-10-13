// src/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "https://flashipping-backend.onrender.com", // ranplase ak URL backend Render ou
  // Si w bezwen cookies/session:
  // withCredentials: true,
});

export default API;
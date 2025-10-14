import axios from "axios";

// Ou ka mete lyen Render backend ou la
const API = axios.create({
  baseURL: "https://flashipping-backend.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;

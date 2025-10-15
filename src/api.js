import axios from "axios";

// 🌍 Backend base URL
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://flashipping-backend.onrender.com",
});

// ✅ Middleware pou ajoute token otomatikman nan chak requête
API.interceptors.request.use((config) => {
  const userToken = localStorage.getItem("token");
  const adminToken = localStorage.getItem("adminToken");
  const token = adminToken || userToken;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// 🚪 Fonksyon logout — efase tout token ak done itilizatè
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("adminToken");
  localStorage.removeItem("userData");
  localStorage.removeItem("adminData");
  window.location.href = "/login"; // Redireksyon otomatik
};

export default API;
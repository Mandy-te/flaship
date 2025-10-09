// src/utils/api.js

// 👇 Sa se adrès backend ou (ajiste l si w ap lanse sou localhost oswa sou yon domaine)
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// 🔹 Fonksyon jeneral pou fè apèl API
export async function fetchAPI(endpoint, options = {}) {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    });

    if (!res.ok) {
      const errMsg = await res.text();
      throw new Error(errMsg || "Erreur API");
    }

    return await res.json();
  } catch (err) {
    console.error("Erreur fetchAPI:", err.message);
    throw err;
  }
}

// 🔹 Fonksyon POST pou login, signup, etc.
export async function postAPI(endpoint, data) {
  return fetchAPI(endpoint, {
    method: "POST",
    body: JSON.stringify(data),
  });
}

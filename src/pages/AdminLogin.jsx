import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import { useAdmin } from "../context/AdminContext";

export default function AdminLogin() {
  const { loginAdmin } = useAdmin();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Tanpri antre email ak modpas admin ou 🕵️‍♂️");
      return;
    }

    try {
      setLoading(true);
      const res = await API.post("/api/admin/login", { email, password });

      if (res.data?.user?.role !== "admin") {
        alert("Accès refusé ❌ — ou pa gen privilèj admin!");
        return;
      }

      // Login admin nan nan kontex
      loginAdmin(res.data.user, res.data.token);

      alert("Connexion admin reussi ✅");
      navigate("/admin/dashboard");
    } catch (err) {
      console.error("Erreur login admin:", err);
      alert(err.response?.data?.error || "Erreur connexion admin 😕");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 shadow-lg rounded-xl w-96 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-red-700">
          Connexion Admin 🔐
        </h2>

        <input
          type="email"
          placeholder="Email admin"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border w-full px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border w-full px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        <button
          type="submit"
          disabled={loading}
          className={`${
            loading ? "bg-gray-400" : "bg-red-700 hover:bg-red-800"
          } text-white w-full py-2 rounded transition`}
        >
          {loading ? "Connexion..." : "Se connecter"}
        </button>
      </form>
    </div>
  );
}
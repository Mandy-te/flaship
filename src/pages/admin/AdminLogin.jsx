import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api";
import { useAdmin } from "../../context/AdminContext";

export default function AdminLogin() {
  const { loginAdmin } = useAdmin();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Antre email ak modpas ou!");
      return;
    }

    try {
      setLoading(true);
      const res = await API.post("/api/admin/login", { email, password });

      // ✅ Tcheke si role admin la prezan
      if (res.data?.user?.role !== "admin") {
        alert("Accès refusé ❌ — ou pa gen privilèj admin!");
        return;
      }

      // Sove token ak done admin nan context + localStorage
      loginAdmin(res.data.user, res.data.token);

      alert(res.data.message || "Login admin reussi ✅");
      navigate("/admin/dashboard");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || "Erreur login admin");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 shadow-md rounded w-96 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-red-700">Admin Login</h2>

        <input
          type="email"
          placeholder="Email"
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
          className={`bg-red-700 text-white w-full py-2 rounded hover:bg-red-800 transition ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Connexion..." : "Connecter"}
        </button>
      </form>
    </div>
  );
}
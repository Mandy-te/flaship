import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await API.post("/api/admin/login", { email, password });

      const user = res.data.user;
      const token = res.data.token;

      if (!user || user.role !== "admin") {
        alert("Accès refusé ❌ — ou pa gen privilèj admin!");
        setLoading(false);
        return;
      }

      // ✅ Save admin token & data nan localStorage
      localStorage.setItem("adminToken", token);
      localStorage.setItem("adminData", JSON.stringify(user));

      // Redireksyon nan Dashboard Admin
      navigate("/admin/dashboard");
    } catch (err) {
      console.error("Erreur login admin:", err);
      alert(err.response?.data?.error || "Erreur serveur");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>

        <label className="block mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />

        <label className="block mb-2">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded mb-6"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-700 text-white p-2 rounded hover:bg-blue-800 transition"
        >
          {loading ? "Connexion..." : "Se connecter"}
        </button>
      </form>
    </div>
  );
}
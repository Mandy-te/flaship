import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Tanpri ranpli tout chan yo !");
      return;
    }

    try {
      setLoading(true);
      const res = await API.post("/api/admin/login", { email, password });

      if (res.data?.user?.role !== "admin") {
        alert("Accès refusé ❌ — ou pa gen privilèj admin!");
        return;
      }

      // ✅ Sove token & role
      localStorage.setItem("adminToken", res.data.token);
      localStorage.setItem("role", res.data.user.role);
      localStorage.setItem("adminData", JSON.stringify(res.data.user));

      alert("Connexion réussie ✅");
      navigate("/admin/dashboard");
    } catch (err) {
      console.error("Erreur login admin:", err);
      alert(err.response?.data?.error || "Erreur de connexion au serveur");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          🔐 Connexion Admin
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email admin"
            className="w-full border rounded-lg px-4 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            className="w-full border rounded-lg px-4 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white rounded-lg py-2 font-semibold hover:bg-blue-700 transition"
          >
            {loading ? "Connexion..." : "Se connecter"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
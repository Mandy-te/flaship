import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import API from "../api";

const Login = () => {
  const { login } = useUser();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Antre email ak modpas ou!");
      return;
    }

    try {
      const res = await API.post("/api/login", { email, password });
      login(res.data.user); // sipoze backend voye { user: "username" }
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.error || "Erreur login");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form onSubmit={handleLogin} className="bg-white p-8 shadow-md rounded-lg w-80 space-y-4">
        <h2 className="text-2xl font-bold text-center text-blue-700">Connexion</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="bg-blue-700 text-white w-full py-2 rounded-lg hover:bg-blue-800 transition">
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default Login;

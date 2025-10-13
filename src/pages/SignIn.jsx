import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

export default function SignIn() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Modpas yo pa matche!");
      return;
    }

    try {
      await API.post("/api/signup", { name, email, password });
      alert("Kreyasyon kont reussi!");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.error || "Erreur inscription");
    }
  };

  return (
    <section className="max-w-md mx-auto p-6 border rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">Créer un compte 🧾</h2>
      <form onSubmit={handleSignUp}>
        <label className="block mb-2">Nom complet</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded p-2 w-full mb-4"
          placeholder="Ex: Claudy Saint Julien"
        />
        <label className="block mb-2">Adresse e-mail</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded p-2 w-full mb-4"
          placeholder="exemple@mail.com"
        />
        <label className="block mb-2">Mot de passe</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border rounded p-2 w-full mb-4"
          placeholder="********"
        />
        <label className="block mb-2">Confirmer mot de passe</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="border rounded p-2 w-full mb-6"
          placeholder="********"
        />
        <button className="bg-green-600 text-white px-4 py-2 rounded w-full">S’inscrire</button>
      </form>
    </section>
  );
}

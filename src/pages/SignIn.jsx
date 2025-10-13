import React, { useState } from "react";

export default function SignIn() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas!");
      return;
    }
    alert("Compte créé avec succès!");
  };

  return (
    <section className="max-w-md mx-auto p-6 border rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">Créer un compte 🧾</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">Nom complet</label>
        <input type="text" className="border rounded p-2 w-full mb-4" placeholder="Ex: Claudy Saint Julien" />
        <label className="block mb-2">Adresse e-mail</label>
        <input type="email" className="border rounded p-2 w-full mb-4" placeholder="exemple@mail.com" />
        <label className="block mb-2">Mot de passe</label>
        <input type="password" className="border rounded p-2 w-full mb-4" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)} />
        <label className="block mb-2">Confirmer le mot de passe</label>
        <input type="password" className="border rounded p-2 w-full mb-6" placeholder="********" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <button className="bg-green-600 text-white px-4 py-2 rounded w-full">S’inscrire</button>
      </form>
    </section>
  );
}

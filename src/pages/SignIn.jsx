export default function SignIn() {
  return (
    <section className="max-w-md mx-auto p-6 border rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">Créer un compte 🧾</h2>
      <form>
        <label className="block mb-2">Nom complet</label>
        <input type="text" className="border rounded p-2 w-full mb-4" placeholder="Ex: Claudy Saint Julien" />
        <label className="block mb-2">Adresse e-mail</label>
        <input type="email" className="border rounded p-2 w-full mb-4" placeholder="exemple@mail.com" />
        <label className="block mb-2">Mot de passe</label>
        <input type="password" className="border rounded p-2 w-full mb-6" placeholder="********" />
        <button className="bg-green-600 text-white px-4 py-2 rounded w-full">S’inscrire</button>
      </form>
    </section>
  );
}
export default function Login() {
  return (
    <section className="max-w-md mx-auto p-6 border rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">Connexion 🔐</h2>
      <form>
        <label className="block mb-2">Adresse e-mail</label>
        <input type="email" className="border rounded p-2 w-full mb-4" placeholder="exemple@mail.com" />
        <label className="block mb-2">Mot de passe</label>
        <input type="password" className="border rounded p-2 w-full mb-6" placeholder="********" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">Se connecter</button>
      </form>
      <p className="text-center mt-4">
        Pas encore inscrit ? <a href="/sign-in" className="text-blue-600 underline">Créer un compte</a>
      </p>
    </section>
  );
}
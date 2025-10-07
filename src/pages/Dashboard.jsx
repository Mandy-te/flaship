export default function Dashboard() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Tableau de bord 📊</h2>
      <p>Bienvenue sur votre espace client. Ici, vous pouvez :</p>
      <ul className="list-disc ml-6 mt-4">
        <li>Suivre vos colis en temps réel</li>
        <li>Ajouter une pré-alerte pour vos envois</li>
        <li>Consulter vos historiques d’expédition</li>
      </ul>
      <div className="mt-8 border-t pt-4">
        <h3 className="text-xl font-semibold mb-2">Pré-alerter un colis</h3>
        <form className="max-w-md">
          <label className="block mb-2">Numéro de tracking</label>
          <input type="text" className="border rounded p-2 w-full mb-4" placeholder="Ex: 1Z999AA10123456784" />
          <label className="block mb-2">Valeur marchande (USD)</label>
          <input type="number" className="border rounded p-2 w-full mb-4" />
          <label className="block mb-2">Photo facture (optionnel)</label>
          <input type="file" className="border rounded p-2 w-full mb-4" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Envoyer</button>
        </form>
      </div>
    </section>
  );
}
export default function Calculator() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Calculateur de tarifs 📦</h2>
      <p>Estimez le coût de votre expédition selon le poids et la destination.</p>
      <div className="mt-6 border p-4 rounded-lg max-w-md">
        <label className="block mb-2">Poids (kg)</label>
        <input type="number" className="border rounded p-2 w-full mb-4" placeholder="Ex: 2.5" />
        <label className="block mb-2">Destination</label>
        <input type="text" className="border rounded p-2 w-full mb-4" placeholder="Ex: Port-au-Prince" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Calculer</button>
      </div>
    </section>
  );
}
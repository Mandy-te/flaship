import { useState, useEffect } from "react";

export default function Calculator() {
  const [poids, setPoids] = useState("");
  const [valeur, setValeur] = useState("");
  const [fragile, setFragile] = useState("non");
  const [resultat, setResultat] = useState("");

  useEffect(() => {
    const p = parseFloat(poids);
    const v = parseFloat(valeur);

    if (!poids || !valeur) {
      setResultat("");
      return;
    }

    if (isNaN(p) || isNaN(v)) {
      setResultat("⚠️ Veuillez entrer des valeurs valides.");
      return;
    }

    if (fragile !== "non") {
      setResultat(
        `⚠️ Ce colis est fragile (${fragile}). Veuillez nous contacter pour un tarif personnalisé.`
      );
      return;
    }

    if (v > 200) {
      setResultat(
        "⚠️ La valeur dépasse $200, des frais de douane supplémentaires peuvent s'appliquer."
      );
      return;
    }

    let prix = 0;
    if (p <= 2) prix = 10;
    else if (p <= 15) prix = p * 5 + 10;
    else if (p <= 40) prix = p * 5 + 20;
    else prix = p * 5 + 50;

    setResultat(`💰 Le coût estimé de votre colis est $${prix.toFixed(2)}.`);
  }, [poids, valeur, fragile]);

  return (
    <section className="p-6 flex justify-center">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-3xl font-bold mb-4 text-center text-blue-700">
          Calculateur de tarifs 📦
        </h2>
        <p className="text-gray-600 mb-6 text-center pt-20">
          Estimez le coût de votre expédition selon le poids et la valeur du marchand.
        </p>

        <label className="block mb-2 font-medium text-gray-700">Poids (livres)</label>
        <input
          type="number"
          className="border rounded-lg p-2 w-full mb-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          placeholder="Ex: 5"
          value={poids}
          onChange={(e) => setPoids(e.target.value)}
        />

        <label className="block mb-2 font-medium text-gray-700">Valeur du marchand ($)</label>
        <input
          type="number"
          className="border rounded-lg p-2 w-full mb-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          placeholder="Ex: 150"
          value={valeur}
          onChange={(e) => setValeur(e.target.value)}
        />

        <label className="block mb-2 font-medium text-gray-700">Colis fragile</label>
        <select
          className="border rounded-lg p-2 w-full mb-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          value={fragile}
          onChange={(e) => setFragile(e.target.value)}
        >
          <option value="non">Non</option>
          <option value="Telephone">Telephone</option>
          <option value="Parfum">Parfum</option>
          <option value="Imprimante">Imprimante</option>
          <option value="Machine press">Machine press</option>
        </select>

        {resultat && (
          <p className="mt-6 p-4 rounded-lg text-center font-semibold text-white bg-gradient-to-r from-red-400 to-red-600">
            {resultat}
          </p>
        )}
      </div>
    </section>
  );
}
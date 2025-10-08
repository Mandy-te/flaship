import React from "react";

const TrackingCTA = () => {
  return (
    <div className="text-center px-6 py-10 bg-blue-700 text-white rounded-2xl max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Suivez votre colis en direct 📦</h2>
      <p className="mb-6">Entrez votre numéro de suivi pour connaître l’état de votre livraison.</p>
      <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
        Suivre maintenant
      </button>
    </div>
  );
};

export default TrackingCTA;
import React, { useState } from "react";
import API from "../api"; // itilize instance global

export default function Tracking() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingData, setTrackingData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTrack = async () => {
    if (!trackingNumber.trim()) return;

    setLoading(true);
    setError("");
    setTrackingData(null);

    try {
      const res = await API.get(`/api/tracking/${trackingNumber.trim()}`);
      setTrackingData(res.data);
    } catch (err) {
      setError(err.response?.data?.error || "Erreur serveur");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Suivi de colis 📦</h2>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Entrez votre numéro de colis"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          className="border rounded-lg p-3 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <button
          onClick={handleTrack}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          {loading ? "Chargement..." : "Suivre"}
        </button>
      </div>

      {error && <p className="text-red-500 text-center mb-6">{error}</p>}

      {trackingData && (
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-xl shadow p-6 text-gray-800 transition-transform duration-500 hover:scale-105">
            <h3 className="font-bold text-xl mb-2">Statut: {trackingData.status}</h3>
            <p className="mb-1">Numéro de colis: {trackingData.trackingNumber}</p>
            <p className="text-gray-600">
              Dernière localisation: {trackingData.location} (
              {new Date(trackingData.lastUpdate).toLocaleString()})
            </p>
          </div>
          <div className="bg-white rounded-xl shadow divide-y divide-gray-200 overflow-hidden">
            <h4 className="font-semibold text-lg p-4 bg-gray-100">Historique du colis</h4>
            {trackingData.history.map((step, idx) => (
              <div key={idx} className="p-4 hover:bg-gray-50 transition duration-300 flex justify-between items-center">
                <div>
                  <p className="font-medium">{step.state}</p>
                  <p className="text-gray-500 text-sm">{step.location}</p>
                </div>
                <p className="text-gray-400 text-sm">{new Date(step.date).toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
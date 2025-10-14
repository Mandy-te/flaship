import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";
import API from "../api";

export default function Dashboard() {
  const { user, logout } = useUser();
  const [shipments, setShipments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newShipment, setNewShipment] = useState({
    trackingNumber: "",
    items: "",
    tariff: "",
    receipt: null,
  });

  // Ranmase lis koli itilizatè a
  const fetchShipments = async () => {
    if (!user) return;
    try {
      setLoading(true);
      const res = await API.get(`/api/shipments?email=${user.email}`);
      setShipments(res.data.shipments || []);
    } catch (err) {
      alert("Erreur fetch shipments: " + (err.response?.data?.error || err.message));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShipments();
  }, [user]);

  // Pre-alerte nouvo koli
  const handleAddShipment = async (e) => {
    e.preventDefault();
    if (!newShipment.trackingNumber || !newShipment.items || !newShipment.receipt) {
      alert("Antre Tracking Number, Atik, ak Upload reçu!");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("email", user.email);
      formData.append("trackingNumber", newShipment.trackingNumber);
      formData.append("items", newShipment.items);
      formData.append("tariff", newShipment.tariff);
      formData.append("receipt", newShipment.receipt);

      await API.post("/api/shipments", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Nouvo koli pre-alerte avèk siksè!");
      setNewShipment({ trackingNumber: "", items: "", tariff: "", receipt: null });
      fetchShipments(); // rafrechi lis koli yo
    } catch (err) {
      alert("Erreur ajoute koli: " + (err.response?.data?.error || err.message));
    }
  };

  if (!user) {
    return <p>Ou bezwen konekte pou wè dashboard la.</p>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard de {user.name || user.email}</h1>
        <button
          onClick={logout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Déconnexion
        </button>
      </div>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Liste des colis</h2>
        {loading ? (
          <p>Chargement...</p>
        ) : shipments.length === 0 ? (
          <p>Pa gen koli pou itilizatè sa a.</p>
        ) : (
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-3 py-2">Tracking Number</th>
                <th className="border px-3 py-2">Pwa</th>
                <th className="border px-3 py-2">Atik</th>
                <th className="border px-3 py-2">Statut</th>
                <th className="border px-3 py-2">Denye Dat</th>
                <th className="border px-3 py-2">Tarif</th>
              </tr>
            </thead>
            <tbody>
              {shipments.map((s) => (
                <tr key={s._id}>
                  <td className="border px-3 py-2">{s.trackingNumber}</td>
                  <td className="border px-3 py-2">{s.weight || "-"}</td>
                  <td className="border px-3 py-2">{s.items}</td>
                  <td className="border px-3 py-2">{s.status || "En attente"}</td>
                  <td className="border px-3 py-2">{new Date(s.updatedAt).toLocaleDateString()}</td>
                  <td className="border px-3 py-2">{s.tariff || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Pré-alerte d'un nouveau colis</h2>
        <form onSubmit={handleAddShipment} className="space-y-4 max-w-md">
          <input
            type="text"
            placeholder="Tracking Number"
            value={newShipment.trackingNumber}
            onChange={(e) => setNewShipment({ ...newShipment, trackingNumber: e.target.value })}
            className="border rounded p-2 w-full"
          />
          <input
            type="text"
            placeholder="Atik"
            value={newShipment.items}
            onChange={(e) => setNewShipment({ ...newShipment, items: e.target.value })}
            className="border rounded p-2 w-full"
          />
          <input
            type="text"
            placeholder="Tarif (opsyonèl)"
            value={newShipment.tariff}
            onChange={(e) => setNewShipment({ ...newShipment, tariff: e.target.value })}
            className="border rounded p-2 w-full"
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setNewShipment({ ...newShipment, receipt: e.target.files[0] })}
            className="border rounded p-2 w-full"
          />
          <button className="bg-blue-700 text-white px-4 py-2 rounded w-full hover:bg-blue-800">
            Ajouter pré-alerte
          </button>
        </form>
      </section>
    </div>
  );
}
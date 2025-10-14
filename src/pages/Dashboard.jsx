import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";
import API from "../api";

export default function Dashboard() {
  const { user, logout } = useUser();
  const [shipments, setShipments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newShipment, setNewShipment] = useState({
    customerName: user?.name || "",
    items: [{ name: "", quantity: 1, value: "", receiptUrl: "" }],
    tariff: "",
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

  // Handlers pou pre-alerte
  const handleItemChange = (index, field, value) => {
    const newItems = [...newShipment.items];
    newItems[index][field] = value;
    setNewShipment({ ...newShipment, items: newItems });
  };

  const handleAddItem = () => {
    setNewShipment({
      ...newShipment,
      items: [...newShipment.items, { name: "", quantity: 1, value: "", receiptUrl: "" }],
    });
  };

  const handleAddShipment = async (e) => {
    e.preventDefault();

    // Validasyon
    for (const item of newShipment.items) {
      if (!item.name || !item.quantity || !item.value || !item.receiptUrl) {
        alert("Tout chan pou chak atik obligatwa!");
        return;
      }
    }

    try {
      await API.post("/api/shipments", { customerName: user.name || user.email, items: newShipment.items, tariff: newShipment.tariff });
      alert("Pre-alerte voye avèk siksè!");
      setNewShipment({ customerName: user.name || user.email, items: [{ name: "", quantity: 1, value: "", receiptUrl: "" }], tariff: "" });
      fetchShipments();
    } catch (err) {
      alert("Erreur pandan pre-alerte: " + (err.response?.data?.error || err.message));
    }
  };

  if (!user) return <p>Ou bezwen konekte pou wè dashboard la.</p>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard de {user.name || user.email}</h1>
        <button
          onClick={logout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Déconnexion
        </button>
      </div>

      {/* Lis koli */}
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
                <th className="border px-3 py-2">Koli ID</th>
                <th className="border px-3 py-2">Pwa (admin ajoute)</th>
                <th className="border px-3 py-2">Atik</th>
                <th className="border px-3 py-2">Statut</th>
                <th className="border px-3 py-2">Denye Dat</th>
                <th className="border px-3 py-2">Tarif</th>
              </tr>
            </thead>
            <tbody>
              {shipments.map((s) => (
                <tr key={s._id}>
                  <td className="border px-3 py-2">{s._id}</td>
                  <td className="border px-3 py-2">{s.weight || "-"}</td>
                  <td className="border px-3 py-2">
                    {s.items.map((i, idx) => (
                      <div key={idx}>{`${i.name} x${i.quantity} (${i.value} HTG)`}</div>
                    ))}
                  </td>
                  <td className="border px-3 py-2">{s.status || "En attente"}</td>
                  <td className="border px-3 py-2">{new Date(s.updatedAt).toLocaleDateString()}</td>
                  <td className="border px-3 py-2">{s.tariff || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      {/* Pre-alerte fòm */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Pré-alerte d'un nouveau colis</h2>
        <form onSubmit={handleAddShipment} className="space-y-4 max-w-md">
          {newShipment.items.map((item, idx) => (
            <div key={idx} className="space-y-2 border p-2 rounded">
              <input
                type="text"
                placeholder="Nom atik"
                value={item.name}
                onChange={(e) => handleItemChange(idx, "name", e.target.value)}
                className="border w-full p-2 rounded"
                required
              />
              <input
                type="number"
                placeholder="Kantite"
                value={item.quantity}
                onChange={(e) => handleItemChange(idx, "quantity", e.target.value)}
                className="border w-full p-2 rounded"
                required
              />
              <input
                type="number"
                placeholder="Valè machandiz"
                value={item.value}
                onChange={(e) => handleItemChange(idx, "value", e.target.value)}
                className="border w-full p-2 rounded"
                required
              />
              <input
                type="text"
                placeholder="Lien reçip / prèv acha"
                value={item.receiptUrl}
                onChange={(e) => handleItemChange(idx, "receiptUrl", e.target.value)}
                className="border w-full p-2 rounded"
                required
              />
            </div>
          ))}
          <button type="button" onClick={handleAddItem} className="bg-yellow-500 px-4 py-2 rounded text-white">
            Ajoute atik
          </button>
          <input
            type="text"
            placeholder="Tarif (opsyonèl)"
            value={newShipment.tariff}
            onChange={(e) => setNewShipment({ ...newShipment, tariff: e.target.value })}
            className="border rounded p-2 w-full"
          />
          <button type="submit" className="bg-green-600 px-4 py-2 rounded w-full text-white hover:bg-green-700">
            Voye pré-alerte
          </button>
        </form>
      </section>
    </div>
  );
}
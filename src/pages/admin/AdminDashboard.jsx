import { useEffect, useState } from "react";
import API from "../../api";
import { useAdmin } from "../../context/AdminContext";

export default function AdminDashboard() {
  const { admin, logoutAdmin } = useAdmin();
  const [users, setUsers] = useState([]);
  const [shipments, setShipments] = useState([]);
  const [preAlerts, setPreAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newShipment, setNewShipment] = useState({
    trackingNumber: "",
    weight: "",
    items: "",
    tariff: "",
    status: "En attente",
  });

  // 🔹 Fetch Users
  const fetchUsers = async () => {
    try {
      const res = await API.get("/api/admin/users");
      setUsers(res.data.users || []);
    } catch (err) {
      alert("Erreur fetch users: " + (err.response?.data?.error || err.message));
    }
  };

  // 🔹 Fetch Shipments
  const fetchShipments = async () => {
    try {
      const res = await API.get("/api/admin/shipments");
      setShipments(res.data.shipments || []);
    } catch (err) {
      alert("Erreur fetch shipments: " + (err.response?.data?.error || err.message));
    }
  };

  // 🔹 Fetch Pre-alerts
  const fetchPreAlerts = async () => {
    try {
      const res = await API.get("/api/admin/prealerts");
      setPreAlerts(res.data.preAlerts || []);
    } catch (err) {
      alert("Erreur fetch pre-alerts: " + (err.response?.data?.error || err.message));
    }
  };

  // 🔹 Confirm Pre-alert
  const confirmPreAlert = async (id) => {
    try {
      await API.patch(`/api/admin/prealerts/${id}/confirm`);
      alert("Pre-alert confirmed ✅");
      fetchPreAlerts();
      fetchShipments();
    } catch (err) {
      alert("Erreur confirmation: " + (err.response?.data?.error || err.message));
    }
  };

  // 🔹 Add Shipment
  const handleAddShipment = async (e) => {
    e.preventDefault();
    if (!newShipment.trackingNumber || !newShipment.items || !newShipment.weight) {
      alert("Antre tout enfòmasyon obligatwa pou shipment la!");
      return;
    }
    try {
      await API.post("/api/admin/shipments", newShipment);
      alert("Nouvo shipment ajoute ✅");
      setNewShipment({
        trackingNumber: "",
        weight: "",
        items: "",
        tariff: "",
        status: "En attente",
      });
      fetchShipments();
    } catch (err) {
      alert("Erreur ajoute shipment: " + (err.response?.data?.error || err.message));
    }
  };

  useEffect(() => {
    if (admin) {
      setLoading(true);
      Promise.all([fetchUsers(), fetchShipments(), fetchPreAlerts()]).finally(() =>
        setLoading(false)
      );
    }
  }, [admin]);

  if (!admin) return <p>Ou bezwen konekte kòm admin pou wè dashboard la.</p>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-red-700">
          Admin Dashboard - {admin.email}
        </h1>
        <button
          onClick={logoutAdmin}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Déconnexion
        </button>
      </div>

      {loading && <p>Chargement...</p>}

      {/* Users Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Liste des utilisateurs</h2>
        {users.length === 0 ? (
          <p>Pa gen itilizatè pou montre.</p>
        ) : (
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-3 py-2">ID</th>
                <th className="border px-3 py-2">Nom</th>
                <th className="border px-3 py-2">Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u._id}>
                  <td className="border px-3 py-2">{u._id}</td>
                  <td className="border px-3 py-2">{u.name}</td>
                  <td className="border px-3 py-2">{u.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      {/* Shipments Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Liste des shipments</h2>
        {shipments.length === 0 ? (
          <p>Pa gen shipments pou montre.</p>
        ) : (
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-3 py-2">Tracking Number</th>
                <th className="border px-3 py-2">Weight</th>
                <th className="border px-3 py-2">Items</th>
                <th className="border px-3 py-2">Tarif</th>
                <th className="border px-3 py-2">Status</th>
                <th className="border px-3 py-2">Dernière Mise à Jour</th>
              </tr>
            </thead>
            <tbody>
              {shipments.map((s) => (
                <tr key={s._id}>
                  <td className="border px-3 py-2">{s.trackingNumber}</td>
                  <td className="border px-3 py-2">{s.weight}</td>
                  <td className="border px-3 py-2">{s.items}</td>
                  <td className="border px-3 py-2">{s.tariff || "-"}</td>
                  <td className="border px-3 py-2">{s.status}</td>
                  <td className="border px-3 py-2">
                    {new Date(s.updatedAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      {/* Pre-alerts Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Pré-alerts Clients</h2>
        {preAlerts.length === 0 ? (
          <p>Pa gen pre-alerts pou konfime.</p>
        ) : (
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-3 py-2">Tracking Number</th>
                <th className="border px-3 py-2">Weight</th>
                <th className="border px-3 py-2">Items</th>
                <th className="border px-3 py-2">Status</th>
                <th className="border px-3 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {preAlerts.map((p) => (
                <tr key={p._id}>
                  <td className="border px-3 py-2">{p.trackingNumber}</td>
                  <td className="border px-3 py-2">{p.weight}</td>
                  <td className="border px-3 py-2">{p.items}</td>
                  <td className="border px-3 py-2">{p.status}</td>
                  <td className="border px-3 py-2">
                    <button
                      onClick={() => confirmPreAlert(p._id)}
                      className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700"
                    >
                      Confirmer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      {/* Add Shipment Form */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Ajouter un nouveau shipment</h2>
        <form onSubmit={handleAddShipment} className="space-y-4 max-w-md">
          <input
            type="text"
            placeholder="Tracking Number"
            value={newShipment.trackingNumber}
            onChange={(e) =>
              setNewShipment({ ...newShipment, trackingNumber: e.target.value })
            }
            className="border rounded p-2 w-full"
          />
          <input
            type="text"
            placeholder="Weight (kg)"
            value={newShipment.weight}
            onChange={(e) => setNewShipment({ ...newShipment, weight: e.target.value })}
            className="border rounded p-2 w-full"
          />
          <input
            type="text"
            placeholder="Items"
            value={newShipment.items}
            onChange={(e) => setNewShipment({ ...newShipment, items: e.target.value })}
            className="border rounded p-2 w-full"
          />
          <input
            type="text"
            placeholder="Tarif (optionnel)"
            value={newShipment.tariff}
            onChange={(e) => setNewShipment({ ...newShipment, tariff: e.target.value })}
            className="border rounded p-2 w-full"
          />
          <button className="bg-blue-700 text-white px-4 py-2 rounded w-full hover:bg-blue-800">
            Ajouter Shipment
          </button>
        </form>
      </section>
    </div>
  );
}
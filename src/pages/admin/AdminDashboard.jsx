import { useEffect, useState } from "react";
import API, { logout } from "../../api";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [shipments, setShipments] = useState([]);
  const [preAlerts, setPreAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true);
      setError("");

      // --- Fetch Users ---
      const usersRes = await API.get("/api/admin/users");
      setUsers(usersRes.data.users || []);

      // --- Fetch Shipments ---
      const shipmentsRes = await API.get("/api/admin/shipments");
      setShipments(shipmentsRes.data.shipments || []);

      // --- Fetch PreAlerts ---
      const preAlertsRes = await API.get("/api/admin/prealerts");
      setPreAlerts(preAlertsRes.data.preAlerts || []);
    } catch (err) {
      console.error("Erreur admin dashboard:", err);
      setError(err.response?.data?.error || "Erreur serveur");
    } finally {
      setLoading(false);
    }
  };

  const confirmPreAlert = async (id) => {
    try {
      await API.patch(`/api/admin/prealerts/${id}/confirm`);
      // Refresh pre-alerts
      setPreAlerts((prev) => prev.filter((pa) => pa._id !== id));
      alert("Pre-alert confirmed ✅");
    } catch (err) {
      console.error(err);
      alert("Erreur konfime pre-alert");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-600">{error}</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Users */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Users</h2>
        {users.length === 0 ? (
          <p>No users found</p>
        ) : (
          <ul className="border p-2 rounded">
            {users.map((user) => (
              <li key={user._id} className="flex justify-between p-1">
                <span>{user.email}</span>
                <span>ID: {user._id}</span>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Shipments */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Shipments</h2>
        {shipments.length === 0 ? (
          <p>No shipments found</p>
        ) : (
          <ul className="border p-2 rounded">
            {shipments.map((s) => (
              <li key={s._id} className="flex justify-between p-1">
                <span>{s.trackingNumber || s._id}</span>
                <span>Status: {s.status}</span>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* PreAlerts */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Pre-Alerts</h2>
        {preAlerts.length === 0 ? (
          <p>No pre-alerts found</p>
        ) : (
          <ul className="border p-2 rounded">
            {preAlerts.map((pa) => (
              <li key={pa._id} className="flex justify-between items-center p-1">
                <span>{pa.trackingNumber || pa._id}</span>
                <button
                  onClick={() => confirmPreAlert(pa._id)}
                  className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700 transition"
                >
                  Confirmer
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <button
        onClick={logout}
        className="mt-6 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
      >
        Logout
      </button>
    </div>
  );
}
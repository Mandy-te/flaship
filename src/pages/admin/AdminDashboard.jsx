import { useEffect, useState } from "react";
import { useAdmin } from "../../context/AdminContext";
import API from "../../api";

export default function AdminDashboard() {
  const { admin, logoutAdmin, token } = useAdmin();
  const [users, setUsers] = useState([]);
  const [shipments, setShipments] = useState([]);
  const [preAlerts, setPreAlerts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const headers = { Authorization: `Bearer ${token}` };
      const [uRes, sRes, pRes] = await Promise.all([
        API.get("/api/admin/users", { headers }),
        API.get("/api/admin/shipments", { headers }),
        API.get("/api/admin/prealerts", { headers }),
      ]);
      setUsers(uRes.data.users || []);
      setShipments(sRes.data.shipments || []);
      setPreAlerts(pRes.data.preAlerts || []);
    } catch (err) {
      alert("Erreur fetch admin data: " + (err.response?.data?.error || err.message));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!admin) return <p>Ou bezwen login kòm admin pou wè dashboard la.</p>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-red-700">Admin Dashboard - {admin.name || admin.email}</h1>
        <button
          onClick={logoutAdmin}
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Logout
        </button>
      </div>

      {loading ? <p>Chargement...</p> : (
        <>
          {/* USERS */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Users</h2>
            <table className="w-full border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-3 py-2">ID</th>
                  <th className="border px-3 py-2">Nom</th>
                  <th className="border px-3 py-2">Email</th>
                </tr>
              </thead>
              <tbody>
                {users.map(u => (
                  <tr key={u._id}>
                    <td className="border px-3 py-2">{u._id}</td>
                    <td className="border px-3 py-2">{u.name}</td>
                    <td className="border px-3 py-2">{u.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* SHIPMENTS */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Shipments</h2>
            <table className="w-full border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-3 py-2">ID</th>
                  <th className="border px-3 py-2">User</th>
                  <th className="border px-3 py-2">Weight</th>
                  <th className="border px-3 py-2">Items</th>
                  <th className="border px-3 py-2">Tarif</th>
                  <th className="border px-3 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {shipments.map(s => (
                  <tr key={s._id}>
                    <td className="border px-3 py-2">{s._id}</td>
                    <td className="border px-3 py-2">{s.email}</td>
                    <td className="border px-3 py-2">{s.weight || "-"}</td>
                    <td className="border px-3 py-2">{s.items}</td>
                    <td className="border px-3 py-2">{s.tariff || "-"}</td>
                    <td className="border px-3 py-2">{s.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* PRE-ALERTS */}
          <section>
            <h2 className="text-xl font-semibold mb-2">Pre-Alerts</h2>
            <table className="w-full border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-3 py-2">ID</th>
                  <th className="border px-3 py-2">User</th>
                  <th className="border px-3 py-2">Items</th>
                  <th className="border px-3 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {preAlerts.map(p => (
                  <tr key={p._id}>
                    <td className="border px-3 py-2">{p._id}</td>
                    <td className="border px-3 py-2">{p.email}</td>
                    <td className="border px-3 py-2">{p.items}</td>
                    <td className="border px-3 py-2">
                      <button
                        onClick={async () => {
                          try {
                            await API.patch(`/api/admin/prealerts/${p._id}/confirm`, {}, {
                              headers: { Authorization: `Bearer ${token}` }
                            });
                            fetchData();
                          } catch (err) {
                            alert(err.response?.data?.error || err.message);
                          }
                        }}
                        className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700"
                      >
                        Confirmer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </>
      )}
    </div>
  );
}

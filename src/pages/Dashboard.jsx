import { useState, useEffect } from "react";
import { useUser } from "../context/UserContext";
import API from "../api";

const Dashboard = () => {
  const { user, logout } = useUser();
  const [trackings, setTrackings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newPackage, setNewPackage] = useState({
    weight: "",
    items: "",
    tarif: "",
  });

  useEffect(() => {
    if (!user) return;
    const fetchTrackings = async () => {
      try {
        const res = await API.get(`/api/trackings/${user}`);
        setTrackings(res.data || []);
      } catch (err) {
        setError("Pa ka chaje istorik koli yo");
      } finally {
        setLoading(false);
      }
    };
    fetchTrackings();
  }, [user]);

  const handleLogout = () => logout();

  const handleNewPackage = (e) => {
    e.preventDefault();
    // Pre-alerte: Ou ka voye sa backend pou admin verifye
    console.log("Nouvo koli:", newPackage);
    alert("Koli anrejistre pou pre-alerte!");
    setNewPackage({ weight: "", items: "", tarif: "" });
  };

  if (!user) return <p>Chaje itilizatè...</p>;
  if (loading) return <p>Chaje istorik koli yo...</p>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Bienvenue, {user}</h1>

      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg space-y-6">
        {error && <p className="text-red-500">{error}</p>}

        <h2 className="text-xl font-semibold">Lis Koli yo</h2>
        {trackings.length === 0 ? (
          <p>Aucun koli ankò</p>
        ) : (
          <ul className="space-y-4">
            {trackings.map((tracking, idx) => (
              <li key={idx} className="border p-4 rounded">
                <p><strong>Pwa:</strong> {tracking.weight || "N/A"} kg</p>
                <p><strong>Atik:</strong> {(tracking.items || []).join(", ")}</p>
                <p><strong>Dernye Statut:</strong> {tracking.status || "N/A"}</p>
                <p><strong>Dernye dat:</strong> {tracking.lastDate || "N/A"}</p>
                <p><strong>Tarif:</strong> {tracking.tarif || "N/A"}</p>
              </li>
            ))}
          </ul>
        )}

        <h2 className="text-xl font-semibold mt-6">Ajoute nouvo koli (Pre-alerte)</h2>
        <form onSubmit={handleNewPackage} className="space-y-4">
          <input
            type="text"
            placeholder="Pwa koli"
            value={newPackage.weight}
            onChange={(e) => setNewPackage({ ...newPackage, weight: e.target.value })}
            className="border w-full px-3 py-2 rounded"
          />
          <input
            type="text"
            placeholder="Atik yo (separe pa ',')"
            value={newPackage.items}
            onChange={(e) => setNewPackage({ ...newPackage, items: e.target.value.split(",") })}
            className="border w-full px-3 py-2 rounded"
          />
          <input
            type="text"
            placeholder="Tarif"
            value={newPackage.tarif}
            onChange={(e) => setNewPackage({ ...newPackage, tarif: e.target.value })}
            className="border w-full px-3 py-2 rounded"
          />
          <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
            Pre-alerte
          </button>
        </form>

        <button
          onClick={handleLogout}
          className="bg-red-600 text-white w-full py-2 rounded-lg hover:bg-red-700 mt-6"
        >
          Se déconnecter
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

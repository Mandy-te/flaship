import { useState, useEffect } from "react";
import { useUser } from "../context/UserContext";
import API from "../api";

export default function Dashboard() {
  const { user, logout } = useUser();
  const [trackings, setTrackings] = useState([]);
  const [newTracking, setNewTracking] = useState({
    trackingNumber: "",
    weight: "",
    items: "",
  });
  const [loading, setLoading] = useState(false);

  // Fetch trackings pou itilizatè a
  useEffect(() => {
    const fetchTrackings = async () => {
      try {
        setLoading(true);
        const res = await API.get(`/api/trackings?user=${user}`);
        setTrackings(res.data);
      } catch (err) {
        console.error("Erreur fetch trackings:", err);
        alert("Pa ka chaje kolis yo.");
      } finally {
        setLoading(false);
      }
    };
    fetchTrackings();
  }, [user]);

  const handleLogout = () => {
    logout();
    window.location.href = "/login";
  };

  const handlePreAlert = async (e) => {
    e.preventDefault();
    if (!newTracking.trackingNumber || !newTracking.weight || !newTracking.items) {
      alert("Antre tout enfòmasyon pou koli a!");
      return;
    }
    try {
      setLoading(true);
      await API.post("/api/trackings", {
        ...newTracking,
        user,
      });
      alert("Nouvo koli pre-alert voye avèk siksè!");
      setNewTracking({ trackingNumber: "", weight: "", items: "" });
      // Re-fetch trackings
      const res = await API.get(`/api/trackings?user=${user}`);
      setTrackings(res.data);
    } catch (err) {
      console.error("Erreur pre-alert:", err);
      alert("Pa ka voye pre-alert la.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Bienvenue, {user}</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Déconnexion
        </button>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Pre-alert: Ajoute yon nouvo koli</h2>
        <form onSubmit={handlePreAlert} className="grid gap-4 max-w-md">
          <input
            type="text"
            placeholder="Tracking Number"
            value={newTracking.trackingNumber}
            onChange={(e) => setNewTracking({ ...newTracking, trackingNumber: e.target.value })}
            className="border rounded p-2"
          />
          <input
            type="number"
            placeholder="Weight (kg)"
            value={newTracking.weight}
            onChange={(e) => setNewTracking({ ...newTracking, weight: e.target.value })}
            className="border rounded p-2"
          />
          <input
            type="text"
            placeholder="Items (separe ak ,)"
            value={newTracking.items}
            onChange={(e) => setNewTracking({ ...newTracking, items: e.target.value })}
            className="border rounded p-2"
          />
          <button type="submit" disabled={loading} className="bg-green-600 text-white p-2 rounded hover:bg-green-700">
            {loading ? "Ap voye..." : "Voye Pre-alert"}
          </button>
        </form>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Lis kolis istorik</h2>
        {loading ? (
          <p>Chaje kolis yo...</p>
        ) : trackings.length === 0 ? (
          <p>Ou poko gen okenn koli.</p>
        ) : (
          <div className="space-y-4">
            {trackings.map((tracking) => (
              <div key={tracking._id} className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-bold">Tracking: {tracking.trackingNumber}</h3>
                <p>Pwa: {tracking.weight} kg</p>
                <p>Atik: {tracking.items.join(", ")}</p>
                <p>Statut: {tracking.status}</p>
                <p>Denye aktyalizasyon: {new Date(tracking.updatedAt).toLocaleString()}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

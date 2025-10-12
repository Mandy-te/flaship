import Tracking from "../components/Tracking";
import Calculator from "../components/Calculator";
import { useUser } from "../context/UserContext";

export default function Dashboard() {
  const { user, logout } = useUser();

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Bienvenue, {user?.email}</h1>
        <button
          onClick={logout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Déconnexion
        </button>
      </div>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Calculateur de tarifs 📦</h2>
        <Calculator />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Suivi de colis 📦</h2>
        <Tracking />
      </section>
    </div>
  );
}import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        Bienvenue, {user?.email}
      </h1>
      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
      >
        Déconnexion
      </button>
    </div>
  );
};

export default Dashboard;
// src/pages/Dashboard.jsx
import React from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Bienvenue, {user}</h1>

      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg space-y-4">
        <p className="text-gray-700 text-center">
          Vous êtes connecté sur votre tableau de bord.
        </p>

        <button
          onClick={handleLogout}
          className="bg-red-600 text-white w-full py-2 rounded-lg hover:bg-red-700 transition duration-300"
        >
          Se déconnecter
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
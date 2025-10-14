import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Accueil from "./pages/Accueil";
import Calculator from "./pages/Calculator";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import AdminLogin from "./pages/AdminLogin"; // ✅ Nou ajoute login admin nan
import AdminDashboard from "./pages/admin/AdminDashboard";

import { UserProvider } from "./context/UserContext";
import { AdminProvider } from "./context/AdminContext"; // ✅ Nou ajoute kontex admin nan

import PrivateRoute from "./routes/PrivateRoute";
import PrivateAdminRoute from "./components/PrivateAdminRoute";

export default function App() {
  return (
    <UserProvider>
      <AdminProvider>
        <Router>
          <Navbar />
          <main className="min-h-screen px-4 py-6 pt-24">
            <Routes>
              {/* ✅ Piblik routes */}
              <Route path="/" element={<Accueil />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/login" element={<Login />} />
              <Route path="/sign-in" element={<SignIn />} />

              {/* ✅ Dashboard itilizatè */}
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />

              {/* ✅ Admin routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route
                path="/admin/dashboard"
                element={
                  <PrivateAdminRoute>
                    <AdminDashboard />
                  </PrivateAdminRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
        </Router>
      </AdminProvider>
    </UserProvider>
  );
}
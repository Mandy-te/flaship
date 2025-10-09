import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Accueil from "./pages/Accueil";
import Calculator from "./pages/Calculator";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";

import { UserProvider } from "./context/UserContext";
import PrivateRoute from "./routes/PrivateRoute";

export default function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <main className="min-h-screen px-4 py-6 pt-24">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </Router>
    </UserProvider>
  );
}
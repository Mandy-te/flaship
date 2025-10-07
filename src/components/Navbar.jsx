import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-blue-600 text-white px-6 py-4 shadow-md">
      <h1 className="text-2xl font-bold">Flashipping</h1>
      <ul className="flex gap-6">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/calculator">Calculator</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/sign-in">Sign In</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </nav>
  );
}
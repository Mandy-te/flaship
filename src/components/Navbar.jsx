import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/public/flashipping-logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 left-0 bg-white/90 backdrop-blur-md shadow-md z-50">
      <div className="flex items-center justify-between px-6 md:px-10 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} alt="Flashipping logo" className="w-12 h-12 object-contain" />
          <h1 className="text-xl md:text-2xl font-bold text-blue-700">FLASHIPPING</h1>
        </Link>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-6 font-medium">
          <Link to="/" className="hover:text-blue-600">Accueil</Link>
          <Link to="/calculator" className="hover:text-blue-600">Calculateur</Link>
          <Link to="#services" className="hover:text-blue-600">Services</Link>
          <Link to="#tarifs" className="hover:text-blue-600">Tarifs</Link>
          <Link to="#tracking" className="hover:text-blue-600">Suivi</Link>
          <Link to="#contact" className="hover:text-blue-600">Contact</Link>
          <Link to="/dashboard" className="hover:text-blue-600">Dashboard</Link>
        </nav>

        {/* Boutons desktop */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/login"
            className="border border-blue-700 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition"
          >
            Connexion
          </Link>
          <Link
            to="/sign-in"
            className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition"
          >
            Créer un compte
          </Link>
        </div>

        {/* Hamburger mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col space-y-1"
        >
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col p-4 space-y-3 text-center">
            <Link to="/" onClick={() => setOpen(false)}>Accueil</Link>
            <Link to="/calculator" onClick={() => setOpen(false)}>Calculateur</Link>
            <Link to="#services" onClick={() => setOpen(false)}>Services</Link>
            <Link to="#tarifs" onClick={() => setOpen(false)}>Tarifs</Link>
            <Link to="#tracking" onClick={() => setOpen(false)}>Suivi</Link>
            <Link to="#contact" onClick={() => setOpen(false)}>Contact</Link>
            <Link to="/dashboard" onClick={() => setOpen(false)}>Dashboard</Link>

            <div className="pt-3 border-t border-gray-200 space-y-2">
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="w-full block border border-blue-700 text-blue-700 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition"
              >
                Connexion
              </Link>
              <Link
                to="/sign-in"
                onClick={() => setOpen(false)}
                className="w-full block bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition"
              >
                Créer un compte
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
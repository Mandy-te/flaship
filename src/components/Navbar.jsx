import React, { useState } from "react";
import logo from "/public/flashipping-logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 left-0 bg-white/90 backdrop-blur-md shadow-md z-50">
      <div className="flex items-center justify-between px-6 md:px-10 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img 
  src={logo} 
  alt="Flashipping logo" 
  className="w-8 h-8 md:w-10 md:h-10 object-contain"
/>
          <h1 className="text-xl md:text-2xl font-bold text-blue-700">
            FLASHIPPING
          </h1>
        </div>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-6 font-medium">
          <a href="#accueil" className="hover:text-blue-600">Accueil</a>
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#tarifs" className="hover:text-blue-600">Tarifs</a>
          <a href="#tracking" className="hover:text-blue-600">Suivi</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>

        {/* Boutons desktop */}
        <div className="hidden md:flex space-x-4">
          <button className="border border-blue-700 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition">
            Connexion
          </button>
          <button className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition">
            Créer un compte
          </button>
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
            <a href="#accueil" onClick={() => setOpen(false)}>Accueil</a>
            <a href="#services" onClick={() => setOpen(false)}>Services</a>
            <a href="#tarifs" onClick={() => setOpen(false)}>Tarifs</a>
            <a href="#tracking" onClick={() => setOpen(false)}>Suivi</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

            <div className="pt-3 border-t border-gray-200 space-y-2">
              <button className="w-full border border-blue-700 text-blue-700 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition">
                Connexion
              </button>
              <button className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition">
                Créer un compte
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
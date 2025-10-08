import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png"; // adapte chemen an si nesesè

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
        {/* LOGO + NAME */}
        <div className="flex items-center space-x-2 md:space-x-3">
          <img
            src={logo}
            alt="Flashipping Logo"
            className="w-8 h-8 md:w-10 md:h-10 object-contain"
          />
          <span className="text-xl md:text-2xl font-bold text-blue-600">
            Flashipping
          </span>
        </div>

        {/* MENU ICON MOBILE */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-blue-600 transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* LINKS */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-white md:static md:flex md:items-center md:space-x-6 md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row items-center md:space-x-6 py-3 md:py-0">
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                Accueil
              </a>
            </li>
            <li>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">
                Services
              </a>
            </li>
            <li>
              <a href="#tarifs" className="text-gray-700 hover:text-blue-600 font-medium">
                Tarifs
              </a>
            </li>
            <li>
              <a href="#tracking" className="text-gray-700 hover:text-blue-600 font-medium">
                Tracking
              </a>
            </li>
          </ul>

          {/* BUTTONS */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3 px-4 md:px-0 pb-3 md:pb-0">
            <a
              href="/login"
              className="text-blue-600 font-semibold hover:text-blue-800"
            >
              Connexion
            </a>
            <a
              href="/signup"
              className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-full hover:bg-blue-700 transition"
            >
              S’inscrire
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "/public/flashipping-logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // 👉 Fonksyon pou scroll sou paj dakèy la
  const handleScroll = (id) => {
    if (location.pathname === "/") {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 400);
    }
    setOpen(false);
  };

  // 👉 Fonksyon pou style link aktif
  const linkClass = (path) =>
    location.pathname === path
      ? "text-blue-700 font-semibold"
      : "hover:text-blue-600 transition";

  return (
    <header className="fixed w-full top-0 left-0 bg-white/90 backdrop-blur-md shadow-md z-50">
      <div className="flex items-center justify-between px-6 md:px-10 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Flashipping logo" className="w-10 h-10 object-contain" />
          <h1 className="text-lg md:text-xl font-bold text-blue-700">FLASHIPPING</h1>
        </div>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center space-x-6 font-medium">
          <button onClick={() => handleScroll("accueil")} className="hover:text-blue-600">Accueil</button>
          <button onClick={() => handleScroll("services")} className="hover:text-blue-600">Services</button>
          <button onClick={() => handleScroll("tarifs")} className="hover:text-blue-600">Tarifs</button>
          <button onClick={() => handleScroll("contact")} className="hover:text-blue-600">Contact</button>
          <Link to="/calculator" className={linkClass("/calculator")}>Calculateur</Link>
        </nav>

        {/* Boutons desktop */}
        <div className="hidden md:flex space-x-3">
          <Link to="/login" className={`border border-blue-700 text-blue-700 px-3 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition ${linkClass("/login")}`}>
            Login
          </Link>
          <Link to="/sign-in" className={`bg-blue-700 text-white px-3 py-2 rounded-lg hover:bg-blue-800 transition ${linkClass("/sign-in")}`}>
            Signin
          </Link>
          <Link to="/dashboard" className={`text-blue-700 px-3 py-2 hover:text-blue-800 ${linkClass("/dashboard")}`}>
            Dashboard
          </Link>
        </div>

        {/* Hamburger mobile */}
        <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col space-y-1">
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col p-4 space-y-3 text-center">
            <button onClick={() => handleScroll("accueil")}>Accueil</button>
            <button onClick={() => handleScroll("services")}>Services</button>
            <button onClick={() => handleScroll("tarifs")}>Tarifs</button>
            <button onClick={() => handleScroll("contact")}>Contact</button>
            <Link to="/calculator" onClick={() => setOpen(false)}>Calculateur</Link>
            <div className="pt-3 border-t border-gray-200 flex flex-col space-y-3 sm:space-y-2">
  <Link
    to="/login"
    onClick={() => setOpen(false)}
    className="w-full border border-blue-700 text-blue-700 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 hover:text-white transition-all duration-300"
  >
    Login
  </Link>

  <Link
    to="/sign-in"
    onClick={() => setOpen(false)}
    className="w-full bg-blue-700 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition-all duration-300"
  >
    Signin
  </Link>

  <Link
    to="/dashboard"
    onClick={() => setOpen(false)}
    className="w-full text-blue-700 py-2 rounded-lg text-sm font-medium hover:text-blue-800 transition-all duration-300 border border-transparent hover:border-blue-200"
  >
    Dashboard
  </Link>
</div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
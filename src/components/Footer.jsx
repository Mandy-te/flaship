import React, { useEffect, useState } from "react";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const [showMobile, setShowMobile] = useState(false);

  // Animasyon scroll pou mobile buttons
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowMobile(true);
      } else {
        setShowMobile(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="bg-blue-900 text-white mt-10">
      {/* Desktop / Tablet Footer */}
      <div className="hidden md:grid max-w-6xl mx-auto px-6 py-6 grid-cols-2 gap-8 opacity-0 animate-fadeIn">
        <div className="space-y-4">
          <h3 className="font-bold text-lg">Flashipping</h3>
          <p className="text-gray-200 text-sm">
            Votre partenaire logistique entre les États-Unis et Haïti. Rapide, fiable et sécurisé !
          </p>
          <div>
            <h4 className="font-semibold mb-2">Liens utiles</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#services" className="hover:text-blue-300 transition-colors">Services</a></li>
              <li><a href="#tarifs" className="hover:text-blue-300 transition-colors">Tarifs</a></li>
              <li><a href="#tracking" className="hover:text-blue-300 transition-colors">Suivi colis</a></li>
              <li><a href="#contact" className="hover:text-blue-300 transition-colors">Nous contacter</a></li>
            </ul>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold mb-2">Nos adresses & contacts</h4>
          <p className="text-sm">📍 Miami, FL, USA</p>
          <p className="text-sm">📍 Cap-Haïtien, Haïti</p>
          <p className="text-sm flex items-center gap-2"><FaWhatsapp /> +1 (305) 000-0000</p>
          <p className="text-sm flex items-center gap-2"><FaEnvelope /> contact@flashipping.com</p>
          <div className="flex gap-4 mt-3">
            <a href="https://wa.me/13050000000" target="_blank" rel="noreferrer" className="hover:text-green-400 transition-colors text-xl"><FaWhatsapp /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors text-xl"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition-colors text-xl"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Footer */}
      <div className={`md:hidden fixed bottom-0 left-0 w-full bg-blue-900 p-3 flex justify-around items-center shadow-lg z-50 transition-transform duration-500 ${showMobile ? "translate-y-0" : "translate-y-20"}`}>
        <a href="https://wa.me/13050000000" target="_blank" rel="noreferrer" className="flex flex-col items-center text-white hover:text-green-400 transition-colors">
          <FaWhatsapp className="text-2xl" />
          <span className="text-xs mt-1">WhatsApp</span>
        </a>
        <a href="mailto:contact@flashipping.com" className="flex flex-col items-center text-white hover:text-gray-300 transition-colors">
          <FaEnvelope className="text-2xl" />
          <span className="text-xs mt-1">Email</span>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex flex-col items-center text-white hover:text-pink-400 transition-colors">
          <FaInstagram className="text-2xl" />
          <span className="text-xs mt-1">Instagram</span>
        </a>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 border-t border-blue-800 pt-3 text-sm text-gray-300 md:mt-0">
        © {new Date().getFullYear()} Flashipping – Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
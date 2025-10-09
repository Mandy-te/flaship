import React from "react";
import { FaWhatsapp, FaEnvelope, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-6">
        {/* Desktop: grid 3 kolòn */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3">Flashipping</h3>
            <p className="text-gray-200 text-sm">
              Votre partenaire logistique entre les États-Unis et Haïti. Rapide, fiable et sécurisé !
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Liens utiles</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-blue-300">Services</a></li>
              <li><a href="#tarifs" className="hover:text-blue-300">Tarifs</a></li>
              <li><a href="#tracking" className="hover:text-blue-300">Suivi colis</a></li>
              <li><a href="#contact" className="hover:text-blue-300">Nous contacter</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Nos adresses</h4>
            <p className="text-sm">📍 Miami, FL, USA</p>
            <p className="text-sm">📍 Cap-Haïtien, Haïti</p>
            <p className="mt-3 text-sm">📞 WhatsApp : +1 (305) 000-0000</p>
            <p className="text-sm">📧 contact@flashipping.com</p>
          </div>
        </div>

        {/* Mobile: icons + adrès */}
        <div className="md:hidden flex flex-col items-center space-y-3">
          <div className="flex justify-around w-full max-w-xs">
            <a href="https://wa.me/13050000000" target="_blank" rel="noopener noreferrer" className="text-2xl">
              <FaWhatsapp />
            </a>
            <a href="mailto:contact@flashipping.com" className="text-2xl">
              <FaEnvelope />
            </a>
            <a href="https://instagram.com/flashipping" target="_blank" rel="noopener noreferrer" className="text-2xl">
              <FaInstagram />
            </a>
          </div>
          <div className="text-center text-sm">
            <p>📍 Miami, FL, USA</p>
            <p>📍 Cap-Haïtien, Haïti</p>
          </div>
        </div>
      </div>

      <div className="text-center mt-6 border-t border-blue-800 pt-4 text-sm text-gray-300">
        © {new Date().getFullYear()} Flashipping – Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
import React, { useEffect, useState } from "react";
import { FaWhatsapp, FaEnvelope, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) setShowButtons(true);
      else setShowButtons(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="bg-blue-900 text-white mt-10 md:mt-20">
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

        {/* Mobile: sticky buttons */}
        <div
  className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 bg-blue-800 px-4 py-2 rounded-full shadow-lg z-50 transition-all duration-500 ${
    showButtons ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
  } md:hidden`}
>
  <a
    href="https://wa.me/50943314028"
    target="_blank"
    rel="noopener noreferrer"
    className="text-2xl text-white p-2 rounded-full hover:bg-green-500 hover:scale-110 transition-transform duration-300 shadow-md"
  >
    <FaWhatsapp />
  </a>
  <a
    href="mailto:flashipping123.com"
    className="text-2xl text-white p-2 rounded-full hover:bg-yellow-500 hover:scale-110 transition-transform duration-300 shadow-md"
  >
    <FaEnvelope />
  </a>
  <a
    href="https://instagram.com/fla.shipping_15"
    target="_blank"
    rel="noopener noreferrer"
    className="text-2xl text-white p-2 rounded-full hover:bg-pink-500 hover:scale-110 transition-transform duration-300 shadow-md"
  >
    <FaInstagram />
  </a>
</div>

        {/* Mobile: addresses below buttons */}
        <div className="md:hidden text-center mt-2 text-sm text-gray-200">
          <p>📍 Miami, FL, USA</p>
          <p>📍 Cap-Haïtien, Haïti</p>
        </div>
      </div>

      <div className="text-center mt-6 border-t border-blue-800 pt-4 text-sm text-gray-300">
        © {new Date().getFullYear()} Flashipping – Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
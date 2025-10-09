import React, { useState } from "react";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-blue-900 text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Desktop: grid visible only on md+ */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {/* Kolòn 1 */}
          <div>
            <h3 className="font-bold text-lg mb-3">Flashipping</h3>
            <p className="text-gray-200 text-sm">
              Votre partenaire logistique entre les États-Unis et Haïti. Rapide, fiable et sécurisé !
            </p>
          </div>

          {/* Kolòn 2 */}
          <div>
            <h4 className="font-semibold mb-3">Liens utiles</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-blue-300">Services</a></li>
              <li><a href="#tarifs" className="hover:text-blue-300">Tarifs</a></li>
              <li><a href="#tracking" className="hover:text-blue-300">Suivi colis</a></li>
              <li><a href="#contact" className="hover:text-blue-300">Nous contacter</a></li>
            </ul>
          </div>

          {/* Kolòn 3 */}
          <div>
            <h4 className="font-semibold mb-3">Nos adresses</h4>
            <p className="text-sm">📍 Miami, FL, USA</p>
            <p className="text-sm">📍 Cap-Haïtien, Haïti</p>
            <p className="mt-3 text-sm">📞 WhatsApp : +1 (305) 000-0000</p>
            <p className="text-sm">📧 contact@flashipping.com</p>
          </div>
        </div>

        {/* Mobile: icons only */}
        <div className="md:hidden flex justify-around">
          <button onClick={() => toggleSection("info")} className="text-2xl">📦</button>
          <button onClick={() => toggleSection("links")} className="text-2xl">💲</button>
          <button onClick={() => toggleSection("contact")} className="text-2xl">📍</button>
        </div>

        {/* Mobile: toggled sections */}
        <div className="md:hidden mt-4 space-y-3 text-sm">
          {openSection === "info" && (
            <p>Votre partenaire logistique entre les États-Unis et Haïti. Rapide, fiable et sécurisé !</p>
          )}
          {openSection === "links" && (
            <ul className="space-y-1">
              <li><a href="#services" className="hover:text-blue-300">Services</a></li>
              <li><a href="#tarifs" className="hover:text-blue-300">Tarifs</a></li>
              <li><a href="#tracking" className="hover:text-blue-300">Suivi colis</a></li>
              <li><a href="#contact" className="hover:text-blue-300">Nous contacter</a></li>
            </ul>
          )}
          {openSection === "contact" && (
            <div className="space-y-1">
              <p>📍 Miami, FL, USA</p>
              <p>📍 Cap-Haïtien, Haïti</p>
              <p>📞 WhatsApp : +1 (305) 000-0000</p>
              <p>📧 contact@flashipping.com</p>
            </div>
          )}
        </div>
      </div>

      <div className="text-center mt-6 border-t border-blue-800 pt-4 text-sm text-gray-300">
        © {new Date().getFullYear()} Flashipping – Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
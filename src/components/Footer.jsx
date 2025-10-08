import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Colonne 1 */}
        <div>
          <h3 className="font-bold text-lg mb-3">Flashipping</h3>
          <p className="text-gray-200 text-sm">
            Votre partenaire logistique entre les États-Unis et Haïti. 
            Rapide, fiable et sécurisé !
          </p>
        </div>

        {/* Colonne 2 */}
        <div>
          <h4 className="font-semibold mb-3">Liens utiles</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#services" className="hover:text-blue-300">Services</a></li>
            <li><a href="#tarifs" className="hover:text-blue-300">Tarifs</a></li>
            <li><a href="#tracking" className="hover:text-blue-300">Suivi colis</a></li>
            <li><a href="#contact" className="hover:text-blue-300">Nous contacter</a></li>
          </ul>
        </div>

        {/* Colonne 3 */}
        <div>
          <h4 className="font-semibold mb-3">Nos adresses</h4>
          <p className="text-sm">📍 Miami, FL, USA</p>
          <p className="text-sm">📍 Cap-Haïtien, Haïti</p>
          <p className="mt-3 text-sm">📞 WhatsApp : +1 (305) 000-0000</p>
          <p className="text-sm">📧 contact@flashipping.com</p>
        </div>
      </div>

      <div className="text-center mt-8 border-t border-blue-800 pt-4 text-sm text-gray-300">
        © {new Date().getFullYear()} Flashipping – Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
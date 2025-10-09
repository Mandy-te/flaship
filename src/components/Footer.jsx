import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 py-6 space-y-6 md:grid md:grid-cols-2 md:gap-8">
        {/* Kolòn 1: Flashipping + Liens */}
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-lg">Flashipping</h3>
            <p className="text-gray-200 text-sm">
              Votre partenaire logistique entre les États-Unis et Haïti. Rapide, fiable et sécurisé !
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Liens utiles</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#services" className="hover:text-blue-300">📦 Services</a></li>
              <li><a href="#tarifs" className="hover:text-blue-300">💲 Tarifs</a></li>
              <li><a href="#tracking" className="hover:text-blue-300">🚚 Suivi colis</a></li>
              <li><a href="#contact" className="hover:text-blue-300">✉️ Nous contacter</a></li>
            </ul>
          </div>
        </div>

        {/* Kolòn 2: Adrès & kontak */}
        <div className="space-y-3">
          <h4 className="font-semibold mb-2">Nos adresses & contacts</h4>
          <p className="text-sm">📍 Miami, FL, USA</p>
          <p className="text-sm">📍 Cap-Haïtien, Haïti</p>
          <p className="text-sm">📞 WhatsApp : +1 (305) 000-0000</p>
          <p className="text-sm">📧 contact@flashipping.com</p>
        </div>
      </div>

      <div className="text-center mt-6 border-t border-blue-800 pt-4 text-sm text-gray-300">
        © {new Date().getFullYear()} Flashipping – Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
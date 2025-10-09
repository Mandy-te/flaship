import React from "react";
import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <div className="text-center px-6 py-10 bg-gray-900 text-white rounded-2xl max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Prêt à expédier avec nous ?</h2>
      <p className="text-gray-300 mb-6">Rejoignez des centaines d’utilisateurs satisfaits dès aujourd’hui.</p>
      <Link
        to="/sign-in"
        className="bg-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-block"
      >
        Créer un compte
      </Link>
    </div>
  );
};

export default FinalCTA;
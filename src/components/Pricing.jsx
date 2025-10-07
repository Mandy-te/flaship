import { motion } from "framer-motion";
import { Package, DollarSign, AlertTriangle } from "lucide-react";

export default function Pricing() {
  return (
    <section className="py-16 bg-gray-50" id="pricing">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 mb-10"
        >
          Tarifs Flashipping ✈️
        </motion.h2>

        {/* Main Pricing Table */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Tarif Principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform"
          >
            <Package className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Tarif Standard</h3>
            <p className="text-gray-600 mb-4">États-Unis → Okap</p>
            <p className="text-3xl font-bold text-blue-600 mb-2">$5 / lb</p>
            <p className="text-sm text-gray-500">Prix fixe pour tout colis non fragile.</p>
          </motion.div>

          {/* Frè Sèvis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform"
          >
            <DollarSign className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Frè Sèvis</h3>
            <ul className="text-gray-700 space-y-2 text-left">
              <li><strong>&lt; 2 lb :</strong> Pa gen frè (pri minimòm total $10)</li>
              <li><strong>2 – 15 lb :</strong> Frè sèvis $10</li>
              <li><strong>16 – 40 lb :</strong> Frè sèvis $20</li>
            </ul>
          </motion.div>

          {/* Koli Frajil */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform"
          >
            <AlertTriangle className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Koli Frajil / Valè Elve</h3>
            <p className="text-gray-700">
              Frè kalkile an pousantaj sou valè machandiz la.
            </p>
            <p className="text-sm text-gray-500 mt-2">(Ant 5% – 10%)</p>
          </motion.div>
        </div>

        {/* Notes */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="bg-yellow-50 mt-10 p-6 rounded-xl border border-yellow-200 text-left"
        >
          <h4 className="text-lg font-semibold mb-2">📝 Nòt Enpòtan</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Pri yo pa enkli dwan si sa rive aplike sou machandiz espesifik.</li>
            <li>Tout kalkil ap fèt otomatikman nan kalkilatè tarif sou sit la.</li>
            <li>Frè sèvis yo ajoute sou pri transpò $5/lb la.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
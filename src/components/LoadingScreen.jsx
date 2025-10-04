import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Splash ap dire 2.5s
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      {/* Avyon kap travèse ekran */}
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: "100vw" }}
        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
        className="text-6xl"
      >
        ✈️
      </motion.div>

      {/* Logo + Tèks Loading */}
      <motion.div
        className="absolute flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <img
          src="/assets/images/flashipping-logo.png"
          alt="Flashipping Logo"
          className="w-28 mb-4"
        />
        <p className="text-lg font-semibold text-gray-700">
          Shipping your dreams...
        </p>
      </motion.div>
    </div>
  );
}

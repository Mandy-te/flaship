import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-indigo-50 to-white py-24 px-6 md:px-16 text-center relative overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight"
      >
        Ship Smarter with <span className="text-indigo-600">Flashipping</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg"
      >
        Fast, reliable, and affordable shipping from anywhere to everywhere.
        Simplify your logistics today with our all-in-one platform.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <button className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition">
          Start Shipping Now
        </button>
        <button className="px-8 py-4 bg-gray-100 text-gray-800 rounded-xl font-semibold hover:bg-gray-200 transition">
          Learn More
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 -z-10 flex justify-center items-center"
      >
        <div className="w-[600px] h-[600px] bg-indigo-200 blur-3xl rounded-full"></div>
      </motion.div>
    </section>
  );
}
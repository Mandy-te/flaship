import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import Testimonials from "../components/Testimonials";
import LoadingScreen from "../components/LoadingScreen";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  const flyers = [
    "/assets/images/flyer1.png",
    "/assets/images/flyer2.png"
  ];

  const testimonials = [
    { image: "/assets/images/testimonial1.png", name: "Jean", message: "Sèvis ekselan!" },
    { image: "/assets/images/testimonial2.png", name: "Marie", message: "Trè rapid ak serye." }
  ];

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <motion.section
        className="bg-blue-50 py-16 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold mb-4">Flashipping 🚀</h1>
        <p className="text-lg mb-6">
          Fasilite voye ak resevwa koli Etazini → Ayiti. Sèvis rapid, serye, ak pri klè.
        </p>
        <div className="flex justify-center gap-4">
          <motion.a whileHover={{ scale: 1.1 }} href="/tracking" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Tracking</motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href="/calculator" className="px-4 py-2 bg-green-600 text-white rounded-lg">Kalkilatè Tarif</motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href="/signup" className="px-4 py-2 bg-purple-600 text-white rounded-lg">Sign Up</motion.a>
        </div>
      </motion.section>

      {/* Flyers Carousel */}
      <motion.section
        className="py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">Piblisite / Flyers</h2>
        <Carousel images={flyers} />
      </motion.section>

      {/* Testimonials */}
      <motion.section
        className="py-16 bg-gray-50"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">Temwayaj Kliyan</h2>
        <Testimonials testimonials={testimonials} />
      </motion.section>

      {/* Tarif */}
      <motion.section
        className="py-16 text-center"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-8">Tarif & Limit Koli</h2>
        <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            className="border p-6 rounded shadow"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="font-bold text-xl mb-2">Shipping Pa Pwa</h3>
            <p>$5 pou chak liv</p>
            <p>Frè sèvis varye selon pwa & nati koli (frajil, gwo valè)</p>
          </motion.div>
          <motion.div
            className="border p-6 rounded shadow"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="font-bold text-xl mb-2">Limit Koli</h3>
            <ul className="text-left">
              <li>- Pwa {"<"} 2 liv → Flat $10</li>
              <li>- 2-15 liv → $10</li>
              <li>- 16-40 liv → $20</li>
              <li>- Koli frajil / depase $200 → frè an pousantaj sou valè</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Adrès */}
      <motion.section
        className="py-16 bg-blue-50 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-8">Kontakte Nou</h2>
        <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            className="border p-6 rounded shadow"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="font-bold text-xl mb-2">Miami, USA</h3>
            <p>1234 NW 12th Ave</p>
            <p>Miami, FL 33136</p>
            <p>Email: miami@flashipping.com</p>
          </motion.div>
          <motion.div
            className="border p-6 rounded shadow"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="font-bold text-xl mb-2">Port-au-Prince, Ayiti</h3>
            <p>56 Rue Capois</p>
            <p>Port-au-Prince, Haiti</p>
            <p>Email: haiti@flashipping.com</p>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function FloatingTrackButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) setVisible(true);
      else setVisible(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`md:hidden fixed bottom-24 right-4 z-50 transition-all duration-500
      ${visible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"}`}>
      <Link
        to="/tracking"
        className="bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 flex items-center gap-2"
      >
        📦 Suivi Colis
      </Link>
    </div>
  );
}
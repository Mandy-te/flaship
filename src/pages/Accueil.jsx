import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import TrackingCTA from "../components/TrackingCTA";
import Testimonials from "../components/Testimonials";
import FinalCTA from "../components/FinalCTA";

const Accueil = () => {
  return (
    <div className="w-full overflow-hidden">
      <section id="accueil" className="pt-20"><Hero /></section>
      <section id="about" className="py-16 bg-gray-50"><About /></section>
      <section id="services" className="py-16"><Services /></section>
      <section id="tarifs" className="py-16 bg-gray-50"><Pricing /></section>
      <section id="tracking" className="py-16"><TrackingCTA /></section>
      <section id="testimonials" className="py-16 bg-gray-50"><Testimonials /></section>
      <section id="cta-final" className="py-20"><FinalCTA /></section>
    </div>
  );
};

export default Accueil;

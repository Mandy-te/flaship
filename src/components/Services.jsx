import React from "react";

const Services = () => {
  const services = [
    { title: "Achat en ligne", desc: "Nous achetons pour vous sur les sites américains." },
    { title: "Expédition rapide", desc: "Livraison express USA → Haïti en un temps record." },
    { title: "Suivi en temps réel", desc: "Suivez vos colis directement depuis votre tableau de bord." },
  ];

  return (
    <section className="px-6 md:px-20 text-center">
      <h2 className="text-3xl font-bold text-blue-700 mb-10">Nos Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((srv, i) => (
          <div key={i} className="p-6 rounded-xl shadow-md hover:shadow-lg transition bg-white">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{srv.title}</h3>
            <p className="text-gray-600">{srv.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
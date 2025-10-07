// src/components/Pricing.jsx
export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      desc: "For individuals sending small packages occasionally.",
      features: [
        "Up to 3 shipments / month",
        "Basic tracking",
        "Email support",
      ],
      highlight: false,
    },
    {
      name: "Pro",
      price: "$19/mo",
      desc: "Perfect for small businesses and frequent shippers.",
      features: [
        "Unlimited shipments",
        "Advanced tracking",
        "Priority support",
        "Discounted rates",
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "Tailored logistics solutions for large-scale operations.",
      features: [
        "Dedicated account manager",
        "API integrations",
        "Custom pricing",
        "24/7 premium support",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16 text-center" id="pricing">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
        Choose Your Plan
      </h2>
      <p className="text-gray-600 mb-12 max-w-xl mx-auto">
        Transparent pricing designed for flexibility and growth.
      </p>

      <div className="grid gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl border ${
              plan.highlight
                ? "bg-white shadow-2xl border-indigo-500 scale-105"
                : "bg-white shadow-md border-gray-200"
            } p-8 transition-all`}
          >
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <p className="text-gray-600 mb-6">{plan.desc}</p>
            <p className="text-4xl font-extrabold text-indigo-600 mb-6">
              {plan.price}
            </p>
            <ul className="space-y-3 mb-8 text-gray-700">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center justify-center gap-2">
                  ✅ <span>{f}</span>
                </li>
              ))}
            </ul>
            <button
              className={`px-6 py-3 rounded-xl font-semibold ${
                plan.highlight
                  ? "bg-indigo-600 text-white hover:bg-indigo-700"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              } transition`}
            >
              {plan.highlight ? "Get Started" : "Learn More"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
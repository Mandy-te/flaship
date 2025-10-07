import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sophia M.",
    role: "E-commerce Owner",
    comment:
      "Flashipping made my delivery process effortless! I now manage all my orders in one place — fast and reliable every single time.",
    rating: 5,
    avatar:
      "https://randomuser.me/api/portraits/women/79.jpg",
  },
  {
    name: "James P.",
    role: "Freelancer",
    comment:
      "Affordable shipping, transparent tracking, and top-notch customer support. I couldn’t ask for more.",
    rating: 5,
    avatar:
      "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Maya K.",
    role: "Dropshipper",
    comment:
      "Flashipping has revolutionized how I handle my shipments — super fast and zero headaches!",
    rating: 4,
    avatar:
      "https://randomuser.me/api/portraits/women/45.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-24 px-6 md:px-16 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
      >
        What Our Clients Say
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-gray-600 mb-16 max-w-2xl mx-auto"
      >
        Don’t just take our word for it — here’s what our customers have experienced
        using Flashipping.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-10">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition"
          >
            <img
              src={t.avatar}
              alt={t.name}
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="font-semibold text-gray-900 text-xl">{t.name}</h3>
            <p className="text-sm text-gray-500">{t.role}</p>

            <div className="flex justify-center mt-3 mb-4">
              {[...Array(t.rating)].map((_, idx) => (
                <Star
                  key={idx}
                  className="text-yellow-400 fill-yellow-400 w-5 h-5"
                />
              ))}
            </div>

            <p className="text-gray-600 italic">“{t.comment}”</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
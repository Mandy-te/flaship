export default function Testimonials({ testimonials }) {
  return (
    <div className="max-w-4xl mx-auto py-10 grid grid-cols-1 md:grid-cols-2 gap-6">
      {testimonials.map((t, i) => (
        <div key={i} className="border p-4 rounded shadow">
          <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full mx-auto mb-2"/>
          <p className="text-center italic">"{t.message}"</p>
          <p className="text-center font-bold mt-2">{t.name}</p>
        </div>
      ))}
    </div>
  );
}

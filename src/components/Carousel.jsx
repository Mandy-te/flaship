import { useState } from "react";

export default function Carousel({ images }) {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => setCurrent((current + 1) % length);
  const prevSlide = () => setCurrent((current - 1 + length) % length);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <button onClick={prevSlide} className="absolute top-1/2 left-2 bg-white p-2 rounded-full z-10">◀</button>
      <button onClick={nextSlide} className="absolute top-1/2 right-2 bg-white p-2 rounded-full z-10">▶</button>

      {images.map((img, index) => (
        <div key={index} className={index === current ? "block" : "hidden"}>
          <img src={img} alt={`Slide ${index}`} className="w-full rounded-lg shadow-lg" />
        </div>
      ))}
    </div>
  );
}

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Calculator() {
  const [weight, setWeight] = useState("");
  const [type, setType] = useState("normal");
  const [price, setPrice] = useState(null);

  const calculatePrice = () => {
    let base = 5 * parseFloat(weight || 0);
    let serviceFee = 0;

    if (type === "fragile") serviceFee = 20;
    else if (parseFloat(weight) > 15) serviceFee = 15;

    setPrice(base + serviceFee);
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-md mx-auto py-10">
        <h2 className="text-xl font-bold mb-4">Kalkilatè Tarif</h2>
        <input type="number" placeholder="Pwa an liv" value={weight} onChange={e=>setWeight(e.target.value)} className="border p-2 w-full mb-2"/>
        <select value={type} onChange={e=>setType(e.target.value)} className="border p-2 w-full mb-2">
          <option value="normal">Normal</option>
          <option value="fragile">Frajil</option>
        </select>
        <button onClick={calculatePrice} className="px-4 py-2 bg-green-600 text-white rounded-lg mb-2">Kalkile</button>
        {price !== null && <p className="mt-2 text-lg font-bold">Pri Shipping: ${price}</p>}
      </div>
      <Footer />
    </div>
  );
}

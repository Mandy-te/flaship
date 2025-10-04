import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    setMessage("Fonksyon login pral konekte ak backend pita.");
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-md mx-auto py-10">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input type="email" placeholder="Imel ou" value={email} onChange={e=>setEmail(e.target.value)} className="border p-2 w-full mb-2"/>
        <input type="password" placeholder="Modpas" value={password} onChange={e=>setPassword(e.target.value)} className="border p-2 w-full mb-2"/>
        <button onClick={handleLogin} className="px-4 py-2 bg-blue-600 text-white rounded-lg">Login</button>
        {message && <p className="mt-2">{message}</p>}
      </div>
      <Footer />
    </div>
  );
}

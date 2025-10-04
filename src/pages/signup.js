import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [generatedCode, setGeneratedCode] = useState(null);
  const [message, setMessage] = useState("");

  const sendCode = () => {
    const newCode = Math.floor(100000 + Math.random() * 900000);
    setGeneratedCode(newCode);

    emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      { to_name: name, to_email: email, code: newCode },
      "YOUR_PUBLIC_KEY"
    ).then(
      () => setMessage("Kòd verifikasyon voye nan imel ou!"),
      (err) => setMessage("Erè nan voye imel: " + err.text)
    );
  };

  const verifyCode = () => {
    if (parseInt(code) === generatedCode) {
      setMessage("Kòd valide! Kont kreye avèk siksè.");
    } else {
      setMessage("Kòd pa kòrèk. Eseye ankò.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-md mx-auto py-10">
        <h2 className="text-xl font-bold mb-4">Enskri</h2>
        <input type="text" placeholder="Non ou" value={name} onChange={e=>setName(e.target.value)} className="border p-2 w-full mb-2"/>
        <input type="email" placeholder="Imel ou" value={email} onChange={e=>setEmail(e.target.value)} className="border p-2 w-full mb-2"/>
        <input type="password" placeholder="Modpas" value={password} onChange={e=>setPassword(e.target.value)} className="border p-2 w-full mb-2"/>
        <button onClick={sendCode} className="px-4 py-2 bg-blue-600 text-white rounded-lg mb-2">Voye Kòd</button>

        {generatedCode && (
          <>
            <input type="text" placeholder="Antre kòd 6 chif" value={code} onChange={e=>setCode(e.target.value)} className="border p-2 w-full mb-2"/>
            <button onClick={verifyCode} className="px-4 py-2 bg-green-600 text-white rounded-lg">Verifye Kòd</button>
          </>
        )}
        {message && <p className="mt-2">{message}</p>}
      </div>
      <Footer />
    </div>
  );
}

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="max-w-4xl mx-auto py-10 text-center">
        <h1 className="text-4xl font-bold mb-4">🚀 Flashipping</h1>
        <p className="text-lg mb-6">
          Sèvis rapid ak serye pou voye ak resevwa koli Etazini → Ayiti
        </p>
        <div className="flex justify-center gap-4">
          <a href="/tracking" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Tracking</a>
          <a href="/calculator" className="px-4 py-2 bg-green-600 text-white rounded-lg">Kalkilatè Tarif</a>
          <a href="/login" className="px-4 py-2 bg-gray-600 text-white rounded-lg">Login</a>
          <a href="/signup" className="px-4 py-2 bg-purple-600 text-white rounded-lg">Sign Up</a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

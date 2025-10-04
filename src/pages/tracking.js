import { useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Tracking() {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleTrack = async () => {
    setLoading(true)
    setError("")
    setResult(null)
    try {
      const res = await fetch("/.netlify/functions/tracking", {
        method: "POST",
        body: JSON.stringify({ trackingNumber }),
      })
      const data = await res.json()
      if (data.error) setError(data.error)
      else setResult(data)
    } catch (err) {
      setError("Erè rezo. Eseye ankò.")
    }
    setLoading(false)
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-md mx-auto py-10">
        <h2 className="text-xl font-bold mb-4">Suiv Koli</h2>
        <input
          type="text"
          placeholder="Antre nimewo tracking"
          className="border p-2 w-full mb-3"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
        />
        <button
          onClick={handleTrack}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          {loading ? "Chaje..." : "Suiv Koli"}
        </button>
        {error && <p className="mt-4 text-red-600">{error}</p>}
        {result && (
          <div className="mt-4 border p-4 rounded">
            <p><strong>Number:</strong> {result.number}</p>
            <p><strong>Customer:</strong> {result.customer}</p>
            <p><strong>Status:</strong> {result.status}</p>
            <p><strong>Shipped:</strong> {result.shipped}</p>
            <p><strong>ETA:</strong> {result.eta}</p>
            <p><strong>Remarks:</strong> {result.remarks}</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

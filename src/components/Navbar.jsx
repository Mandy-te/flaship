import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <Link href="/">
        <span className="text-xl font-bold cursor-pointer">Flashipping 🚀</span>
      </Link>
      <div className="flex gap-4">
        <Link href="/tracking" className="hover:underline">Tracking</Link>
        <Link href="/calculator" className="hover:underline">Kalkilatè</Link>
        <Link href="/login" className="hover:underline">Login</Link>
        <Link href="/signup" className="hover:underline">Sign Up</Link>
      </div>
    </nav>
  );
}

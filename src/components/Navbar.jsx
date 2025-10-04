import Link from "next/link";
import Image from "next/image"; // Next.js optimize image

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <Link href="/">
        <div className="flex items-center gap-2 cursor-pointer">
          <Image
            src="/assets/images/flashipping-logo.png" // chemen logo
            alt="Flashipping Logo"
            width={40}
            height={40}
          />
          <span className="text-xl font-bold">Flashipping 🚀</span>
        </div>
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

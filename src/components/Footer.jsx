export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-10 text-center">
      <p>© {new Date().getFullYear()} Flashipping. Tout dwa rezève.</p>
      <p>Kontakte nou: <a href="mailto:info@flashipping.com" className="underline">info@flashipping.com</a></p>
    </footer>
  );
}

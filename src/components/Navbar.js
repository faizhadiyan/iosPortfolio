// src/components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <div className="font-bold">My Portfolio</div>
        <div>
          <Link href="/" className="mx-2">
            Home
          </Link>
          <Link href="/projects" className="mx-2">
            Projects
          </Link>
          <Link href="/about" className="mx-2">
            About
          </Link>
          <Link href="/contact" className="mx-2">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

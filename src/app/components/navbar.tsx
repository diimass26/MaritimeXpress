"use client";
// components/Navbar.tsx
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Service" },
    { href: "/track", label: "Track" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="w-full h-[101px] bg-gradient-to-r from-[#193759] via-[#27548A] to-[#27548A] px-10 flex items-center justify-between relative">
      {/* Logo */}
      <div className="w-[371px] h-[45px] relative">
        <Image
          src="/MaritimeXpress-Logo-White.png"
          alt="PT. MaritimeXpress Logo"
          width={371}
          height={45}
          className="object-contain"
        />
      </div>

      {/* Menu */}
      <div className="flex space-x-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-2xl font-medium ${
              pathname === link.href
                ? "text-[#EAB919] font-bold"
                : "text-white"
            } hover:text-[#EAB919] transition-colors duration-200`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

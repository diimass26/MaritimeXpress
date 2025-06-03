"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Service", hasDropdown: true },
    { href: "/track", label: "Track" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const serviceDropdown = [
    { href: "/services/sea-freight", label: "Sea Freight" },
    { href: "/services/customs-clearance", label: "Customs Clearance" },
    { href: "/services/warehousing", label: "Warehousing" },
  ];

  // Detect mobile viewport
  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  // Close dropdown on outside click (mobile only)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    if (dropdownOpen && isMobile) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen, isMobile]);

  return (
    <nav className="w-full h-[101px] bg-gradient-to-r from-[#193759] via-[#27548A] to-[#27548A] px-10 flex items-center justify-between relative z-50">
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
      <div className="flex space-x-8 items-center relative">
        {navLinks.map((link) =>
          link.hasDropdown ? (
            <div
              key={link.href}
              className="relative group"
              ref={dropdownRef}
              onMouseEnter={() => !isMobile && setDropdownOpen(true)}
              onMouseLeave={() => !isMobile && setDropdownOpen(false)}
            >
              <Link
                href={link.href}
                onClick={(e) => {
                  if (isMobile) {
                    e.preventDefault(); // prevent redirect on first tap
                    setDropdownOpen((prev) => !prev);
                  }
                }}
                className={`text-2xl font-light flex items-center gap-1 cursor-pointer ${
                  pathname.startsWith("/services")
                    ? "text-[#EAB919] font-bold"
                    : "text-white"
                } hover:text-[#EAB919] transition-colors duration-200`}
              >
                {link.label}
                <svg
                  className={`w-4 h-4 mt-1 transition-transform ${
                    dropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>

              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-0 group-hover:block w-48 bg-[#27548A] rounded-md shadow-lg z-50">
                  {serviceDropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-white hover:bg-[#EAB919] hover:text-[#193759] transition-colors duration-200 rounded-md"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              className={`text-2xl ${
                pathname === link.href
                  ? "text-[#EAB919] font-medium"
                  : "text-white font-light"
              } hover:text-[#EAB919] transition-colors duration-200`}
            >
              {link.label}
            </Link>
          )
        )}
      </div>
    </nav>
  );
}

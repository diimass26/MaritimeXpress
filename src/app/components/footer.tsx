"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#193759] via-[#27548A] to-[#27548A] text-white font-inter">
      <div className="max-w-[1440px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-[50px_1fr_1fr_1fr] gap-12">

        {/* Kolom Kosong */}
        <div></div>

        {/* Kolom 1: Menu Navigasi */}
        <div className="flex flex-col gap-1">
          <h4 className="text-xl font-semibold">Menu</h4>
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/service" className="hover:underline">Service</Link>
          <Link href="/track" className="hover:underline">Track</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>

        {/* Kolom 2: Layanan */}
        <div className="flex flex-col gap-1">
          <h4 className="text-xl font-semibold">Service</h4>
          <Link href="/service#sea-freight" className="hover:underline">Sea Freight</Link>
          <Link href="/service#customs-clearance" className="hover:underline">Customs Clearance</Link>
          <Link href="/service#warehousing" className="hover:underline">Warehousing</Link>
        </div>

        {/* Kolom 3: Kontak, Logo, Sosial Media */}
        <div className="flex flex-col gap-1">
          {/* Logo */}
          <Image
            src="/MaritimeXpress-Logo-White.png"
            alt="MaritimeXpress Logo"
            width={260}
            height={36}
            className="mb-2"
          />

          {/* Kontak */}
          <div className="text-base font-light">
            <p><span className="font-normal">Phone</span>: 0887 7665 5443</p>
            <p><span className="font-normal">Email</span>: MaritimeXpress@gmail.com</p>
            <p className="whitespace-pre-line mt-1">
              <span className="font-normal">Location</span>:{"\n"}
              Jl. Raya Dompak No.01,{"\n"}
              Kota Tanjungpinang,{"\n"}
              Provinsi Kepulauan Riau, 29124
            </p>
          </div>

          {/* Social Media */}
          <div className="flex gap-4 mt-4">
            <a href="#"><Image src="/instagram-white.png" alt="Instagram" width={20} height={20} /></a>
            <a href="#"><Image src="/linkedin-white.png" alt="LinkedIn" width={20} height={20} /></a>
            <a href="#"><Image src="/tiktok-white.png" alt="TikTok" width={20} height={20} /></a>
            <a href="#"><Image src="/youtube-white.png" alt="YouTube" width={20} height={20} /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-white text-base font-light py-4 border-t border-white/30">
        &copy; {new Date().getFullYear()} - PT. MaritimeXpress
      </div>
    </footer>
  );
}

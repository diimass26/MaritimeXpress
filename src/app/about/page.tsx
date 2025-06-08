"use client"

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function AboutPage() {
  const content = useRef<HTMLElement | null>(null);
  const [scrolledToContent, setScrolledToContent] = useState(false);

  // Scroll button
  useEffect(() => {
    const handleScroll = () => {
      const contentSection = content.current;
      if (!contentSection) return;
      
      const topSection = contentSection.offsetTop - 101;
      const scrollPosition = window.scrollY;

      setScrolledToContent(scrollPosition >= topSection - 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    if (scrolledToContent) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const contentSection = content.current;
      if (contentSection) {
        window.scrollTo({
          top: contentSection.offsetTop - 101,
          behavior: 'smooth',
        });
      }
    }
  };
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[720px]">
        <Image
          src="/hero-about.png"
          alt="About Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-stone-700/60" />
        
        <div className="absolute inset-0 flex justify-end items-center">
          <div className="text-white px-4 sm:px-8 md:px-12 max-w-3xl text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium mb-6">
              About Us
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl font-normal leading-relaxed">
              MaritimeXpress adalah perusahaan logistik maritim yang menyediakan
              solusi pengiriman cepat, aman, dan efisien di wilayah kepulauan dan
              lintas negara. Dengan teknologi terkini dan armada laut yang andal,
              kami menghubungkan pelabuhan-pelabuhan utama dan mempercepat
              distribusi barang dengan mengutamakan ketepatan waktu, transparansi,
              dan kepuasan pelanggan.
            </p>
          </div>
        </div>
      </section>

      {/* Visi & Misi Section */}
      <section ref={content} className="w-full py-20 px-4 bg-[#F5F5F5] flex flex-col items-center">
      {/* Judul di luar card */}
      <h2 className="text-4xl font-semibold text-[#27548A] text-center mb-12">Visi & Misi</h2>

      {/* Card biru tanpa rounded */}
      <div className="w-full max-w-6xl bg-[#27548A] px-8 py-12 text-white flex flex-col gap-12 shadow-xl">
          
          {/* Visi */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <h3 className="text-4xl font-normal w-full md:w-[200px] text-center md:text-center">Visi</h3>
          <p className="text-xl font-extralight max-w-4xl text-center md:text-center">
              Menjadi perusahaan logistik maritim terdepan di Asia Tenggara yang mendorong konektivitas dan efisiensi distribusi antar wilayah kepulauan.
          </p>
          </div>

          {/* Misi */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <h3 className="text-4xl font-normal w-full md:w-[200px] text-center md:text-center">Misi</h3>
          <p className="text-xl font-extralight max-w-4xl text-center md:text-center">
              Menyediakan layanan logistik maritim yang inovatif, handal, dan berkelanjutan dengan mengedepankan teknologi, kecepatan, dan pelayanan terbaik untuk memenuhi kebutuhan distribusi pelanggan.
          </p>
          </div>
      </div>
      </section>

      {/* Scroll Down Button */}
      <button
        onClick={handleClick}
        className="fixed bottom-6 right-6 z-40 bg-blue-900 text-white text-[1.5rem] p-4 w-16 h-16 rounded-full shadow-lg hover:bg-blue-700 transition-all"
        aria-label={scrolledToContent ? "Scrolled to content" : "Scrolled to top"}
      >
        <span
          className={`inline-block transition-transform duration-500 ease-in-out ${
            scrolledToContent ? 'rotate-180' : 'rotate-0'
          }`}
        >
          ↓
        </span>
      </button>
    </>
  );
}

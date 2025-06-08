"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function ServicePage() {
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
          src="/hero-services.jpg"
          alt="Service Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#393533] opacity-60" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h2 className="text-6xl font-medium mb-4 italic">Our Service</h2>
          <p className="text-4xl font-normal max-w-[800px]">
            Excellent Services for Your Logistics Needs
          </p>
        </div>
      </section>

      {/* Our Services Section */}
      <section ref={content} className="w-full max-w-6xl py-20 px-4 mx-auto">
        <h2 className="text-4xl font-semibold text-blue-900 text-center mb-12">
          Our Services
        </h2>

        <div className="grid grid-cols-1 gap-8">

          {/* Service Card - Sea Freight */}
          <div className="flex w-full max-w-[879px] h-64 mx-auto">
            {/* Left Image */}
            <div
              className="w-1/2 h-full bg-cover bg-center relative rounded-[10px] overflow-hidden"
              style={{ backgroundImage: `url('/hero-sea-freight.jpg')` }}
            >
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <span className="text-white text-xl font-medium font-['Inter']">
                  Sea Freight
                </span>
              </div>
            </div>

            {/* Right Text */}
            <div className="w-1/2 py-6 pl-6 flex flex-col justify-between">
              <div>
                <h3 className="text-blue-900 text-2xl font-medium font-['Inter'] mb-2">
                  Sea Freight
                </h3>
                <p className="text-black text-xl font-extralight font-['Inter']">
                  Layanan pengiriman laut yang andal dan efisien untuk kebutuhan ekspor-impor Anda.
                </p>
              </div>
              <a
                href="/services/sea-freight"
                className="w-24 h-9 bg-[#27548A] rounded-lg flex items-center justify-center hover:bg-blue-800 transition"
              >
                <span className="text-white text-l font-normal font-['Inter']">More &gt;&gt;</span>
              </a>
            </div>
          </div>

          {/* Service Card - Customs Clearance */}
          <div className="flex flex-row-reverse w-full max-w-[879px] h-64 mx-auto">
            {/* Right Image */}
            <div
              className="w-1/2 h-full bg-cover bg-center relative rounded-[10px] overflow-hidden"
              style={{ backgroundImage: `url('/hero-customs-clearance.jpg')` }}
            >
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <span className="text-white text-xl font-medium font-['Inter']">
                  Customs Clearance
                </span>
              </div>
            </div>

            {/* Left Text */}
            <div className="w-1/2 py-6 pr-6 flex flex-col justify-between">
              <div>
                <h3 className="text-blue-900 text-2xl font-medium font-['Inter'] mb-2">
                  Customs Clearance
                </h3>
                <p className="text-black text-xl font-extralight font-['Inter']">
                  Layanan kepabeanan cepat dan akurat untuk kelancaran proses impor dan ekspor.
                </p>
              </div>
              <a
                href="/services/customs-clearance"
                className="w-24 h-9 bg-[#27548A] rounded-lg flex items-center justify-center hover:bg-blue-800 transition"
              >
                <span className="text-white text-l font-normal font-['Inter']">More &gt;&gt;</span>
              </a>
            </div>
          </div>

          {/* Service Card - Warehousing */}
          <div className="flex w-full max-w-[879px] h-64 mx-auto">
            {/* Left Image */}
            <div
              className="w-1/2 h-full bg-cover bg-center relative rounded-[10px] overflow-hidden"
              style={{ backgroundImage: `url('/hero-warehousing.jpg')` }}
            >
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <span className="text-white text-xl font-medium font-['Inter']">
                  Warehousing
                </span>
              </div>
            </div>

            {/* Right Text */}
            <div className="w-1/2 py-6 pl-6 flex flex-col justify-between">
              <div>
                <h3 className="text-blue-900 text-2xl font-medium font-['Inter'] mb-2">
                  Warehousing
                </h3>
                <p className="text-black text-xl font-extralight font-['Inter']">
                  Solusi penyimpanan barang yang aman dan efisien sesuai kebutuhan logistik Anda.
                </p>
              </div>
              <a
                href="/services/warehousing"
                className="w-24 h-9 bg-[#27548A] rounded-lg flex items-center justify-center hover:bg-blue-800 transition"
              >
                <span className="text-white text-l font-normal font-['Inter']">More &gt;&gt;</span>
              </a>
            </div>
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

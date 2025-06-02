'use client';

import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const images = [
  '/cargo-image-1.png',
  '/cargo-image-2.jpg',
  '/cargo-image-3.jpg',
];

const services = [
  {
    title: 'Sea Freight',
    icon: 'sea-freight-white.png',
    href: '/services/sea-freight',
  },
  {
    title: 'Customs Clearance',
    icon: 'customs-clearance-white.png',
    href: '/services/customs-clearance',
  },
  {
    title: 'Warehousing',
    icon: 'warehousing-white.png',
    href: '/services/warehousing',
  },
];

const MapSection = dynamic(() => import('@/app/components/map-section'), { ssr: false });

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      slider.current?.next();
    }, 5000);
    return () => clearInterval(interval);
  }, [slider]);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Carousel */}
        <div ref={sliderRef} className="keen-slider h-full">
          {images.map((src, index) => (
            <div key={index} className="keen-slider__slide relative h-full w-full">
              <Image
                src={src}
                alt={`Slide ${index}`}
                fill
                priority={index === 0}
                className="object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 z-10" />
            </div>
          ))}
        </div>

        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center z-20 text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold italic">
            Navigating <span className="font-bold">Your Cargo</span>
          </h1>
          <p className="text-lg md:text-2xl mt-4 font-light">
            Connecting The World
          </p>
        </div>

        {/* Arrows */}
        {loaded && (
          <>
            <button
              onClick={() => slider.current?.prev()}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 text-white text-4xl hover:text-blue-300"
              aria-label="Previous Slide"
            >
              &#10094;
            </button>
            <button
              onClick={() => slider.current?.next()}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 text-white text-4xl hover:text-blue-300"
              aria-label="Next Slide"
            >
              &#10095;
            </button>
          </>
        )}

        {/* Dots */}
        {loaded && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => slider.current?.moveToIdx(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === idx ? 'bg-white/80' : 'bg-white/30'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </section>

      {/* Our Services Section */}
      <section className="py-16 px-4 bg-white text-[#27548A]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-12">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="flex flex-col items-center group"
              >
                <div className="w-36 h-36 bg-[#27548A] rounded-[20px] flex items-center justify-center mb-4 transition-transform group-hover:scale-105">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-20 h-20"
                  />
                </div>
                <h3 className="text-xl font-medium group-hover:no-underline">
                  {service.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Area of Services Section */}
      <section className="w-full max-w-6xl mx-auto py-16 px-6 flex flex-col md:flex-row items-start gap-12 justify-center">
      {/* Text Content */}
      <div className="flex-1 max-w-md text-black font-extralight font-['Inter'] text-xl leading-relaxed">
        <h2 className="text-blue-900 text-4xl font-semibold mb-8 font-['Inter']">
          Area of Service
        </h2>
        <p className="mb-6">
          PT. MaritimeXpress melayani pengiriman logistik ke berbagai wilayah strategis di seluruh Indonesia. Dengan jaringan maritim yang kuat, kami menjangkau pelabuhan besar hingga daerah terpencil, memastikan distribusi barang yang cepat dan aman.<br />
          Wilayah cakupan utama kami meliputi:
        </p>

        <ul className="list-disc list-inside space-y-2">
          <li>Tanjungpinang, Kepulauan Riau</li>
          <li>Tanjung Priok, Jakarta</li>
          <li>Belawan, Medan</li>
          <li>Tanjung Perak, Surabaya</li>
          <li>Makassar, Sulawesi Selatan</li>
          <li>Ambon, Maluku</li>
          <li>Sorong & Jayapura, Papua</li>
        </ul>
      </div>

      {/* Map Section */}
      <div className="md:flex-1 h-[400px] md:h-auto">
        <MapSection />
      </div>
    </section>
      
    </main>
  );
}

'use client'

import Image from 'next/image';
import { useRef } from "react";
import ScrollButton from '@/app/components/scroll-button';

export default function Warehousing() {

  const heroRef = useRef<HTMLElement | null>(null);
  const descriptionRef = useRef<HTMLElement | null>(null);
  const whyUsRef = useRef<HTMLElement | null>(null);
  const businessRef = useRef<HTMLElement | null>(null);

  return (
    <main>
      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full h-96">
        {/* Background image */}
        <Image src="/hero-warehousing.jpg" 
        alt="Warehousing Hero" 
        fill 
        className="object-cover" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-stone-700/60" />

        {/* Centered Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-6xl font-medium mb-4 font-['Inter'] italic">Warehousing</h1>
          <p className="text-4xl font-normal font-['Inter'] max-w-3xl">
            Secure and Fully Managed Storage Solutions
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section ref={descriptionRef} className="relative w-full max-w-[1040px] mx-auto my-12 px-4">
        <h2 className="text-[#27548A] text-4xl font-semibold font-['Inter'] mb-3">
          Warehousing
        </h2>
        <div className="border-t border-black mb-3" />
        <p className="text-black text-xl font-extralight font-['Inter']">
          PT. Maritimexpress menyediakan fasilitas gudang yang aman dan terorganisir untuk penyimpanan barang sementara maupun jangka panjang. Sistem manajemen gudang kami mendukung efisiensi distribusi dan pemantauan stok secara real-time.
        </p>
      </section>

      {/* Why Us Section */}
      <section ref={whyUsRef} className="bg-[f5f5f5] py-16 px-4 mb-10">
        <h2 className="text-4xl font-medium text-[#27548A] text-center mb-12">Why Us?</h2>

        <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {/* Card 1 */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-36 h-36 bg-[#27548A] rounded-[20px] flex items-center justify-center">
              <Image src="/sistem-manajemen-gudang.png" alt="Warehouse Management" width={80} height={80} />
            </div>
            <p className="text-2xl font-extralight text-black">
              Sistem Manajemen Gudang Modern
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-36 h-36 bg-[#27548A] rounded-[20px] flex items-center justify-center">
              <Image src="/map-location-track.png" alt="Strategic Location" width={80} height={80} />
            </div>
            <p className="text-2xl font-extralight text-black">
              Lokasi Strategis
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-36 h-36 bg-[#27548A] rounded-[20px] flex items-center justify-center">
              <Image src="/camera-cctv.png" alt="Security" width={80} height={80} />
            </div>
            <p className="text-2xl font-extralight text-black">
              Keamanan 24/7
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-36 h-36 bg-[#27548A] rounded-[20px] flex items-center justify-center">
              <Image src="/ac.png" alt="Cold Storage" width={80} height={80} />
            </div>
            <p className="text-2xl font-extralight text-black">
              Fasilitas Berpendingin & Custom Storage
            </p>
          </div>
        </div>
      </section>

      {/* Business That We Serve Section */}
      <section ref={businessRef} className="bg-[#E2E2E2]/60 py-16 px-4 mb-20">
        <h2 className="text-4xl font-medium text-[#27548A] text-center mb-16">
          Business That We Serve
        </h2>

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
          {/* Card 1 */}
          <div className="bg-[#27548A] w-48 h-48 flex items-center justify-center p-6 text-center rounded">
            <p className="text-white text-xl font-normal">Otomotif</p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#27548A] w-48 h-48 flex items-center justify-center p-6 text-center rounded">
            <p className="text-white text-xl font-normal">
              Makanan & Minuman
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#27548A] w-48 h-48 flex items-center justify-center p-6 text-center rounded">
            <p className="text-white text-xl font-normal">Pertanian</p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#27548A] w-48 h-48 flex items-center justify-center p-6 text-center rounded">
            <p className="text-white text-xl font-normal">
              FMCG (Fast-Moving Consumer Goods)
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-[#27548A] w-48 h-48 flex items-center justify-center p-6 text-center rounded">
            <p className="text-white text-xl font-normal">Sektor Publik</p>
          </div>

          {/* Card 6 */}
          <div className="bg-[#27548A] w-48 h-48 flex items-center justify-center p-6 text-center rounded">
            <p className="text-white text-xl font-normal">e-Commerce</p>
          </div>
        </div>
      </section>

    <ScrollButton sections={[heroRef, descriptionRef, whyUsRef, businessRef]} />

    </main>
  );
}

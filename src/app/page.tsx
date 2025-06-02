import Image from 'next/image';

// app/page.tsx
export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-screen">
        <Image 
          src="/cargo-image-1.png"
          alt="Cargo Background"
          fill
          priority
          className='object-cover z-0'
        />

        {/* Hero Section Title */}
        <div className="absolute inset-0 flex flex-col justify-center items-center z-20 text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold italic">
            Navigating <span className="font-bold">Your Cargo</span>
          </h1>
          <p className="text-lg md:text-2xl mt-4 font-light">
            Connecting The World
          </p>

          {/* Carousel Dots */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            <div className="w-3 h-3 rounded-full bg-white/70" />
            <div className="w-3 h-3 rounded-full bg-white/40" />
            <div className="w-3 h-3 rounded-full bg-white/40" />
        </div>
        </div>

        <button className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 text-white text-4xl">
          &#10094;
        </button>
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 text-white text-4xl">
          &#10095;
        </button>
      </section>

      {/* Main Body Content */}
      <section className="text-center">
        <h2 className="text-4xl font-bold mb-4">Selamat Datang di PT. MaritimeXpress</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Kami adalah perusahaan logistik maritim terpercaya yang siap mengantar barang Anda ke seluruh Indonesia dengan cepat dan aman.
        </p>
      </section>
    </main>
  );
}

export default function Warehousing() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-96">
        {/* Background image */}
        <img
          src="/hero-warehousing.jpg"
          alt="Warehousing Hero"
          className="w-full h-full object-cover"
        />

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
      <section className="relative w-full max-w-[1040px] mx-auto my-12 px-4">
        <h2 className="text-[#27548A] text-4xl font-semibold font-['Inter'] mb-3">
          Warehousing
        </h2>
        <div className="border-t border-black mb-3" />
        <p className="text-black text-xl font-extralight font-['Inter']">
          PT. Maritimexpress menyediakan fasilitas gudang yang aman dan terorganisir untuk penyimpanan barang sementara maupun jangka panjang. Sistem manajemen gudang kami mendukung efisiensi distribusi dan pemantauan stok secara real-time.
        </p>
      </section>
    </main>
  );
}

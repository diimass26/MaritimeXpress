export default function CustomsClearance() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-96">
        {/* Background image */}
        <img
          src="/hero-customs-clearance.jpg"
          alt="Customs Clearance Hero"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-stone-700/60" />

        {/* Centered Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-6xl font-medium mb-4 font-['Inter'] italic">Customs Clearance</h1>
          <p className="text-4xl font-normal font-['Inter'] max-w-3xl">
            Fast and Hassle-Free Customs Processing
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="relative w-full max-w-[1040px] mx-auto my-12 px-4">
        <h2 className="text-[#27548A] text-4xl font-semibold font-['Inter'] mb-3">
          Customs Clearance
        </h2>
        <div className="border-t border-black mb-3" />
        <p className="text-black text-xl font-extralight font-['Inter']">
          Kami menangani proses kepabeanan secara menyeluruh agar barang Anda bisa melewati pemeriksaan dengan cepat dan sesuai peraturan. Tim kami berpengalaman dalam mengurus dokumen dan prosedur resmi secara tepat waktu.
        </p>
      </section>
    </main>
  );
}

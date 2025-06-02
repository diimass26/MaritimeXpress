export default function ServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[720px]">
        <img
          src="/hero-services.jpg"
          alt="Service Hero"
          className="w-full h-full object-cover"
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
      <section className="w-full max-w-6xl py-20 px-4 mx-auto">
        <h2 className="text-4xl font-semibold text-blue-900 text-center mb-12">
          Our Services
        </h2>

        <div className="grid grid-cols-1 gap-12">

          {/* Service Card - Sea Freight */}
          <div className="relative w-full max-w-[879px] h-64 mx-auto rounded-[10px] overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute left-0 top-0 w-96 h-full bg-cover bg-center rounded-[10px]"
              style={{ backgroundImage: `url('/hero-sea-freight.jpg')` }}>
              <div className="w-full h-full bg-black/30 flex items-center justify-center rounded-[10px]">
                <span className="text-white text-xl font-medium font-['Inter']">
                  Sea Freight
                </span>
              </div>
            </div>


            {/* Judul kanan */}
            <div className="absolute left-[410px] top-[26px] text-blue-900 text-2xl font-medium font-['Inter']">
              Sea Freight
            </div>

            {/* Deskripsi kanan */}
            <p className="absolute left-[410px] top-[63px] w-96 text-black text-xl font-extralight font-['Inter']">
              Layanan pengiriman laut yang andal dan efisien untuk kebutuhan ekspor-impor Anda.
            </p>

            {/* Tombol More */}
            <a
              href="/services/sea-freight"
              className="absolute left-[735px] top-[189px] w-24 h-9 bg-blue-900 rounded-lg flex items-center justify-center hover:bg-blue-800 transition"
            >
              <span className="text-white text-xl font-normal font-['Inter']">
                More &gt;&gt;
              </span>
            </a>
          </div>

          {/* Service Card - Customs Clearance */}
          <div className="relative w-full max-w-[879px] h-64 mx-auto rounded-[10px] overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute left-[443px] top-0 w-96 h-64 bg-cover bg-center rounded-[10px]"
              style={{ backgroundImage: `url('/hero-customs-clearance.jpg')` }}>
              <div className="w-full h-full bg-black/30 flex items-center justify-center rounded-[10px]">
                <span className="text-white text-xl font-medium font-['Inter']">
                  Customs Clearance
                </span>
              </div>
            </div>

            {/* Judul kiri */}
            <div className="absolute left-0 top-[32px] text-blue-900 text-2xl font-medium font-['Inter']">
              Customs Clearance
            </div>

            {/* Deskripsi kiri */}
            <p className="absolute left-0 top-[69px] w-96 text-black text-xl font-extralight font-['Inter']">
              Layanan kepabeanan cepat dan akurat untuk kelancaran proses impor dan ekspor.
            </p>

            {/* Tombol More */}
            <a
              href="services/customs-clearance"
              className="absolute left-[322px] top-[182px] w-24 h-9 bg-blue-900 rounded-lg flex items-center justify-center hover:bg-blue-800 transition"
            >
              <span className="text-white text-xl font-normal font-['Inter']">
                More &gt;&gt;
              </span>
            </a>
          </div>

          {/* Service Card - Warehousing */}
          <div className="relative w-full max-w-[879px] h-64 mx-auto rounded-[10px] overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute left-0 top-0 w-96 h-full bg-cover bg-center rounded-[10px]"
              style={{ backgroundImage: `url('/hero-warehousing.jpg')` }}>
              <div className="w-full h-full bg-black/30 flex items-center justify-center rounded-[10px]">
                <span className="text-white text-xl font-medium font-['Inter']">
                  Warehousing
                </span>
              </div>
            </div>

            {/* Judul kanan */}
            <div className="absolute left-[410px] top-[26px] text-blue-900 text-2xl font-medium font-['Inter']">
              Warehousing
            </div>

            {/* Deskripsi kanan */}
            <p className="absolute left-[410px] top-[63px] w-96 text-black text-xl font-extralight font-['Inter']">
              Solusi penyimpanan barang yang aman dan efisien sesuai kebutuhan logistik Anda.
            </p>

            {/* Tombol More */}
            <a
              href="services/warehousing"
              className="absolute left-[735px] top-[189px] w-24 h-9 bg-blue-900 rounded-lg flex items-center justify-center hover:bg-blue-800 transition"
            >
              <span className="text-white text-xl font-normal font-['Inter']">
                More &gt;&gt;
              </span>
            </a>
          </div>

        </div>
      </section>
    </>
  );
}

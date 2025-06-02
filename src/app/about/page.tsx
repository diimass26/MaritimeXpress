export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[720px]">
        <img
          src="/hero-about.png"
          alt="About Hero"
          className="w-full h-full object-cover"
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
        <section className="w-full py-20 px-4 bg-[#F5F5F5] flex flex-col items-center">
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

    </>
  );
}

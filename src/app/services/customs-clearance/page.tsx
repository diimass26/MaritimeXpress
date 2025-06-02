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

      {/* Services Section*/}
      <section className="max-w-[1040px] mx-auto px-4 py-16">
        <h2 className="text-4xl font-medium text-white bg-[#27548A] inline-block px-6 py-3 mb-12">Services</h2>

        <div className="space-y-12">
          {/* Pemeriksaan Dokumen */}
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 shrink-0 bg-[#f5f5f5] flex items-center justify-center">
              <img src="/dokumen.png" alt="Pemeriksaan Dokumen" className="max-w-full max-h-full object-contain" />
            </div>
            <div>
              <h3 className="text-2xl font-medium text-black">Pemeriksaan Dokumen</h3>
              <p className="text-xl font-extralight text-black mt-2">
                Pemeriksaan kelengkapan dan keakuratan dokumen seperti invoice, packing list, dan bill of lading untuk memastikan kesesuaian dengan regulasi bea cukai.
              </p>
            </div>
          </div>

          {/* Perhitungan Pajak */}
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 shrink-0 bg-[#f5f5f5] flex items-center justify-center">
              <img src="/pajak.png" alt="Perhitungan Pajak" className="max-w-full max-h-full object-contain" />
            </div>
            <div>
              <h3 className="text-2xl font-medium text-black">Perhitungan Pajak & Bea Cukai</h3>
              <p className="text-xl font-extralight text-black mt-2">
                Penghitungan tarif bea masuk, PPN, dan pajak lainnya berdasarkan klasifikasi barang dan nilai impor.
              </p>
            </div>
          </div>

          {/* Pemeriksaan Fisik Barang */}
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 shrink-0 bg-[#f5f5f5] flex items-center justify-center">
              <img src="/inspeksi.png" alt="Pemeriksaan Fisik" className="max-w-full max-h-full object-contain" />
            </div>
            <div>
              <h3 className="text-2xl font-medium text-black">Pemeriksaan Fisik Barang</h3>
              <p className="text-xl font-extralight text-black mt-2">
                Proses pengecekan langsung oleh petugas bea cukai terhadap isi kontainer atau barang guna memastikan kecocokan dengan dokumen dan mendeteksi pelanggaran.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#E2E2E2]/60 py-16 px-4 mb-20">
        <h2 className="text-4xl font-medium text-[#27548A] text-center mb-16">Benefits</h2>

        <div className="max-w-[1200px] mx-auto grid gap-16 lg:grid-cols-2">
          {/* Benefit 1 */}
          <div className="flex flex-col items-center text-center gap-6">
            <div className="w-full h-40 bg-[#27548A] flex flex-col justify-center px-6 py-4">
              <h3 className="text-white text-2xl font-normal mb-2">
                Proses Impor/Ekspor Lebih Cepat dan Lancar
              </h3>
              <p className="text-white text-xl font-extralight">
                Dokumen yang lengkap dan benar membantu menghindari penundaan saat proses bea cukai di pelabuhan.
              </p>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="flex flex-col items-center text-center gap-6">
            <div className="w-full h-40 bg-[#27548A] flex flex-col justify-center px-6 py-4">
              <h3 className="text-white text-2xl font-normal mb-2">
                Menghindari Denda dan Biaya Tambahan
              </h3>
              <p className="text-white text-xl font-extralight">
                Perhitungan pajak dan bea yang akurat mencegah kesalahan pembayaran yang bisa menyebabkan sanksi atau penalti.
              </p>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="flex flex-col items-center text-center gap-6">
            <div className="w-full h-40 bg-[#27548A] flex flex-col justify-center px-6 py-4">
              <h3 className="text-white text-2xl font-normal mb-2">
                Kepatuhan terhadap Regulasi
              </h3>
              <p className="text-white text-xl font-extralight">
                Pemeriksaan fisik dan administratif memastikan seluruh proses sesuai hukum dan peraturan pemerintah.
              </p>
            </div>
          </div>

          {/* Benefit 4 */}
          <div className="flex flex-col items-center text-center gap-6">
            <div className="w-full h-40 bg-[#27548A] flex flex-col justify-center px-6 py-4">
              <h3 className="text-white text-2xl font-normal mb-2">
                Keamanan dan Transparansi Barang
              </h3>
              <p className="text-white text-xl font-extralight">
                Semua proses dilakukan dengan pengawasan resmi, menjaga kejelasan asal-usul dan isi barang yang dikirim.
              </p>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}

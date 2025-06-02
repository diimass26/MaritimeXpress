export default function SeaFreightPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-96">
        {/* Background image */}
        <img
          src="/hero-sea-freight.jpg"
          alt="Sea Freight Hero"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-stone-700/60" />

        {/* Centered Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-6xl font-medium mb-4 font-['Inter'] italic">Sea Freight</h1>
          <p className="text-4xl font-normal font-['Inter'] max-w-3xl">
            Reliable, On-Time, and Efficient Ocean Shipping
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="relative w-full max-w-[1040px] mx-auto my-12 px-4">
        <h2 className="text-[#27548A] text-4xl font-semibold font-['Inter'] mb-3">
          Sea Freight
        </h2>
        <div className="border-t border-black mb-3" />
        <p className="text-black text-xl font-extralight font-['Inter']">
          PT. MaritimeXpress menyediakan layanan pengiriman laut yang efisien dan terpercaya untuk ekspor dan impor barang dalam skala besar. Dengan jaringan global dan jadwal pelayaran yang fleksibel, kami memastikan pengiriman tepat waktu dan aman.
        </p>
      </section>

      {/* FCL + LCL Section */}
      <section className="w-full max-w-[1000px] mx-auto my-16 space-y-12 px-4">
      {/* FCL Block */}
      <div className="relative w-full h-64 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-[#27548A]" />
        <img
          src="/FCL.png"
          alt="FCL"
          className="absolute left-0 top-0 w-[500px] h-64 object-cover"
        />
        <div className="absolute left-[520px] top-[26px] pr-6 text-white max-w-[460px]">
          <h3 className="text-2xl font-medium font-['Inter'] mb-3">
            FCL (Full Container Load)
          </h3>
          <p className="text-xl font-extralight font-['Inter']">
            FCL adalah metode pengiriman di mana satu kontainer penuh digunakan oleh satu pengirim
            untuk satu tujuan. Ini ideal untuk pengiriman dalam jumlah besar karena lebih efisien dan aman.
          </p>
        </div>
      </div>

      {/* LCL Block */}
      <div className="relative w-full h-64 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-[#27548A]" />
        <img
          src="/LCL.png"
          alt="LCL"
          className="absolute right-0 top-0 w-[500px] h-64 object-cover"
        />
        <div className="absolute left-[38px] top-[26px] pr-6 text-white max-w-[460px]">
          <h3 className="text-2xl font-medium font-['Inter'] mb-3">
            LCL (Less than Container Load)
          </h3>
          <p className="text-xl font-extralight font-['Inter']">
            LCL adalah metode pengiriman di mana beberapa pengirim berbagi ruang dalam satu kontainer.
            Cocok untuk pengiriman dalam jumlah kecil karena lebih hemat biaya dibanding menyewa kontainer penuh.
          </p>
        </div>
      </div>
    </section>

    <section className="max-w-[1000px] mx-auto my-16 px-4">
      <div className="overflow-x-auto">
        <table className="table-fixed w-full text-white bg-[#27548A] text-center">
          <thead>
            <tr className="text-2xl font-medium border-y border-black">
              <th className="w-1/3 px-4 py-4">Aspek</th>
              <th className="w-1/3 px-4 py-4">FCL</th>
              <th className="w-1/3 px-4 py-4">LCL</th>
            </tr>
          </thead>
          <tbody className="text-xl font-light">
            <tr className="border-y border-black">
              <td className="px-4 py-6 font-semibold">Biaya</td>
              <td className="px-4 py-6">Lebih mahal<br />(kontainer eksklusif)</td>
              <td className="px-4 py-6">Lebih murah<br />(kontainer berbagi)</td>
            </tr>
            <tr className="border-y border-black">
              <td className="px-4 py-6 font-semibold">Waktu</td>
              <td className="px-4 py-6">Lebih cepat<br />(tanpa transit)</td>
              <td className="px-4 py-6">Lebih lama<br />(perlu konsolidasi)</td>
            </tr>
            <tr className="border-y border-black">
              <td className="px-4 py-6 font-semibold">Cocok Untuk</td>
              <td className="px-4 py-6">Barang volume besar</td>
              <td className="px-4 py-6">Barang kecil / budget terbatas</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>


    </main>
  );
}

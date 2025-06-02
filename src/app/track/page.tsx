export default function TrackPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      {/* Header */}
      <section className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">Order Tracking</h1>
        <p className="text-gray-600">Track your order</p>

        <div className="mt-6 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border border-gray-300 rounded bg-[#0C2F5A] text-white focus:outline-none"
          />
        </div>
      </section>

      {/* Order ID + Status */}
      <div className="border-t border-gray-300 pt-6 mb-10">
        <div className="flex items-center gap-4 mb-6">
            {/* Order ID Block */}
            <div className="text-sm sm:text-base text-gray-700">
                <p className="font-semibold">Order ID</p>
                <p>MX-TJPJ-24041601</p>
            </div>

            {/* Status Badge */}
            <span className="bg-yellow-400 text-black px-4 py-1 rounded font-semibold">
                Complete
            </span>
        </div>

        {/* Progress Bar */}
        <div className="relative flex items-center justify-between mb-10">
          <div className="absolute left-0 right-0 h-1 bg-gray-300 z-0 top-1/2 transform -translate-y-1/2" />
          <div className="z-10 flex justify-between w-full">
            {["Order Received", "Departure", "Arrival"].map((label, i) => (
              <div key={i} className="flex flex-col items-center w-1/3">
                <div
                  className={`w-6 h-6 rounded-full ${
                    i === 2
                      ? "bg-[#EAB919]"
                      : "bg-[#27548A]"
                  } border-2 border-white z-10`}
                />
                <p className="text-sm mt-2 text-center">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tracking Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#0C2F5A] text-white">
              <th className="px-4 py-3 font-semibold">Status</th>
              <th className="px-4 py-3 font-semibold">Location</th>
              <th className="px-4 py-3 font-semibold">Date</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Order diterima", "Tanjungpinang", "16 Maret 2025, 08:00"],
              ["Menunggu penjemputan", "Tanjungpinang", "16 Maret 2025, 08:10"],
              ["Paket dijemput", "Tanjungpinang", "16 Maret 2025, 10:20"],
              ["Paket diterima di gudang", "Tanjungpinang Hub", "16 Maret 2025, 12:00"],
              ["Paket sedang diproses", "Tanjungpinang Hub", "16 Maret 2025, 12:50"],
              ["Paket dalam pengiriman menuju Tanjungpinang Port", "Tanjungpinang Hub", "16 Maret 2025, 15:00"],
              ["Paket dalam pengiriman dari Tanjungpinang Port", "Tanjungpinang Port", "16 Maret 2025, 15:30"],
              ["Paket tiba di pelabuhan transit", "Surabaya Port", "18 Maret 2025, 02:10"],
              ["Proses bongkar muat", "Surabaya Port", "18 Maret 2025, 02:40"],
              ["Transit menuju pelabuhan akhir", "Surabaya Port", "18 Maret 2025, 09:00"],
              ["Paket tiba di pelabuhan tujuan", "Jayapura Port", "20 Maret 2025, 12:00"],
              ["Paket dalam pengiriman menuju Jayapura Hub", "Jayapura Port", "20 Maret 2025, 15:45"],
              ["Paket diterima digudang", "Jayapura Hub", "20 Maret 2025, 20:05"],
              ["Paket dalam pengantaran menuju alamat penerima", "Jayapura Hub", "21 Maret 2025, 08:10"],
              ["Paket telah diterima", "Jayapura", "21 Maret 2025, 09:50"],
            ].map(([status, location, date], i) => (
              <tr key={i} className="even:bg-gray-100">
                <td className="px-4 py-2">{status}</td>
                <td className="px-4 py-2">{location}</td>
                <td className="px-4 py-2">{date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

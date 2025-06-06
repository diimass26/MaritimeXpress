"use client";
import { Inconsolata } from "next/font/google";
import { useState } from "react";

const inconsolata = Inconsolata({
  subsets: ["latin"],
});

type Log = {
  status: string;
  location: string;
  date: string;
  status_type: number,
};

type TrackingData = {
  trackingNumber: string;
  status?: string;
  logs: Log[];
};

type ProgressStage = "Order Received" | "Departure" | "Arrived";
type BadgeStatus = "on progress" | "completed";

function mapStatusTypeToProgressStage(status_type: number): ProgressStage {
  switch (status_type) {
    case 0:
      return "Order Received";
    case 1:
      return "Departure";
    case 2:
      return "Arrived";
    default:
      return "Order Received";
  }
}

export default function TrackPage() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingData, setTrackingData] = useState<TrackingData | null>(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      const res = await fetch(`/api/track?resi=${trackingNumber}`);
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Gagal memuat data tracking");

      setTrackingData(data);
      setError("");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setTrackingData(null);
        setError(err.message);
      } else {
        setTrackingData(null);
        setError("Unexpected error");
      }
    }
  };

  // Status & Progress Stage Detection
  const lastLog = trackingData?.logs.reduce((lastest, current) => 
    new Date(current.date) > new Date(lastest.date) ? current : lastest
  , trackingData.logs[0]);

  console.log("Last Log:", lastLog);

  const currentStage = lastLog ? mapStatusTypeToProgressStage(lastLog.status_type) : "Order Received";
  const badgeStatus: BadgeStatus =
    currentStage === "Arrived" && lastLog?.status === "Paket telah diterima"
      ? "completed" : "on progress";

  const stageIndex = ["Order Received", "Departure", "Arrived"].indexOf(currentStage);
  const isDelivered = lastLog?.status === "Paket telah diterima";

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      {/* Header */}
      <section className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">Order Tracking</h1>
        <p className="text-gray-600">Track your order</p>

        <div className="mt-6 max-w-md mx-auto flex gap-2">
          <input
            type="text"
            placeholder="Masukkan Nomor Resi"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded bg-[#0C2F5A] text-white focus:outline-none"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded"
          >
            Cari
          </button>
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </section>

      {/* Order ID + Status */}
      {trackingData && (
        <>
          <div className="border-t border-gray-300 pt-6 mb-10">
            <div className="flex items-center gap-4 mb-6">
              {/* Order ID Block */}
              <div className="text-sm sm:text-base text-gray-700">
                <p className="font-semibold">Order ID</p>
                <p>{trackingData.trackingNumber}</p>
              </div>

              {/* Status Badge */}
              <span
                className={`${
                  badgeStatus === "completed"
                    ? "bg-[#278A2C] text-white"
                    : "bg-[#EAB919] text-black"
                } px-4 py-1 rounded font-semibold`}
              >
                {badgeStatus === "completed" ? "Completed" : "On Progress"}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="relative flex items-center justify-between mb-10">
              <div className="absolute left-1/6 right-1/6 h-1 bg-gray-300 z-0 top-2.5" />
              <div className="z-10 flex justify-between w-full">
                {["Order Received", "Departure", "Arrived"].map((label, i) => (
                  <div key={i} className="flex flex-col items-center w-1/3">
                    <div
                      className={`w-6 h-6 rounded-full ${
                        i < stageIndex || (i === stageIndex && isDelivered) ? "bg-[#278A2C]"
                        : i === stageIndex ? "bg-[#EAB919]" : "bg-[#27548A]"
                      } z-10`}
                    />
                    <p className="text-sm mt-2 text-center">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tracking Table */}
          <div className="overflow-x-auto">
            <table
              className="w-full text-white text-sm border-collapse border-spacing-0"
              style={{ backgroundColor: "#27548A" }}
            >
              <thead>
                <tr>
                  <th className="border border-l-0 border-t-0 border-white px-4 py-2 text-left">
                    Status
                  </th>
                  <th className="border border-t-0 border-white px-4 py-2 text-left">
                    Location
                  </th>
                  <th className="border border-r-0 border-t-0 border-white px-4 py-2 text-left">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {trackingData.logs.map((log: Log, i: number) => (
                  <tr key={i} className={`${inconsolata.className}`}>
                    <td className="border-r border-white px-4 py-2 align-top font-medium">
                      {log.status}
                    </td>
                    <td className="border-l border-r px-4 border-white py-2 align-top font-medium">
                      {log.location}
                    </td>
                    <td className="border-l border-white px-4 py-2 align-top font-medium">
                      {new Date(log.date).toLocaleString("id-ID", {
                        hour12: false,
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </main>
  );
}

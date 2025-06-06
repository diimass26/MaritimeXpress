import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import TrackingLog from "@/models/trackinglogs";

export async function GET() {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Forbidden in production" }, { status: 403 });
  }
  
  const dummyData = [
    {
        trackingNumber: "MX-TJPJ-24060101",
        type: "FCL",
        logs: [
        {
            status: "Order diterima",
            location: "Tanjungpinang",
            date: new Date("2025-06-01T08:00:00"),
        },
        {
            status: "Menunggu penjemputan",
            location: "Tanjungpinang",
            date: new Date("2025-06-01T09:00:00"),
        },
        {
            status: "Paket dijemput",
            location: "Tanjungpinang",
            date: new Date("2025-06-01T10:00:00"),
        },
        ],
    },
    {
        trackingNumber: "MX-BTM-24060102",
        type: "LCL",
        logs: [
        {
            status: "Order diterima",
            location: "Batam",
            date: new Date("2025-06-02T07:00:00"),
        },
        {
            status: "Paket dalam perjalanan",
            location: "Batam",
            date: new Date("2025-06-02T13:00:00"),
        },
        ],
    },
    {
        trackingNumber: "MX-JKT-24060103",
        type: "FCL",
        logs: [
        {
            status: "Order diterima",
            location: "Jakarta",
            date: new Date("2025-06-01T06:00:00"),
        },
        {
            status: "Paket sedang diproses",
            location: "Jakarta Hub",
            date: new Date("2025-06-01T11:30:00"),
        },
        {
            status: "Paket dikirim ke Surabaya",
            location: "Jakarta Port",
            date: new Date("2025-06-01T17:00:00"),
        },
        ],
    },
    {
        trackingNumber: "MX-SBY-24060104",
        type: "LCL",
        logs: [
        {
            status: "Order diterima",
            location: "Surabaya",
            date: new Date("2025-06-03T08:00:00"),
        },
        {
            status: "Paket telah sampai",
            location: "Surabaya",
            date: new Date("2025-06-05T10:00:00"),
        },
        ],
    },
    {
        trackingNumber: "MX-JPR-24060105",
        type: "FCL",
        logs: [
        {
            status: "Order diterima",
            location: "Jayapura",
            date: new Date("2025-06-01T09:00:00"),
        },
        ],
    },
    {
        trackingNumber: "MX-TJPJ-24060106",
        type: "LCL",
        logs: [
        {
            status: "Order diterima",
            location: "Tanjungpinang",
            date: new Date("2025-06-04T08:00:00"),
        },
        {
            status: "Paket dikirim ke Batam",
            location: "Tanjungpinang Port",
            date: new Date("2025-06-04T16:00:00"),
        },
        ],
    },
    {
        trackingNumber: "MX-BTM-24060107",
        type: "FCL",
        logs: [
        {
            status: "Order diterima",
            location: "Batam",
            date: new Date("2025-06-03T06:30:00"),
        },
        {
            status: "Paket telah sampai",
            location: "Batam",
            date: new Date("2025-06-06T08:10:00"),
        },
        ],
    },
    {
        trackingNumber: "MX-KRM-24060108",
        type: "LCL",
        logs: [
        {
            status: "Order diterima",
            location: "Karimun",
            date: new Date("2025-06-05T07:45:00"),
        },
        {
            status: "Paket menuju pelabuhan",
            location: "Karimun Port",
            date: new Date("2025-06-05T10:00:00"),
        },
        ],
    },
    {
        trackingNumber: "MX-NAT-24060109",
        type: "FCL",
        logs: [
        {
            status: "Order diterima",
            location: "Natuna",
            date: new Date("2025-06-04T09:15:00"),
        },
        ],
    },
    {
        trackingNumber: "MX-LGG-24060110",
        type: "LCL",
        logs: [
        {
            status: "Order diterima",
            location: "Lingga",
            date: new Date("2025-06-02T11:00:00"),
        },
        {
            status: "Paket dalam perjalanan",
            location: "Lingga",
            date: new Date("2025-06-03T09:00:00"),
        },
        ],
    },
    ];

  try {
    await connectDB();
    await TrackingLog.deleteMany({});
    await TrackingLog.insertMany(dummyData);

    return NextResponse.json({
      message: "Seeder berhasil dijalankan",
      total: dummyData.length,
    });
  } catch (err) {
    console.error("Seeder error:", err);
    return NextResponse.json({ error: "Gagal menjalankan seeder" }, { status: 500 });
  }
}

// src/app/api/tracking/route.ts
import { connectDB } from "@/lib/db";
import TrackingEntry from "@/models/trackinglogs";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  await connectDB();
  console.log("Tracking API called");

  const { searchParams } = new URL(req.url);
  const resi = searchParams.get("resi");
  const pattern = resi?.split('').join('[^a-zA-Z0-9]*');
  const regex = new RegExp(`^${pattern}$`, 'i');

  if (!resi) {
    return NextResponse.json({ error: "Nomor resi wajib diisi" }, { status: 400 });
  }

  const entry = await TrackingEntry.findOne({ trackingNumber: { $regex: regex } });

  if (!entry) {
    return NextResponse.json({ error: "Nomor resi tidak ditemukan" }, { status: 404 });
  }

  return NextResponse.json(entry);
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const newTrackingEntry = await TrackingEntry.create(body);
    return Response.json(newTrackingEntry, { status: 201 });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return Response.json({ error: err.message }, { status: 400 });
    } else {
      return Response.json("Unexpected error");
    }
  } 
}
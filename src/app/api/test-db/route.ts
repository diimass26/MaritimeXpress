import { connectDB } from "@/lib/mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    return NextResponse.json({ message: "MongoDB connected!" });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

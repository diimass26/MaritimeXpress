import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";

export async function GET() {
  try {
    await connectDB();
    return NextResponse.json({ message: "✅ MongoDB connection successful" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "❌ MongoDB connection failed", error: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}

// src/app/api/contact/route.ts
import { connectDB } from "@/lib/db";
import ContactMessage from "@/models/contactmessages";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json({ error: "Semua field harus diisi." }, { status: 400 });
    }

    const newMessage = new ContactMessage({ name, email, phone, subject, message });
    await newMessage.save();

    return NextResponse.json({ message: "Pesan berhasil dikirim." }, { status: 201 });
  } catch (error) {
    console.error("Error simpan pesan:", error);
    return NextResponse.json({ error: "Gagal menyimpan pesan." }, { status: 500 });
  }
}

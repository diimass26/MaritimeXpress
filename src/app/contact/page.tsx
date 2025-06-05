"use client"; // penting kalau pakai state dan event handler di app router

import React, { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  // state untuk input form
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // handle perubahan input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // handle submit form
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Gagal kirim pesan");

    alert("Pesan berhasil dikirim!");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  } catch (error) {
    if (error instanceof Error) {
      alert("Error: " + error.message);
    } else {
      alert("Unknown error occurred");
    }
  }
};


  return (
    <section className="w-full bg-white px-12 md:px-24 py-20 flex flex-col items-center">
      <h2 className="text-4xl font-medium text-[#27548A] text-center mb-12">CONTACT US</h2>

      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-8">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#27548A] text-white p-8 flex-[4] flex flex-col gap-6 shadow-lg"
        >
          <div>
            <label className="block text-xl mb-1">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              className="w-full bg-transparent border-b border-white outline-none py-1"
              required
            />
          </div>
          <div>
            <label className="block text-xl mb-1">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              className="w-full bg-transparent border-b border-white outline-none py-1"
              required
            />
          </div>
          <div>
            <label className="block text-xl mb-1">Phone</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              type="tel"
              className="w-full bg-transparent border-b border-white outline-none py-1"
              required
            />
          </div>
          <div>
            <label className="block text-xl mb-1">Subject</label>
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              type="text"
              className="w-full bg-transparent border-b border-white outline-none py-1"
              required
            />
          </div>
          <div>
            <label className="block text-xl mb-1">Message</label>
            <textarea className="w-full min-h-[32px] bg-transparent border-b border-white outline-none resize-y py-1 h-24" />
          </div>
          <button
            type="submit"
            className="w-48 mt-4 bg-yellow-500 text-black font-medium py-2 hover:brightness-90 transition-all"
          >
            SEND MESSAGE
          </button>
        </form>

         {/* Alamat Kantor */}
        <div className="bg-[#27548A] text-white p-8 flex-[2] shadow-lg">
          <h3 className="text-4xl font-normal text-center mb-6">Our Address</h3>
          <div className="flex flex-col gap-4">
            {[
              {
                title: "Kantor Pusat - Tanjungpinang",
                address: "Jl. H. Fisabilillah No. 88, Tanjungpinang, Kepulauan Riau",
              },
              {
                title: "Cabang Tanjung Priok – Jakarta",
                address: "Jl. Pelabuhan No. 12, Tanjung Priok, Jakarta Utara",
              },
              {
                title: "Cabang Belawan – Medan",
                address: "Jl. Stasiun Pelabuhan No. 3, Belawan, Medan",
              },
              {
                title: "Cabang Tanjung Perak – Surabaya",
                address: "Jl. Perak Timur No. 27, Tanjung Perak, Surabaya",
              },
              {
                title: "Cabang Makassar",
                address: "Jl. Nusantara Baru No. 10, Makassar, Sulawesi Selatan",
              },
              {
                title: "Cabang Ambon",
                address: "Jl. Yos Sudarso No. 14, Ambon, Maluku",
              },
              {
                title: "Cabang Sorong",
                address: "Jl. Basuki Rahmat No. 22, Sorong, Papua Barat",
              },
              {
                title: "Cabang Jayapura",
                address: "Jl. Raya Hamadi No. 19, Jayapura, Papua",
              },
            ].map((loc, i) => (
              <div key={i} className="flex items-start gap-3">
                <Image
                  src="/location-dot-solid.svg"
                  alt="Location"
                  width={20}
                  height={20}
                />
                <div>
                  <p className="text-base font-medium">{loc.title}</p>
                  <p className="text-xs font-normal">{loc.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

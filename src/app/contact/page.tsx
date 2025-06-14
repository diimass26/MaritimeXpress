"use client"; // penting kalau pakai state dan event handler di app router

import React, { useState, useRef } from "react";
import Image from "next/image";
import ScrollButton from '@/app/components/scroll-button';

export default function ContactPage() {
  // state untuk input form
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // State untuk error validasi input email & phone
  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });

  // Fungsi validasi input email dan phone
  const validate = (name: string, value: string) => {
    let error = "";

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        error = "Masukkan email yang valid.";
      }
    }

    if (name === "phone") {
      const phoneRegex = /^[0-9]+$/;
      if (!phoneRegex.test(value)) {
        error = "Hanya boleh angka.";
      } else if (value.length < 12) {
        error = "Nomor telepon minimal 12 digit.";
      }
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  // handle perubahan input
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    // Validasi saat pengguna mengetik
    validate(name, value);
  };

  // handle submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Cek error sebelum submit
    if (errors.email || errors.phone) {
      alert("Periksa kembali input yang tidak valid.");
      return;
    }

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

      // 🔧 Added: reset error setelah submit berhasil
      setErrors({ email: "", phone: "" });
    } catch (error) {
      if (error instanceof Error) {
        alert("Error: " + error.message);
      } else {
        alert("Unknown error occurred");
      }
    }
  };

  const contactRef = useRef<HTMLElement | null>(null);

  return (
    <>
    <section ref={contactRef} id="contact" className="w-full bg-[#F3F3F3] px-12 md:px-24 py-20 flex flex-col items-center">
      <h2 className="text-4xl font-medium text-[#27548A] text-center mb-12">
        CONTACT US
      </h2>

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
            {/* Tampilkan pesan error jika email tidak valid */}
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
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
            {/* Tampilkan pesan error jika phone tidak valid */}
            {errors.phone && (
              <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
            )}
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
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full min-h-[32px] bg-transparent border-b border-white outline-none resize-y py-1 h-24"
              required
            />
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

      <style jsx>{`
        input:-webkit-autofill,
        textarea:-webkit-autofill {
          -webkit-box-shadow: 0 0 0px 1000px #27548A inset !important;
          -webkit-text-fill-color: white !important;
          caret-color: white !important;
          transition: background-color 5000s ease-in-out 0s;
        }
      `}</style>
    </section>
    <ScrollButton sections={[contactRef]} />
    </>
  );
}

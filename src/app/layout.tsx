// app/layout.tsx
import "./globals.css"; // pastikan file ini ada
import type { Metadata } from "next";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

export const metadata: Metadata = {
  title: "PT. MaritimeXpress",
  description: "Layanan logistik maritim terpercaya",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow px-6 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

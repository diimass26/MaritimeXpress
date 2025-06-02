// app/layout.tsx
import '@/app/ui/globals.css'; // pastikan file ini ada
import type { Metadata } from "next";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { Inter } from "next/font/google";
import 'leaflet/dist/leaflet.css';


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

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
      <body className={`flex flex-col min-h-screen ${inter.className}`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

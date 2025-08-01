



"use client";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="h-screen w-full bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white overflow-hidden relative">
      <Navbar />
      <Profile />
      <Footer />
    </main>
  );
}
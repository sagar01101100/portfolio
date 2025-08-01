"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApplicationGrid from "@/components/ApplicationGrid";
import applications from "@/applications/applications";



export default function ProjectsPage() {
  return (
    <div className="min-h-screen w-full bg-[#0e1d2c] text-white relative overflow-hidden">
      <Navbar />
      <ApplicationGrid applications={applications} />
      <Footer />
    </div>
  );
}

"use client";

import ProjectCard from "@/components/ProjectCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projects = [
  {
    title: "Tournament Manager",
    description: "A web app to organize and manage tournaments with team brackets, scores, and live updates.",
    image: "https://source.unsplash.com/random/800x600/?game,brackets",
    link: "https://github.com/sagar01101100/tournament-manager"
  },
  {
    title: "Dev Portfolio",
    description: "Your personal gamified developer portfolio with circuit-grid theme and animations.",
    image: "https://source.unsplash.com/random/800x600/?portfolio,code",
    link: "https://sagar01101100.dev"
  },
  {
    title: "Chat App",
    description: "Realtime chat application built with Socket.io and Next.js for seamless communication.",
    image: "https://source.unsplash.com/random/800x600/?chat,technology",
    link: "https://github.com/sagar01101100/chat-app"
  },
  {
    title: "Expense Tracker",
    description: "Track your income and expenses with graphs, categories, and persistent storage.",
    image: "https://source.unsplash.com/random/800x600/?finance,money",
    link: "https://github.com/sagar01101100/expense-tracker"
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen w-full bg-[#0e1d2c] text-white relative overflow-hidden">
      {/* Navbar with Home Button */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-20 pb-24 px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </main>



      {/* Footer - bottom center */}
      <Footer />
    </div>
  );
}

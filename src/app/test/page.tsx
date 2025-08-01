"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Sagar Das</h1>
        <p className="text-xl text-gray-400 mb-6">
          Full Stack Developer • JavaScript Enthusiast • AWS Learner
        </p>
        <div className="flex gap-6 text-2xl">
          <a href="https://github.com/sagar01101100" target="_blank">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/YOUR-LINKEDIN" target="_blank">
            <FaLinkedin />
          </a>
          <a href="mailto:sagardas@example.com">
            <FaEnvelope />
          </a>
        </div>
      </section>

      {/* About Me */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          I'm a developer who thrives at the intersection of clean design and high-performance code.
          I specialize in building full-stack apps with modern JavaScript frameworks like
          <strong> Next.js, React, Node.js</strong>, and cloud services like <strong>AWS</strong>.
          I love solving real-world problems and constantly push myself to improve and deliver excellence.
        </p>
      </section>

      {/* Projects */}
      <section className="py-20 px-6 bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">
          {/* Project 1 */}
          <div className="bg-gray-700 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Tournament Organizer</h3>
            <p className="text-gray-300 mb-2">
              A full-stack web app to organize, manage, and visualize sports tournaments.
            </p>
            <p className="text-sm text-gray-400">Next.js • MongoDB • Tailwind • Node.js</p>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-700 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">AWS-Powered Image Uploader</h3>
            <p className="text-gray-300 mb-2">
              Upload, store, and preview images using AWS S3, integrated into a React interface.
            </p>
            <p className="text-sm text-gray-400">React • AWS S3 • Express.js</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Skills</h2>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-200">
          <span className="bg-gray-700 px-4 py-2 rounded-full">JavaScript</span>
          <span className="bg-gray-700 px-4 py-2 rounded-full">TypeScript</span>
          <span className="bg-gray-700 px-4 py-2 rounded-full">React</span>
          <span className="bg-gray-700 px-4 py-2 rounded-full">Next.js</span>
          <span className="bg-gray-700 px-4 py-2 rounded-full">Node.js</span>
          <span className="bg-gray-700 px-4 py-2 rounded-full">MongoDB</span>
          <span className="bg-gray-700 px-4 py-2 rounded-full">Tailwind CSS</span>
          <span className="bg-gray-700 px-4 py-2 rounded-full">AWS</span>
          <span className="bg-gray-700 px-4 py-2 rounded-full">Express.js</span>
          <span className="bg-gray-700 px-4 py-2 rounded-full">Git</span>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6 bg-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="text-gray-300 mb-6">Let’s build something amazing together.</p>
        <a
          href="mailto:sagardas@example.com"
          className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Email Me
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 bg-gray-900">
        &copy; {new Date().getFullYear()} Sagar Das. All rights reserved.
      </footer>
    </main>
  );
}

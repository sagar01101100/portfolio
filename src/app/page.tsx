// app/page.tsx

"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-4xl text-center">
        <img
          src="/profile.jpg" // Add this image in public folder
          alt="Sagar Das"
          className="w-40 h-40 mx-auto rounded-full border-4 border-white shadow-lg mb-6"
        />

        <h1 className="text-5xl sm:text-6xl font-bold mb-4 tracking-tight">
          ♞ Sagar ♞
        </h1>

        <h2 className="text-2xl sm:text-3xl font-light text-gray-300 mb-6">
          Full Stack Developer | JavaScript Enthusiast | AWS Learner
        </h2>

        <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto mb-8">
          I build performant and scalable web & mobile applications using Next.js,
          React Native, Node.js, and AWS. Passionate about turning complex
          problems into elegant solutions.
        </p>

        <div className="flex items-center justify-center space-x-6 mb-10">
          <a
            href="https://github.com/sagar01101100"
            target="_blank"
            className="hover:text-gray-300 transition"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://linkedin.com/in/YOUR-LINKEDIN"
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin size={30} />
          </a>
        </div>

        <a
          href="mailto:sagardas@example.com"
          className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition"
        >
          Contact Me
        </a>
      </div>
    </main>
  );
}

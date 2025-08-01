"use client";
import { motion } from "framer-motion";

export default function Profile() {
  return (
    <>
      {/* Circuit Background */}
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuitPattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M0 30 L60 30 M30 0 L30 60" stroke="#00f0ff" strokeWidth="0.5" />
              <circle cx="30" cy="30" r="2" fill="#00f0ff">
                <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="0s" repeatCount="indefinite" />
              </circle>
              <circle cx="30" cy="30" r="2" fill="#00f0ff">
                <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="0.6s" repeatCount="indefinite" />
              </circle>
              <circle cx="30" cy="30" r="2" fill="#00f0ff">
                <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="1.2s" repeatCount="indefinite" />
              </circle>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuitPattern)" />
        </svg>
      </div>

      {/* Header */}
      <motion.header
        className="text-center pt-12 z-10 relative"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent">
          Sagar
        </h1>
        <p className="text-xl mt-4 text-gray-300">_______________________________</p>
      </motion.header>

      {/* Explore Section */}
      <section className="z-10 relative max-w-6xl mx-auto px-6 pb-4 pt-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Explore
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Projects */}
          <motion.a
            href="/projects"
            className="bg-white/5 p-4 rounded-xl border border-white/10 shadow-xl backdrop-blur-md hover:scale-[1.03] transition duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2 text-white">Fossils</h3>
            <p className="text-gray-400 text-sm">
              Dive into my portfolio of apps and software solutions.
            </p>
          </motion.a>

          {/* Resume */}
          <motion.a
            href="/resume"
            className="bg-white/5 p-4 rounded-xl border border-white/10 shadow-xl backdrop-blur-md hover:scale-[1.03] transition duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2 text-white">View Resume</h3>
            <p className="text-gray-400 text-sm">
              See my experience, skills, and achievements.
            </p>
          </motion.a>

          {/* Contact */}
          <motion.a
            href="/contact"
            className="bg-white/5 p-4 rounded-xl border border-white/10 shadow-xl backdrop-blur-md hover:scale-[1.03] transition duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2 text-white">Contact Me</h3>
            <p className="text-gray-400 text-sm">
              Get in touch for collaborations or opportunities.
            </p>
          </motion.a>
        </div>
      </section>
    </>
  );
}
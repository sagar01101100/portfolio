// "use client";

// import { motion } from "framer-motion";
// import {
//   FaGithub,
//   FaLinkedin,
//   FaFacebook,
//   FaInstagram,
//   FaWhatsapp,
// } from "react-icons/fa";

// export default function Home() {
//   return (
//     <main className="h-screen w-full bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white overflow-hidden relative">
//       {/* Full Page Circuit Pattern Background with Blinking Circles */}
//       <div className="absolute inset-0 z-0">
//         <svg className="w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
//           <defs>
//             <pattern id="circuitPattern" width="60" height="60" patternUnits="userSpaceOnUse">
//               <path d="M0 30 L60 30 M30 0 L30 60" stroke="#00f0ff" strokeWidth="0.5" />
              
//               {/* Blinking circle (animated 3 times for pulse effect) */}
//               <circle cx="30" cy="30" r="2" fill="#00f0ff">
//                 <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="0s" repeatCount="indefinite" />
//               </circle>
//               <circle cx="30" cy="30" r="2" fill="#00f0ff">
//                 <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="0.6s" repeatCount="indefinite" />
//               </circle>
//               <circle cx="30" cy="30" r="2" fill="#00f0ff">
//                 <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="1.2s" repeatCount="indefinite" />
//               </circle>
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#circuitPattern)" />
//         </svg>
//       </div>

//       {/* Header */}
//       <motion.header
//         className="text-center pt-12 z-10 relative"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <h1 className="text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent">
//           Sagar
//         </h1>
//         <p className="text-xl mt-4 text-gray-300">_______________________________</p>
//       </motion.header>

//       {/* Explore Section */}
//       <section className="z-10 relative max-w-6xl mx-auto px-6 pb-4 pt-6">
//         <motion.h2
//           className="text-3xl font-bold text-center mb-6"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5, duration: 1 }}
//         >
//           Explore
//         </motion.h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {/* Projects */}
//           <motion.a
//             href="/projects"
//             className="bg-white/5 p-4 rounded-xl border border-white/10 shadow-xl backdrop-blur-md hover:scale-[1.03] transition duration-300 cursor-pointer"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-xl font-semibold mb-2 text-white">Fossils</h3>
//             <p className="text-gray-400 text-sm">
//               Dive into my portfolio of apps and software solutions.
//             </p>
//           </motion.a>

//           {/* Resume */}
//           <motion.a
//             href="/resume"
//             className="bg-white/5 p-4 rounded-xl border border-white/10 shadow-xl backdrop-blur-md hover:scale-[1.03] transition duration-300 cursor-pointer"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-xl font-semibold mb-2 text-white">View Resume</h3>
//             <p className="text-gray-400 text-sm">
//               See my experience, skills, and achievements.
//             </p>
//           </motion.a>

//           {/* Contact */}
//           <motion.a
//             href="/contact"
//             className="bg-white/5 p-4 rounded-xl border border-white/10 shadow-xl backdrop-blur-md hover:scale-[1.03] transition duration-300 cursor-pointer"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-xl font-semibold mb-2 text-white">Contact Me</h3>
//             <p className="text-gray-400 text-sm">
//               Get in touch for collaborations or opportunities.
//             </p>
//           </motion.a>
//         </div>
//       </section>

//       {/* Social Icons in Bottom Right (Horizontal) */}
//       <div className="absolute right-4 bottom-4 z-10 flex gap-4 text-xl">
//         <a
//           href="https://facebook.com/Sagar01101100"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FaFacebook className="hover:text-blue-500" />
//         </a>
//         <a
//           href="https://instagram.com/___s3r___"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FaInstagram className="hover:text-pink-400" />
//         </a>
//         <a
//           href="https://wa.me/7318723934"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FaWhatsapp className="hover:text-green-400" />
//         </a>
//         <a
//           href="https://github.com/sagar01101100"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FaGithub className="hover:text-gray-300" />
//         </a>
//         <a
//           href="https://linkedin.com/in/sagar01101100"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FaLinkedin className="hover:text-blue-600" />
//         </a>
//       </div>
//     </main>
//   );
// }





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
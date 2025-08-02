"use client";
import { motion } from "framer-motion";

export default function Header() {
  return (
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
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export interface ExploreCardProps {
  href: string;
  title: string;
  description: string;
  delay?: number;
}

export default function ExploreCard({
  href,
  title,
  description,
  delay = 0,
}: ExploreCardProps) {
  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <Link
        href={href}
        passHref
        className="block bg-white/5 p-6 rounded-2xl border border-white/10 shadow-xl backdrop-blur-md hover:scale-[1.03] transition-transform duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"
        aria-label={`Explore ${title}`}
      >
        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-indigo-300 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </Link>
    </motion.div>
  );
}

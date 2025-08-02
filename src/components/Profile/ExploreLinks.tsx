"use client";

import { motion } from "framer-motion";
import ExploreCard from "./ExploreCard";
import { exploreLinksData } from "@/data/ExploreLinksData";
import { fadeInFromTop } from "@/utils/frameConfigs";

export default function ExploreLinks() {
  return (
    <section
      className="z-10 relative max-w-6xl mx-auto px-6 pb-4 pt-6"
      aria-labelledby="explore-heading"
    >
      <motion.h2
        id="explore-heading"
        className="text-3xl font-bold text-center mb-6 text-white"
        initial={fadeInFromTop.initial}
        animate={fadeInFromTop.animate}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Explore
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {exploreLinksData.map((link) => (
          <ExploreCard key={link.href} {...link} />
        ))}
      </div>
    </section>
  );
}

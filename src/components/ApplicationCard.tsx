"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then(mod => mod.Player),
  { ssr: false }
);

type ApplicationProps = {
  title: string;
  description: string;
  animation?: string;
  link?: string;
};

export default function ApplicationCard({
   title, description, animation, link }: ApplicationProps) {
  const [animSrc, setAnimSrc] = useState(animation);

  useEffect(() => {
    setAnimSrc(animation);
  }, [animation]);

  return (
    <motion.div
      className="bg-white/5 rounded-xl border border-white/10 overflow-hidden shadow-lg backdrop-blur-md"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-full h-48 bg-black/10 flex items-center justify-center">
        {animSrc ? (
          <Player
            autoplay
            loop
            src={animSrc}
            style={{ height: "100%", width: "100%" }}
          />
        ) : (
          <p className="text-gray-500">No animation</p>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </motion.div>
  );
}

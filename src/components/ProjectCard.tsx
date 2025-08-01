import { motion } from "framer-motion";
import { useState } from "react";

type ProjectProps = {
  title: string;
  description: string;
  image?: string;
  link?: string;
};

const defaultProjectImage = "/cat.png"; // Place this in your public/ folder

export default function ProjectCard({ title, description, image, link }: ProjectProps) {
  const [imgSrc, setImgSrc] = useState(image || defaultProjectImage);

  return (
    <motion.div
      className="bg-white/5 rounded-xl border border-white/10 overflow-hidden shadow-lg backdrop-blur-md"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={imgSrc}
        alt={title}
        onError={() => setImgSrc(defaultProjectImage)}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            className="inline-block mt-3 text-blue-400 hover:underline text-sm"
          >
            View Project →
          </a>
        )}
      </div>
    </motion.div>
  );
}

"use client";
import { useRouter } from "next/navigation";
import AnimatedCat from "@/components/AnimatedCat";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="absolute top-4 left-4 z-10">
      <button
        onClick={() => router.push("/")}
        className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-teal-500 transition duration-300"
        aria-label="Go to home"
      >
        <AnimatedCat />
      </button>
    </nav>
  );
}

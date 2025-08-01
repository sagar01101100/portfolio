"use client";
import { useRouter } from "next/navigation";
import AnimatedHome from "@/components/AnimatedHome";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="absolute top-4 left-4 z-10">
      <button
  onClick={() => router.push("/")}
  className="w-14 h-14 rounded-full border border-white/1 flex items-center justify-center transition duration-300 hover:bg-blue-500/10"
  aria-label="Go to home"
>
  <AnimatedHome />
</button>

    </nav>
  );
}

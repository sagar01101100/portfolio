"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import errorAnim from "@/animations/Error_404.json";

// Dynamically import Player with SSR disabled
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white px-4 text-center">
      <Player
        autoplay
        loop
        src={errorAnim}
        style={{ height: "300px", width: "300px" }}
      />
      <h1 className="text-4xl font-bold mt-6">404 - Page Not Found</h1>
      <p className="text-gray-400 mt-2 mb-6">
        Sorry, the page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
